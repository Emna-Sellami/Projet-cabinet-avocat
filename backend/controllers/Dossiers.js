import Dossier from "../models/dossierModel.js";
 
export const getAllDossiers = async (req, res) => {
    try {
        const dossiers = await Dossier.findAll();
        res.json(dossiers);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getDossierById = async (req, res) => {
    try {
        const dossier = await Dossier.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(dossier[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createDossier = async (req, res) => {
    try {
        await Dossier.create(req.body);
        res.json({
            "message": "Dossier Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateDossier = async (req, res) => {
    try {
        await Dossier.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Dossier Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteDossier = async (req, res) => {
    try {
        await Dossier.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Dossier Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getDossierByNom = async (req, res) => {
    try {
        const dossier = await Dossier.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(dossier[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}