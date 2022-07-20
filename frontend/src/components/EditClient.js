/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
 
const EditClient = () => {
    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    const { id } = useParams();
 
    const updateClient = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/clients/${id}`,{
            nom: nom,
            adresse: adresse,
            telephone: telephone
        });
    }
 
    useEffect(() => {
        getClientById();
    }, []);
 
    const getClientById = async () => {
        const response = await axios.get(`http://localhost:5000/clients/${id}`);
        setNom(response.data.nom);
        setAdresse(response.data.adresse);
        setTelephone(response.data.telephone);
    }

    return (
        <div className='container'>
        <div className='w-75 mx-auto shadow p-5  mt-3'>
            <h2 className='text-center mb-4'>Modifier Les Données Du Client</h2>
            <form onSubmit={ updateClient }>
                <div className="form-group">
                    <label className="label">Nom</label>
                    <input 
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Nom"
                        value={ nom }
                        onChange={ (e) => setNom(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">Adresse</label>
                    <input 
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Adresse"
                        value={ adresse }
                        onChange={ (e) => setAdresse(e.target.value) }
                    />
                </div>
 
                <div className="form-group">
                    <label className="label">Telephone</label>
                    <input 
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Telephone"
                        value={ telephone }
                        onChange={ (e) => setTelephone(e.target.value) }
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
 
export default EditClient