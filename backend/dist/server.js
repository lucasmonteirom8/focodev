"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Request_logger_1 = __importDefault(require("./middleware/Request.logger"));
var User_controller_1 = __importDefault(require("./controllers/User.controller"));
var app_1 = __importDefault(require("./app"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = new app_1.default({
    port: 3000,
    controllers: [
        new User_controller_1.default(),
    ],
    middleWares: [
        body_parser_1.default.json(),
        body_parser_1.default.urlencoded({ extended: true }),
        Request_logger_1.default
    ]
});
app.listen();
