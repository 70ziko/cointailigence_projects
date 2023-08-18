import React from 'react';

const Wrapper = ({ children, style }) => {
    
    const wrapperStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        backgroundColor: "rgb(223, 242, 237)",
        ...style
    }

    const contentStyle = {
        maxHeight: "100%",
        width: '100%'
    }

    return (
        <div style={wrapperStyle}>
            <div style={contentStyle}>
                {children}
            </div>
        </div>
    );
}

export default Wrapper;