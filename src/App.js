import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AllPayees from "./pages/allPayees";


function App() {

  return (
    <Router>  
        <Route exact path="/" component={AllPayees} />
      
    </Router>
  );
}

export default App;
