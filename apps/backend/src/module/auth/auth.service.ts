import ApiError from "../../app/error/ApiError";
import prisma from "../../app/shared/prisma"
import { Credentials, PersonalInfo, PersonalInfoStates } from "./auth.interface";
import httpStatus from 'http-status';
import bcrypt from 'bcryptjs';
import { createToken } from "../../app/shared/createToken";
import config from "../../app/config";

const signup = async (personalInfo:PersonalInfo,personalInfoStates:PersonalInfoStates,credentials:Credentials) => {
    const result = await prisma.$transaction(async (tx) => {
    // 1. Create credentials (auto-generates memberId)
    const createdCredential = await tx.credentials.create({
      data: credentials,
    });

    const memberId = createdCredential.memberId;

    // 2. Create personal info using the same memberId
    const createdPersonalInfo = await tx.personalInfo.create({
      data: {
        ...personalInfo,
        memberId,
      },
    });

    // 3. Create personal info states
    const createdPersonalInfoStates = await tx.personalInfoStates.create({
      data: {
        ...personalInfoStates,
        memberId,
      },
    });

    // 4. Return all created data if needed
    return {
      credentials: createdCredential,
      personalInfo: createdPersonalInfo,
      personalInfoStates: createdPersonalInfoStates,
    };
  });

  return result;
}

const login = async(payload:any) => {

  const{email,phone,memberId,password} = payload

  let user;
  
  // Check by email if provided
  if (email) {
    user = await prisma.credentials.findFirstOrThrow({where:{email}});
  } 
  // Else check by phone if provided
  else if (phone) {
    user = await prisma.credentials.findFirstOrThrow({where:{phone}})
  }
  // Else check by memberId if provided
  else if (memberId) {
    user = await prisma.credentials.findFirstOrThrow({where:{memberId}})
  }
  // 3. If user not found, throw error
  if (!user) {
    throw new  ApiError(httpStatus.NON_AUTHORITATIVE_INFORMATION,'Invalid credentials');
  }
  // 4. Compare provided password with hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(httpStatus.NON_AUTHORITATIVE_INFORMATION,'Invalid credentials');
  }


  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt.jwt_scret as string,
    config.jwt.expires_in as string
  );
  const refeshToken = createToken(
    jwtPayload,
    config.jwt.refresh_token_secret as string,
    config.jwt.refresh_token_expires_in as string
  );

  const result = {
    accessToken,
    refeshToken,
  };
  return result;
}

export const AuthService =  {
    signup,
    login
}