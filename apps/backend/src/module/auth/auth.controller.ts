import ApiError from "../../app/error/ApiError";
import { catchAsync } from "../../app/helper/catchAsync";
import { AuthService } from "./auth.service";
import httpStatus from 'http-status';
import bcrypt from 'bcryptjs';

const signup = catchAsync(async(req,res) => {
    
    const {name,fatherName,motherName,address,occupation,email,phone,nid,joiningDate,referenceName,senderPhoneNumber,monthlyDeposit,registrationFee,paymentMethod,password} = req.body;

    const personalInfo = {
        name,
        fatherName,
        motherName,
        address,
        occupation,
        email,
        phone,
        nid,
        joiningDate,
        referenceName,
        senderPhoneNumber
    }

    const personalInfoStates = {
        monthlyDeposit,
        registrationFee,
        paymentMethod
    }

    const hasPassword = await bcrypt.hash(password, 10);
    if (!hasPassword) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'bcrypt solt generate problem');
    }

    const credentials = {
        name,
        email,
        phone,
        password:hasPassword,
    }


    const result = await AuthService.signup(personalInfo,personalInfoStates,credentials)
})


export const AuthController = {
    signup
}