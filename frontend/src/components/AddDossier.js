import { useState } from 'react'
import axios from "axios";

 
const AddDossier = () => {
    const [section, setSection] = useState('');
    const [client, setClient] = useState('');
    const [adversaire, setAdversaire] = useState('');
    const [avocatAdversaire, setAvocatAdversaire] = useState('');

 
    const saveDossier = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/dossiers',{
            section: section,
            client: client,
            adversaire: adversaire,
            avocatAdversaire: avocatAdversaire
        });
       
    }

    return (
        <div>
            <form onSubmit={ saveDossier }>
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
                    <button className="button is-primary">Enregistrer</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddDossier
