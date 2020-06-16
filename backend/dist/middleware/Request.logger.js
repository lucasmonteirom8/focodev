"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestLogger = function (req, res, next) {
    console.info(req.method + " " + req.originalUrl);
    var start = new Date().getTime();
    res.on('finish', function () {
        var elapsed = new Date().getTime() - start;
        console.info("Requested Logged => " + req.method + " " + req.path + " " + req.originalUrl + " " + res.statusCode + " " + elapsed + "ms");
    });
    next();
};
exports.default = requestLogger;
