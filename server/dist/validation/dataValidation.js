"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validationSchema_1 = __importDefault(require("../schema/validationSchema"));
const zod_1 = require("zod");
const responses_1 = __importDefault(require("../utils/responses"));
const signupValidation = (req, res, next) => {
    console.log("inside validation");
    try {
        const value = validationSchema_1.default.parse(req.body);
        console.log("value data is ", value);
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            console.log(err.issues);
            res.send({
                status: responses_1.default.BAD_REQUEST,
                message: err.issues[0].message
            });
        }
    }
    next();
};
exports.default = signupValidation;
