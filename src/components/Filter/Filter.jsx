import React from 'react';

const Filter = ({ value, onChange }) => (
  <div className="input-group input-group-sm mb-3">
    <span className="input-group-text" id="inputGroup-sizing-sm">
      Filter
    </span>
    <input
      type="text"
      className="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-sm"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Filter;
