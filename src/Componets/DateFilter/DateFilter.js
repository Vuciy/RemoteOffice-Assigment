import React from "react";

function DateFilter({ handleDatesChange }) {
  return (
    <div className="date-filter">
      <div className="row">
        <div className="col-sm-6">
          <div className="row form-group">
            <label className="col-sm-2">From:</label>
            <input
              onChange={handleDatesChange}
              name="from"
              type="date"
              className="col-sm-10 form-control"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row form-group">
            <label className="col-sm-2">To:</label>
            <input
              onChange={handleDatesChange}
              name="to"
              type="date"
              className="col-sm-9 form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateFilter;
