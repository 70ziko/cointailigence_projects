import React from 'react';

const Flexbox = ({children, ...props}) => {
    return (
        <div style={{display: "flex"}} {...props}>
            {children}
        </div>
    );
}

export default Flexbox;
