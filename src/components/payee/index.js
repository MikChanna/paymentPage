import React from "react";
import "./style.css";

function Payee(props){


    return(
        <div className = "card">
            <div className = "card-header">
                Payee
            </div>
            <div className="card-body">
            <h5 className = "card-title">{props.name}</h5>
            <p class="card-text"> more text</p>
            <a href="#" className="btn btn-primary"> See Details</a>
            </div>
        </div>
    )
}

export default Payee;
