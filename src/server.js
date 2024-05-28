import express from "express";
import rutaPago from "./routes/routes.pago";

const server = express();

server.use(express.json());
server.use("/api", rutaPago)
export default server;