import React from "react";

function CollapsibleTrigger({practitioner, getpractitionerApointments}) {
    return (
        <div className="collapsable-trigger" onClick={() => getpractitionerApointments(practitioner.id)} >
            {practitioner.name}

            <span style={{float: "right"}}>
            <i className="fas fa-chevron-down"></i>
            </span>
        </div>
    );
}

export default CollapsibleTrigger;