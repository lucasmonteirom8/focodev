"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    dialect: 'postgres',
    host: process.env.HOST,
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    port: 5432,
    define: {
        timestamps: true,
    },
};
