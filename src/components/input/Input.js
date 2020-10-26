import React, { useState } from "react";
import "./Input.css";

const Input = ({ label, placeholder, name, value, callback}) =>{

    //const [value, setValue] = useState("");

    //const handleChange = (event) =>{
      // setValue(event.target.value);
    //}

    return(
        <div className="container-input">
            <label>{label}</label>
            <input 
                type="text" 
                value={value}
                name={name}
                onChange={callback}
                placeholder={placeholder}>
            </input>
        </div>
    )
}

export default Input;