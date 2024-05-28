import { pool } from "../config/mysql.db";

export const mostrarPago = async(req, res)=>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_PAGO (?)`, [id])
        res.json({"respuesta": respuesta[0]})
    } catch (error) {
        res.json({"error": error})
    }
}

export const listarPago = async(req, res)=>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_PAGO ()`)
        res.json({"respuesta": respuesta[0]})
    } catch (error) {
        res.json({"error": error})
    }
}

export const agregarPago = async(req, res)=>{
    const {id, pago} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_AGREGAR_PAGO ("${id}" , "${pago}")`)
        res.json({"respuesta": "producto agregado correctamente"})
    } catch (error) {
        res.json({"error": "producto no agregado"})
    }
}

export const modificarPago = async(req, res)=>{
    const {id, pago} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_MODIFICAR_PAGO ("${id}" , "${pago}")`)
        res.json({"respuesta": "producto modificado correctamente"})
    } catch (error) {
        res.json({"error": "producto no modificado"})
    }
}

export const eliminarPago = async(req, res)=>{
    const {id, pago} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_PAGO ("${id}" , "${pago}")`)
        res.json({"respuesta": "producto eliminado correctamente"})
    } catch (error) {
        res.json({"error": "producto no eliminado"})
    }
}