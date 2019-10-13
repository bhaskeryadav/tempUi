import React from "react";
import { Menu } from "semantic-ui-react";

const Footer = () => {

    return (
        <Menu
            secondary
            fixed="bottom"
            style={{ overflow: "hidden", background: "#000", color: "#fff" }}
        >
           <div style={{paddingTop:'10px', paddingLeft:'90%'}}>
                Copyright @ 2019.
           </div>
      </Menu>
    );
}

export default Footer;