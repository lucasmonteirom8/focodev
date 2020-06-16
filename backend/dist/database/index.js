"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Database = /** @class */ (function () {
    function Database() {
        this.init();
    }
    Database.prototype.init = function () {
        console.log('user');
    };
    return Database;
}());
var database = new Database();
exports.default = database;
