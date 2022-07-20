import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const DossierList = () => {
    const [dossiers, setDossier] = useState([]);
 
    useEffect(() => {
        getDossiers();
    }, []);
 
    const getDossiers = async () => {
        const response = await axios.get('http://localhost:5000/dossiers');
        setDossier(response.data);
    }
 
    const deleteDossier = async (id) => {
        await axios.delete(`http://localhost:5000/dossiers/${id}`);
        getDossiers();
    }
 
    return (
        <div>
            <Link to="/dossieradd" className="button is-primary mt-2">Ajouter Nouveau Dossier</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Section</th>
                        <th>Client</th>
                        <th>Adversaire</th>
                        <th>Avocat de l'adversaire</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { dossiers.map((dossier, index) => (
                        <tr key={ dossier.id }>
                            <td>{ index + 1 }</td>
                            <td>{ dossier.section }</td>
                            <td>{ dossier.client }</td>
                            <td>{ dossier.adversaire }</td>
                            <td>{ dossier.avocatAdversaire }</td>
                            <td>
                                <Link to={`/dossieredit/${dossier.id}`} className="button is-small is-info">Modifier</Link>
                                <button onClick={ () => deleteDossier(dossier.id) } className="button is-small is-danger">Supprimer</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default DossierList