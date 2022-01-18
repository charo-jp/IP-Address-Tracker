import React, { useState } from "react";

import arrow from "../../images/icon-arrow.svg";
import "./Input.css";

const Input = props => {
  const [ip , setIP] = useState("");

  const handleChange = event => {
    setIP(event.target.value);
    
  }

  return (
    <div className="form">
      <div className="form-container">
        <input
          className={`input-IP-address ${props.placeholder.cname}`}
          type="text"
          placeholder={props.placeholder.text}
          onChange = {handleChange}
          value = {ip}
        />
        <button  
        className="send-IP-address" 
        type="submit"
        onClick = {() => {
          props.setIPAddress(ip);
          setIP("");}}
        >
          <img className="arrow-img" src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Input;
