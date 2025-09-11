/*
helmet: Adds security headers (best practice).
morgan: HTTP request logging.
cors: Enables cross-origin resource sharing.
express.json(): Parses JSON body.
*/

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Security + logging middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// API routes
app.use("/api", routes);

// Error Handling Middleware (last in chain)
app.use(errorHandler);

module.exports = app;
