import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientList from "./components/ClientList";
import EditClient from "./components/EditClient";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DossierList from "./components/DossierList";
import EditDossier from "./components/EditDossier";
 
function App() {
  return (
    <Router>
      <Sidebar/>
      <Navbar/>
    <div>
      <div className="columns container">
        <div className="column is-half is-offset-one-quarter">
          <Routes>

            <Route exact path="/clientlist" element={ <ClientList />}>
            </Route>
            <Route exact path="/dossierlist" element={ <DossierList />}>
            </Route>
            <Route path="/clientedit/:id" element={<EditClient />}>
            </Route>
            <Route path="/dossieredit/:id" element={<EditDossier />}>
            </Route>

          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;