import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const ClientList = () => {
    const [clients, setClient] = useState([]);
 
    useEffect(() => {
        getClients();
    }, []);
 
    const getClients = async () => {
        const response = await axios.get('http://localhost:5000/clients');
        setClient(response.data);
    }
 
    const deleteClient = async (id) => {
        await axios.delete(`http://localhost:5000/clients/${id}`);
        getClients();
    }
 
    return (
        <div>
            <Link to="/clientadd" className="button is-primary mt-2">Ajouter Nouveau Client</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Telephone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { clients.map((client, index) => (
                        <tr key={ client.id }>
                            <td>{ index + 1 }</td>
                            <td>{ client.nom }</td>
                            <td>{ client.adresse }</td>
                            <td>{ client.telephone }</td>
                            <td>
                                <Link to={`/clientedit/${client.id}`} className="button is-small is-info">Modifier Client</Link>
                                <button onClick={ () => deleteClient(client.id) } className="button is-small is-danger">Supprimer Client</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default ClientList