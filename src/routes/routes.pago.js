import { Router } from "express";
import { agregarPago, eliminarPago, listarPago, modificarPago, mostrarPago } from "../controllers/controllers.pago";

const rutaPago = Router();


rutaPago.get("/pagos/:id", mostrarPago);
rutaPago.get("/pagos", listarPago);
rutaPago.post("/pagos", agregarPago);
rutaPago.put("/pagos", modificarPago);
rutaPago.delete("/pagos", eliminarPago);


export default rutaPago;