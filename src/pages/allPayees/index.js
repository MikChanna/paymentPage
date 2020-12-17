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
                    attention={payee.Payee.Attention}
                    submissionDate= {payee.Payee.SubmissionDate}
                    pan={payee.Payment.PAN}
                    cvv={payee.Payment.CVV}
                    exp={payee.Payment.Exp}
                    fax= {payee.Payee.Fax}
                    phone={payee.Payee.Phone}
                    remittance={payee.Remittance}
                    PN={payee.Remittance.map((sub)=>
                        sub.PayorName + " ")}
                    PI={payee.Remittance.map((sub)=>
                        sub.PayorId + " ")}
                    invoice={payee.Remittance.map((sub)=>
                        sub.InvoiceNo + " ")}
                    description={payee.Remittance.map((sub)=>
                        sub.Description + " ")}
                    amount={payee.Remittance.map((sub)=>
                        sub.Amount + " ")}
                    />
                )}
            
            </div>
        )
    }
}

export default AllPayees;