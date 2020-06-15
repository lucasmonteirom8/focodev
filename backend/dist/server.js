"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var public_1 = __importDefault(require("./routes/public"));
var admin_1 = __importDefault(require("./routes/admin"));
dotenv_1.default.config();
var app = express_1.default();
app.use("/public", public_1.default);
app.use("/admin", admin_1.default);
var PORT = process.env.PORT || 3333;
app.listen(PORT, function () { return console.log('Server on port: ' + PORT); });
