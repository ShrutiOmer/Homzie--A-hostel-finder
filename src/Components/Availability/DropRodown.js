import React, { useState } from "react";
import styles from './DropRodown.module.css';
import Button  from "../Button/Button";
function DropRodown() {
  const [selects, setSelects] = useState();
  return (
    <div className={styles.container}>
        <h5>Rooms</h5>
      <select className={styles.dd1}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
      <h5>Person</h5>
      <select className={styles.dd2}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      </select>

      
      
    </div>
  )
}

export default DropRodown;