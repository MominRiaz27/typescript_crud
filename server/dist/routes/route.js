"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const dataValidation_1 = __importDefault(require("../validation/dataValidation"));
const controller_2 = require("../controllers/controller");
const router = (0, express_1.Router)();
router.post('/createUser', dataValidation_1.default, controller_1.createUser);
router.get('/getUser', controller_2.getUser);
router.patch('/updateUser', controller_2.getUser);
exports.default = router;
