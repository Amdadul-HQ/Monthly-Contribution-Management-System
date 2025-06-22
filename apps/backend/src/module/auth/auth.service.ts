import prisma from "../../app/shared/prisma"
import { Credentials, PersonalInfo, PersonalInfoStates } from "./auth.interface";

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

export const AuthService =  {
    signup
}