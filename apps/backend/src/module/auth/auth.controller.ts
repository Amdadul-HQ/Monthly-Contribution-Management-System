import { catchAsync } from "../../app/helper/catchAsync";
import { AuthService } from "./auth.service";

const signup = catchAsync(async(req,res) => {
    
    const {name,fatherName,motherName,address,occupation,email,phone,nid,joingDate,refrenceName,montlyDeposit,registrationFee,paymentMethod,password} = req.body;

    const personalInfo = {
        name,
        fatherName,
        motherName,
        address,
        occupation,
        email,
        phone,
        nid,
        joingDate,
        refrenceName,
    }

    const personalInfoStates = {
        montlyDeposit,
        registrationFee,
        paymentMethod
    }

    const credentials = {
        name,
        email,
        phone,
        password,
    }

    const result = await AuthService.signup()
})


export const AuthController = {
    signup
}