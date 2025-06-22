import prisma from "../../app/shared/prisma"

const signup = async (data:any) => {
    const result = await prisma.personalInfo.create(data)
    return result;
}

export const AuthService =  {
    signup
}