import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from "cors";
import routes from './routes/index';
import AppError from "@shared/errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) { // verifica se é uma instancia da classe de erro
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    })
});

const PORT = 3200;

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}! 🏆`);
});