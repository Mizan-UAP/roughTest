import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
