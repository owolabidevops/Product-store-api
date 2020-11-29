

import "./App.css";

import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
       
        <Route path="/signup">
          <Header />
        
        </Route>
        <Route path="/login">
          <Header />
         
        </Route>
        {/* the last one is the default route start page*/}
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
