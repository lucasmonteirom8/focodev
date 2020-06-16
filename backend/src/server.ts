import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import publicRoutes from "./routes/public";
import adminRoutes from "./routes/admin";
import requestLogger from "./middleware/Request.logger";

import UserController from "./controllers/User.controller";

import App from "./app";
import bodyParser from "body-parser";

const app = new App({
  port: 3000,
  controllers: [
    new UserController()
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({extended: true}),
    requestLogger
  ]
})

app.listen();