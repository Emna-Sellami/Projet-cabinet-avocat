import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'
import { Button,Modal} from 'react-bootstrap';
import axios from "axios";
 
const ClientDossierList = () => {
    const [dossiers, setDossier] = useState([]);
    
    const [section, setSection] = useState('');
    const [client, setClient] = useState('');
    const [adversaire, setAdversaire] = useState('');
    const [avocatAdversaire, setAvocatAdversaire] = useState('');
    

    useEffect(() => {
        getDossier();
    }, []);

    const getDossier = async (id) => {
        const response = await axios.get(`http://localhost:5000/dossiers/${id}`);
        setSection(response.data.section);
        setClient(response.data.client);
        setAdversaire(response.data.adversaire);
        setAvocatAdversaire(response.data.avocatAdversaire);
    }
 

    return (
        <div>
            <div className="crud shadow-lg mb-5 mt-5 bg-body rounded" style={{padding:"1rem", marginLeft:"50px"}}>
            <div className=" mb-4 text-gred" style={{display:"flex"}}>
            <div className=" offset-sm-2 mt-5 mb-4 text-gred" style={{width:"60%", textAlign:"center"}}><h2 style={{color:"green"}}><b>Liste Des Dossiers de </b></h2></div>
            </div>
            <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
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
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            </div>
            </div>
            </div>

  );
};

export default ClientDossierList;