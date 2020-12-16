import React, { Component } from "react";
import Header from "../../components/header";
import Payee from "../../components/payee";
import payeeInfo from "../../payeeSample.json";

class AllPayees extends Component {

    state = {
        payeeInfo
    }

    render(){
        return (
            <div>
                <Header/>
                {this.state.payeeInfo.map((payee) =>
                    <Payee
                    name={payee.Payee.Name}/>
                )}
            
            </div>
        )
    }
}

export default AllPayees;