import {Request, Response, NextFunction } from "express";
import userSchema from "../schema/validationSchema"
import { z } from "zod";
import HTTPCodes from "../utils/responses"

const signupValidation = (req:Request, res:Response, next:NextFunction) => {
    console.log("inside validation");
    try{
        const value = userSchema.parse(req.body);
        console.log("value data is ",value);

    }
    catch (err){
        if (err instanceof z.ZodError) {
            console.log(err.issues);
            res.send({
                status:HTTPCodes.BAD_REQUEST,
                message: err.issues[0].message})
          }
    }
       next();
  };

  export default signupValidation