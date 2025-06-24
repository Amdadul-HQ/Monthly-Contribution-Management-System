import prisma from "../../app/shared/prisma"

const getAllMemberRequest = async () => {
    const result = await prisma.personalInfo.findMany({
        where:{
            credentials:{
                role:'MEMBER'
            },
            status:"Pending",
        },
        include:{
            personalInfoStates:true
        }
    });
    return result
}

export const MemberService = {
    getAllMemberRequest
}