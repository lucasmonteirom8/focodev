"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var publicRoutes = express_1.Router();
publicRoutes.get("/");
exports.default = publicRoutes;
