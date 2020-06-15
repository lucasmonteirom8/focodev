import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import  publicRoutes  from './routes/public';
import  adminRoutes  from './routes/admin';
import requestLogger from './middleware/Request.logger';

dotenv.config();

const app = express();
app.use(requestLogger);
app.use("/public", publicRoutes);
app.use("/admin", adminRoutes);

const PORT: string|number = process.env.PORT || 3333;
app.listen(PORT, () => console.log('Server on port: ' + PORT))