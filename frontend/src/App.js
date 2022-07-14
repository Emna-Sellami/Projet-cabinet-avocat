import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientList from "./components/ClientList";
import AddClient from "./components/AddClient";
import EditClient from "./components/EditClient";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>

            <Route exact path="/" element={ <ClientList />}>
            </Route>
            <Route path="/clientadd" element={<AddClient />}>
            </Route>
            <Route path="/clientedit/:id" element={<EditClient />}>
            </Route>

          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;