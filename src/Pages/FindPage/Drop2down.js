import React, { useState } from "react";
import styles from './Drop2down.module.css';
import Button  from "../../Components/Button/Button";
function Drop2down() {
  const [selects, setSelects] = useState();
  return (
    <div className={styles.container}>
      <select name="Location" className={styles.dd}>
      <option value="none" selected disabled hidden>
          Location
      </option>
        <option>India</option>
        <option>USA</option>
        <option>NewZealand</option>
      </select>

      <select className={styles.dd1}>
      <option value="none" selected disabled hidden>
          Price
      </option>
        <option>Rs.6K</option>
        <option>Rs.10K</option>
        <option>Rs.20K</option>
      </select>

      <select className={styles.dd2}>
      <option value="none" selected disabled hidden>
         Type
      </option>
        <option>Single Bed</option>
        <option>Double Bed</option>
        <option>Single Bed with AC</option>
        <option>Double Bed with AC</option>
      </select>

      <button className={styles.sbtn}>Search</button>
    </div>
  )
}

export default Drop2down;