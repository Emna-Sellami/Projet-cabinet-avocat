/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
 
const EditClient = () => {
    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    const history = useHistory();
    const { id } = useParams();
 
    const updateClient = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`,{
            nom: nom,
            adresse: adresse,
            telephone:telephone
        });
        history.push("/");
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
        <div>
            <form onSubmit={ updateClient }>
                <div className="field">
                    <label className="label">Nom</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Nom"
                        value={ nom }
                        onChange={ (e) => setNom(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Adresse</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Adresse"
                        value={ adresse }
                        onChange={ (e) => setAdresse(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Telephone</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Telephone"
                        value={ telephone }
                        onChange={ (e) => setTelephone(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Mettre à Jour</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditClient