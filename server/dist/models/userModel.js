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
exports.getuser = exports.createuser = void 0;
const db_config_1 = __importDefault(require("../config/db_config"));
// export const login = (email:string) => { 
// return QueryDB('Select * from users where email = ?', [email as string]);
// }
const createuser = (registration_data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = registration_data;
    return (0, db_config_1.default)('INSERT into users (name,email) values(?,?) ', registration_data);
});
exports.createuser = createuser;
const getuser = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, db_config_1.default)('SELECT * from users ');
});
exports.getuser = getuser;
