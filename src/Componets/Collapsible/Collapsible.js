import React, { useEffect } from "react";
import Collapsible from "react-collapsible";
import CollapsibleTrigger from "../CollapsibleTrigger";

function CollapsibleCompanent({
  practitioner,
  practitionerApointments,
  getpractitionerApointments,
}) {
  return (
    <Collapsible
      trigger={
        <CollapsibleTrigger
          practitioner={practitioner}
          getpractitionerApointments={getpractitionerApointments}
        />
      }
    >
      <div className="collapsible-body">
        <table className="table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Appointment Type</th>
              <th>Duration</th>
              <th>Revenue</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {practitionerApointments &&
              practitionerApointments.map((appointment, i) => (
                <tr key={i}>
                  <td>{appointment.client_name}</td>
                  <td>{appointment.appointment_type}</td>
                  <td>{appointment.duration}</td>
                  <td>{appointment.revenue}</td>
                  <td>{appointment.cost}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Collapsible>
  );
}

export default CollapsibleCompanent;
