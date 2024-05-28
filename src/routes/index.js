import { Router } from "express";
import rutaPago from "./routes.pago";

const ruta = Router();


ruta.use("/api", rutaPago)

export default ruta;