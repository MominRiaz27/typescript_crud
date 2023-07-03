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
const promise_1 = __importDefault(require("mysql2/promise"));
// Assuming you have the necessary connection details
const connectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'sqlpass',
    database: 'ts_db',
};
const QueryDB = (query, values) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield promise_1.default.createConnection(connectionOptions);
        const [results] = yield connection.execute(query, values);
        yield connection.end();
        return results;
    }
    catch (error) {
        // Handle the error appropriately
        console.error('Database query error:', error);
        throw error;
    }
});
exports.default = QueryDB;
