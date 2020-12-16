import React from "react";
import "./style.css"

function PayeeCard(props){


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"> {props.payeeName} </h5>
                <p className = "card-text"> Build card text here</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Item 1</li>
                <li className="list-group-item">Item 2</li>
                <li className="list-group-item">Item 3</li>
            </ul>

        </div>
    )
}

export default PayeeCard;
