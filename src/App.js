import React, { Component } from "react";
import './App.css';
import Header from "./components/header";
import PayeeCard from "./components/payeeCard";
import payeeInfo from "./payeeSample.json";

class App extends Component {
  state = {
    payeeInfo
  }

  render() {
  return (
    <div>
      <Header/>
      {this.state.payeeInfo.map(payee => (
        <PayeeCard
          payeeName={payee.Payee.Name}
          
        />

      ))}
      
    </div>
  );
}
}

export default App;
