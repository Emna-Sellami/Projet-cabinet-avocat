import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'
import { Button,Modal} from 'react-bootstrap';
import axios from "axios";
 
const ClientList = () => {
    const [clients, setClient] = useState([]);
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    
 
    const saveClient = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/clients',{
            nom: nom,
            adresse: adresse,
            telephone: telephone
        }) }
 
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
            <div className="crud shadow-lg mb-5 mt-5 bg-body rounded" style={{padding:"1rem", marginLeft:"50px"}}>
            <div className=" mb-4 text-gred" style={{display:"flex"}}>
            <div className=" offset-sm-2 mt-5 mb-4 text-gred" style={{width:"60%", textAlign:"center"}}><h2 style={{color:"green"}}><b>Liste Des Clients</b></h2></div>
            <Button onClick={handleShow} className=" offset-sm-1 mt-5 mb-4 text-gred" variant="primary">Ajouter Nouveau Client</Button>
            </div>
            <table className="table table-striped table-hover table-bordered">
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
                { clients.map( (client, index) => (
                        <tr key={ client.id }>
                            <td>{ index + 1 }</td>
                            <td>{ client.nom }</td>
                            <td>{ client.adresse }</td>
                            <td>{ client.telephone }</td>
                            <td>
                                <a href={`/clientdossierlist/${client.id}`} className="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a href={`/clientedit/${client.id}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                                <a onClick={ () => deleteClient(client.id) } className="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i className="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            </div>

               
            <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Un Client</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form onSubmit={ saveClient }> 
            
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Nom"
                        value={ nom }
                        onChange={ (e) => setNom(e.target.value) }
                    />
                </div>

                <div className="form-group mt-3">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Adresse"
                        value={ adresse }
                        onChange={ (e) => setAdresse(e.target.value) }
                    />
                </div>
 
                <div className="form-group mt-3">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Telephone"
                        value={ telephone }
                        onChange={ (e) => setTelephone(e.target.value) }
                    />
                </div>
 
                    <button type="submit" class="btn btn-success mt-4">Enregistrer</button>
                
            
            </form>
            </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          
        </Modal.Footer>
      </Modal>
      </div>
 
      </div>      



    )
}
 
export default ClientList