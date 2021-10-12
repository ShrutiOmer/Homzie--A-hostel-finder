import React, { useState } from "react";
import styles from './Drop3Adown.module.css';
import Button  from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./datePicker.css";
function Drop3Adown() {
  const [startDate, setStartDate] = useState(new Date());
  const[endDate,setEndDate]=useState(new Date());
  return (
    <div className={styles.container}>
        <div className={styles.sdate}>
             <h4>Check-in date</h4>
            
        <DatePicker className="da" dateFormat="dd-MM-yyyy" selected={startDate}  onChange={(date) => setStartDate(date)}  />
        </div>

        <div className={styles.edate}>
            <h4>Check-out date</h4>
        <DatePicker dateFormat="dd-MM-yyyy" selected={endDate} onChange={(date) => setEndDate(date)} />
        </div>
        
         

     <Button name ="Check Availability" className={styles.sbtn} link="/findpage" ></Button>  
    </div>
  )
}

export default Drop3Adown;