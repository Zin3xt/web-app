import React from "react";
import { useState } from "react";
import moment from "moment";
import Graph from "./graph";

function DatePicker() {
  const [date, setDate] = useState(moment().startOf("day"));
  const [limit, setLimit] = useState(10);

  const [filters, setFilters] = useState({
    date: moment().startOf("day"),
    limit: 10,
  });

  const handleApply = () => {
    setFilters({ date, limit });
  };
  return (
    <>
      <div className="d-flex justify-content-end gap-2">
        <input
          className="form-control w-25"
          type="number"
          placeholder="Limits"
          onChange={(e) => {
            const { value } = e.target;
            // reject non-numeric characters and negative numbers
            if (Number(value) > 0 && Number(value) <= 200) {
              setLimit(value);
              return;
            }
            setLimit(10);
            alert("Negative number is not allowed and max is 200");
          }}
        />
        <input
          className="form-control w-25"
          type="date"
          onChange={(e) => setDate(moment(e.target.value).startOf("day"))}
        />
        <button className="btn btn-primary" onClick={handleApply}>
          Apply
        </button>
      </div>
      <Graph limit={filters.limit} date={filters.date} />
    </>
  );
}

export default DatePicker;
