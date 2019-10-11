import React from "react";
import { Menu } from "semantic-ui-react";

const Footer = () => {

    return (
        <Menu
            secondary
            fixed="bottom"
            style={{ overflow: "hidden", background: "#000", color: "#fff" }}
        >
            Copyright
      </Menu>
    );
}

export default Footer;