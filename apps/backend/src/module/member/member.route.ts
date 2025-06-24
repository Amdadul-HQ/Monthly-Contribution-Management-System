import express from "express";
import auth from "../../app/middleWares/auth";
import { Role } from "@prisma/client";
import { MemberController } from "./member.controller";

const router = express.Router();

router.get('/request',auth(Role.ADMIN),MemberController.getAllMemberRequest)

export const MemberRoutes = router;