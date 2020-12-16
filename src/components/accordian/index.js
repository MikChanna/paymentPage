import React from "react";

function Accordian(props){
    let detailName = "#" + props.name;
    let paymentName = props.name + "Two";
    let paymentNameID = "#" + paymentName;
    let remittanceName = props.name + "Three";
    let remittanceNameID = "#" + remittanceName

    return(
        <div className="accordion" id="accordionParent">
            <div className = "accordion-item">
                <h2 className = "accordion-title"> 
                    <button className="accordion-button accordionBtn" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={detailName}
                            aria-expanded="false" 
                            aria-controls={props.name}>
                        Details
                    </button>
                </h2>
                <div id={props.name} 
                    className="accordion-collapse collapse" 
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionParent">
                    <div className="accordion-body">
                        <p>Details</p>
                    </div>
                </div>
            </div>
            <div className = "accordion-item">
                <h2 className = "accordion-title"> 
                    <button className="accordion-button accordionBtn" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={paymentNameID} 
                            aria-expanded="false" 
                            aria-controls={paymentName}>
                        Payment Details
                    </button>
                </h2>
                <div id={paymentName} 
                    className="accordion-collapse collapse" 
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionParent">
                    <div className="accordion-body">
                        <p>Details</p>
                    </div>
                </div>
            </div>
            <div className = "accordion-item">
                <h2 className = "accordion-title"> 
                    <button className="accordion-button accordionBtn" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={remittanceNameID} 
                            aria-expanded="false" 
                            aria-controls={remittanceName}>
                        Remittance Details
                    </button>
                </h2>
                <div id={remittanceName} 
                    className="accordion-collapse collapse" 
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionParent">
                    <div className="accordion-body">
                        <p>Details</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordian;
