import React, { useState, useEffect } from "react";
import moment from "moment";

import practitionerJSON from "../../api/practitioners";
import appointmentsJSON from "../../api/appointments";

import CollapsibleComponent from "../../Componets/Collapsible";
import DateFilter from "../../Componets/DateFilter";

function Home() {
  const [practitioners, setPractitioners] = useState(practitionerJSON);
  const [appointments, setAppointments] = useState(appointmentsJSON);
  const [practitionerApointments, setPractitionerApointments] = useState([]);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  useEffect(() => {}, [dateFrom, dateTo]);

  const getpractitionerApointments = (id) => {
    let _appointments = appointments;

    if (dateFrom) {
      _appointments = _appointments.filter((appointment) => {
        let DatesDiff = moment(appointment.date).diff(moment(dateFrom));
        if (DatesDiff >= 0) return appointment;
      });
    }

    if (dateTo) {
      _appointments = _appointments.filter((appointment) => {
        let DatesDiff = moment(appointment.date).diff(moment(dateTo));
        if (DatesDiff <= 0) return appointment;
      });
    }

    setPractitionerApointments(
      _appointments.filter((appointment) => appointment.practitioner_id == id)
    );
  };

  const handleDatesChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "from":
        setDateFrom(value);
        break;

      case "to":
        setDateTo(value);
        break;
    }
  };

  return (
    <div id="home-page">
      <DateFilter handleDatesChange={handleDatesChange} />

      {practitioners &&
        practitioners.map((practitioner, i) => (
          <CollapsibleComponent
            key={i}
            practitioner={practitioner}
            practitionerApointments={practitionerApointments}
            getpractitionerApointments={getpractitionerApointments}
          />
        ))}
    </div>
  );
}

export default Home;
