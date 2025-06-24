import { catchAsync } from "../../app/helper/catchAsync";
import { sendResponse } from "../../app/shared/sendResponse";
import { MemberService } from "./member.service";
import httpStatus from 'http-status';

const getAllMemberRequest = catchAsync(async (req,res) => {
    const result = await MemberService.getAllMemberRequest()
    sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Member Request list Fetched Successfully',
    data: result
  });
});

export const MemberController = {
    getAllMemberRequest
}