import dotenv from 'dotenv';
dotenv.config();

export default {
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