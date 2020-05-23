import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/layout/navbar";
import Login from "./components/auth/login";

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Login}/>
      </div>
    </Router>
  );
}

export default App;
