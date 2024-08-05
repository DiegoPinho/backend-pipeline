import express, { json, Request, Response } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import httpStatus from "http-status";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import errorHandlerMiddleware from "./middlewares/error-middleware";
import phrasesRouter from "./routers/phrases-router";
import swaggerOptions from "./config/swagger-options";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());


app.get("/health", (req: Request, res: Response) => res.status(httpStatus.OK).send(`I'm okay!`));

// Swagger
const specs = swaggerJsdoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(phrasesRouter);
app.use(errorHandlerMiddleware);

export default app;