import React from "react";

const Anchor = ({ href, children, onClick, role }) => {
    const anchorStyle = {
        textDecoration: "none",
        color: "rgb(110, 199, 183)",
        fontWeight: "bold",
    }

    const anchorProps = {
        href: href,
        onClick: onClick,
        style: anchorStyle,
        role: role,
    }

    return (
        <a {...anchorProps}>
            {children}
        </a>
    );
}

export default Anchor;