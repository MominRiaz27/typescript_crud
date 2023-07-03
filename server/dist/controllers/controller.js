"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.createUser = void 0;
const userModel_1 = require("./../models/userModel");
const user_1 = __importDefault(require("../entity/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    yield (0, userModel_1.createuser)(req.body);
    const createUserDTO = req.body;
    const user = new user_1.default(createUserDTO.name, createUserDTO.email);
    console.log(user);
    res.status(201).json({ message: 'User created successfully' });
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const data = yield (0, userModel_1.getuser)();
    res.status(200).json(data);
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("inside update user");
    const data = yield (0, userModel_1.getuser)();
    res.status(200).json(data);
});
exports.updateUser = updateUser;
