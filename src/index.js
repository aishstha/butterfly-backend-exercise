import "./env";

import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";

import routes from "./routes";
import json from "./middlewares/json";
import logger, { logStream } from "./utils/logger";
import * as errorHandler from "./middlewares/errorHandler";

const app = express();

const APP_PORT = process.env.APP_PORT || "8000";
const APP_HOST = process.env.APP_HOST || "0.0.0.0";

app.set("port", APP_PORT);
app.set("host", APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("tiny", { stream: logStream }));
app.use(bodyParser.json());
app.use(errorHandler.bodyParser);
app.use(json);

// API Routes
app.use("/api", routes);

// Error Middleware
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen(app.get("port"), app.get("host"), () => {
  logger.info(
    `Server started at http://${app.get("host")}:${app.get("port")}/api`
  );
});

export default app;
