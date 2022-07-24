import express from "express";
 
import { 
    getAllDossiers,
    createDossier,
    getDossierById,
    updateDossier,
    deleteDossier,
    getDossierByNom
} from "../controllers/Dossiers.js";

 
const router = express.Router();
 
router.get('/', getAllDossiers);
router.get('/:id', getDossierById);
router.post('/', createDossier);
router.patch('/:id', updateDossier);
router.delete('/:id', deleteDossier);
router.get('/:client', getDossierByNom);
 
export default router;