/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
 
const EditDossier = () => {
    const [section, setSection] = useState('');
    const [client, setClient] = useState('');
    const [adversaire, setAdversaire] = useState('');
    const [avocatAdversaire, setAvocatAdversaire] = useState('');
    const { id } = useParams();
 
    const updateDossier = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/dossiers/${id}`,{
            section: section,
            client: client,
            adversaire: adversaire,
            avocatAdversaire: avocatAdversaire
        });
    }
 
    useEffect(() => {
        getDossierById();
    }, []);
 
    const getDossierById = async () => {
        const response = await axios.get(`http://localhost:5000/dossiers/${id}`);
        setSection(response.data.section);
        setClient(response.data.client);
        setAdversaire(response.data.adversaire);
        setAvocatAdversaire(response.data.avocatAdversaire);
    }

    return (
        <div>
            <form onSubmit={ updateDossier }>
            <div className="field">
                    <label className="label">Section</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Section"
                        value={ section }
                        onChange={ (e) => setSection(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Client</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Client"
                        value={ client }
                        onChange={ (e) => setClient(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Adversaire</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Adversaire"
                        value={ adversaire }
                        onChange={ (e) => setAdversaire(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">AvocatAdversaire</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Avocat de l'adversaire"
                        value={ avocatAdversaire }
                        onChange={ (e) => setAvocatAdversaire(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Mettre à Jour</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditDossier