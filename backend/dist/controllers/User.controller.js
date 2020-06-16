"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var User = /** @class */ (function () {
    function User() {
        this.path = '/users';
        this.router = express_1.default.Router();
        this.index = function (req, res) {
        };
        this.delete = function (req, res) {
        };
        this.update = function (req, res) {
        };
        this.post = function (req, res) {
        };
        this.get = function (req, res) {
        };
        this.initRoutes();
    }
    User.prototype.initRoutes = function () {
        this.router.get('/', this.index);
    };
    return User;
}());
exports.default = User;
