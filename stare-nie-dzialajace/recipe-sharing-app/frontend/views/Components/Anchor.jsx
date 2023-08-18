import React from 'react';

const Anchor = ({children, href, ...props}) => {
    return (
        <a href={href} {...props}>
            {children}
        </a>
    );
}

export default Anchor;
