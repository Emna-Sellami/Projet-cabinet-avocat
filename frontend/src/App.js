import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClientList from "./components/ClientList";
import AddClient from "./components/AddClient";
import EditClient from "./components/EditClient";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Switch>
            <Route exact path="/">
              <ClientList />
            </Route>
            <Route path="/clientadd">
              <AddClient />
            </Route>
            <Route path="/clientedit/:id">
              <EditClient />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;