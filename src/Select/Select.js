import React from "react";

const Select = ({ currencyList, ...props }) => {
  return (
    <select defaultValue={"Select"} {...props}>
      <option value="Select" disabled hidden>
        Select
      </option>
      {currencyList.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
};

export default Select;
