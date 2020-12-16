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
                    key={payee.Payee.Name}
                    name={payee.Payee.Name}
                    address={payee.Payee.Address.Address1}
                    city={payee.Payee.Address.City}
                    state={payee.Payee.Address.StateOrProvince}
                    country={payee.Payee.Address.Country}
                    zip={payee.Payee.Address.PostalCode}
                    />
                )}
            
            </div>
        )
    }
}

export default AllPayees;