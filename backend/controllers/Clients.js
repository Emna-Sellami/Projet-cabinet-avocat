import Client from "../models/clientModel.js";
 
export const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getClientById = async (req, res) => {
    try {
        const client = await Client.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(client[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createClient = async (req, res) => {
    try {
        await Client.create(req.body);
        res.json({
            "message": "Client Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateClient = async (req, res) => {
    try {
        await Client.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Client Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteClient = async (req, res) => {
    try {
        await Client.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Client Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}