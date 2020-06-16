"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var adminRoutes = express_1.Router();
adminRoutes.get("/get", function (req, res) {
    res.status(200).json({ message: "Done" });
});
exports.default = adminRoutes;
