import React from 'react';

const Checkbox = ({checked, ...props}) => {
    return (
        <input type="checkbox" checked={checked} {...props} />
    );
}

export default Checkbox;
