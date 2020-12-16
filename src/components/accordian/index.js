import React from "react";

function Accordian(props){

    return(
        <div className="accordian" id="accordionParent">
            <div className = "accordian-item">
                <h2 className = "accordian-title"> 
                    <button className="accordian-button" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="false" 
                            aria-controls="collapseOne">
                        Payee Details
                    </button>
                </h2>
                <div id="collapseOne" 
                    className="accordion-collapse collapse" 
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionParent">
                    <div className="accordion-body">
                        <p>Details</p>
                    </div>
                </div>
            </div>
            <div className = "accordian-item">
                <h2 className = "accordian-title"> 
                    <button className="accordian-button" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="collapseTwo">
                        Payment Details
                    </button>
                </h2>
                <div id="collapseTwo" 
                    className="accordion-collapse collapse" 
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionParent">
                    <div className="accordion-body">
                        <p>Details</p>
                    </div>
                </div>
            </div>
            <div className = "accordian-item">
                <h2 className = "accordian-title"> 
                    <button className="accordian-button" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree">
                        Remittance Details
                    </button>
                </h2>
                <div id="collapseThree" 
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
