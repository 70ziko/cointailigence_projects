import React from "react";

const Button = ({ onClick, text, style }) => {
    const buttonStyle = {
        height: "50px",
        border: "none",
        borderRadius: "60px",
        backgroundColor: "rgb(37, 52, 114)",
        color: "white",
        fontWeight: "bold",
        overflow: "hidden",
        ...style
    }

    return <button style={buttonStyle} onClick={onClick}>{text}</button>
}

export default Button;