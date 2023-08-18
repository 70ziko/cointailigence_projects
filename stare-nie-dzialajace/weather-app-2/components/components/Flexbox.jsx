import React from 'react';

const Flexbox = ({ children, style }) => {

    const flexboxStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...style
    }

    return (
        <div style={flexboxStyle}>
            {children}
        </div>
    );
}

export default Flexbox;