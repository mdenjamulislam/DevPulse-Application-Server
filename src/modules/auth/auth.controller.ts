import type { Request, Response } from "express"
import sendResponse from "../../utlity/sendResponse"
import { authService } from "./auth.service"


const signupUser = async (req: Request, res: Response) => {

    try {
        const result = await authService.signupUserIntoDB(req.body);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "User registered successfully!",
            data: result.rows[0],
        });

    } catch (error: any) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            data: error
        })
    }
}

export const authController = {
    signupUser,
}