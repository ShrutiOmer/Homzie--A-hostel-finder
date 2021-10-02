import React, { useState } from "react";
import styles from './Dropdown.module.css';
import Button  from "../Button/Button";
function Dropdown() {
  const [selects, setSelects] = useState();
  return (
    <div className={styles.container}>
      <select name="Location" className={styles.dd}>
        <option>India</option>
        <option>USA</option>
        <option>NewZealand</option>
      </select>

      <select className={styles.dd}>
        <option>Rs.6K</option>
        <option>Rs.10K</option>
        <option>Rs.20K</option>
      </select>

      <select className={styles.dd}>
        <option>Single Bed</option>
        <option>Double Bed</option>
        <option>Single Bed with AC</option>
        <option>Double Bed with AC</option>
      </select>

      {/* <button className={styles.sbtn}>Search</button> */}
      <Button name ="Search" className={styles.sbtn} link="../Recommended"></Button>
    </div>
  )
}

export default Dropdown;