import React from "react";

const Checkbox = ({ onInput, name, checked, children }) => {

    const checkboxStyle = {
        marginBottom: "1rem",
    }

    return <div style={checkboxStyle}>
        <input type="checkbox" name={name} onInput={onInput} checked={checked}></input>
        <label style={{ marginLeft: "5px" }}>{children}</label>
    </div> 
}

export default Checkbox;