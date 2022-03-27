import './App.css'
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import ManagePrograms from "./components/programs/ManagePrograms";
import CreateProgram from "./components/programs/CreateProgram";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/manage-programs" component={ManagePrograms}/>
                    <Route path="/create-program" component={CreateProgram}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </>
    )

}

export default App