import React from "react";
import styles from './Select.module.scss';

const Select = ({ currencyList, ...props }) => {
  return (
    <select className={styles.wrapper} defaultValue={"Select"} {...props}>
      <option value="Select" disabled hidden>
        Select
      </option>
      {currencyList.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};

export default Select;
