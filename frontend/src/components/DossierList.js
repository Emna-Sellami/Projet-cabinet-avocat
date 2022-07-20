import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'
import { Button,Modal} from 'react-bootstrap';
import axios from "axios";
import { Link } from "react-router-dom";
 
const DossierList = () => {
    const [dossiers, setDossier] = useState([]);
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <div className="crud shadow-lg mb-5 mt-5 bg-body rounded" style={{padding:"1rem", marginLeft:"50px"}}>
            <div className=" mb-4 text-gred" style={{display:"flex"}}>
            <div className=" offset-sm-2 mt-5 mb-4 text-gred" style={{width:"60%", textAlign:"center"}}><h2 style={{color:"green"}}><b>Liste Des Dossiers</b></h2></div>
            <Button onClick={handleShow} className=" offset-sm-1 mt-5 mb-4 text-gred" variant="primary">Ajouter Nouveau Dossier</Button>
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
                            <td>
                            <a href={`/dossieredit/${dossier.id}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                                <a onClick={ () => deleteDossier(dossier.id) } className="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i className="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            </div>
            </div>

            <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Un Dossier</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form onSubmit={ saveDossier }>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Section"
                        value={ section }
                        onChange={ (e) => setSection(e.target.value) }
                    />
                </div>

                <div className="form-group mt-3">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Client"
                        value={ client }
                        onChange={ (e) => setClient(e.target.value) }
                    />
                </div>

                <div className="form-group mt-3">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Adversaire"
                        value={ adversaire }
                        onChange={ (e) => setAdversaire(e.target.value) }
                    />
                </div>
 
                <div className="form-group mt-3">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Avocat de l'adversaire"
                        value={ avocatAdversaire }
                        onChange={ (e) => setAvocatAdversaire(e.target.value) }
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
 
export default DossierList