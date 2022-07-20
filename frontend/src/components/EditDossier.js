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
        <div className='container'>
        <div className='w-75 mx-auto shadow p-5  mt-3'>
            <h2 className='text-center mb-4'>Modifier Les Données Du Dossier</h2>
            <form onSubmit={ updateDossier }>
            <div className="form-group">
                    <label className="label">Section</label>
                    <input 
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Section"
                        value={ section }
                        onChange={ (e) => setSection(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">Client</label>
                    <input 
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Client"
                        value={ client }
                        onChange={ (e) => setClient(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">Adversaire</label>
                    <input 
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Adversaire"
                        value={ adversaire }
                        onChange={ (e) => setAdversaire(e.target.value) }
                    />
                </div>
 
                <div className="form-group">
                    <label className="label">AvocatAdversaire</label>
                    <input 
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Avocat de l'adversaire"
                        value={ avocatAdversaire }
                        onChange={ (e) => setAvocatAdversaire(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="btn btn-warning btn-block mt-3" style={{width:"100%"}}>Mettre à Jour</button>
                </div>
            </form>
        </div>    
        </div>
    )
}
 
export default EditDossier