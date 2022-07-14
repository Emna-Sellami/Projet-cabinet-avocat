
import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddClient = () => {
    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    const history = useHistory();
 
    const saveClient = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/clients',{
            nom: nom,
            adresse: adresse,
            telephone:telephone
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveClient }>
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
                    <button className="button is-primary">Enregistrer</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddClient