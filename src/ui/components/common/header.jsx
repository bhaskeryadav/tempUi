import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Icon } from 'semantic-ui-react'
import useGlobalStore from 'hooks/reusable/global.store/global.hook';
import { SHOW_SEARCH_MODAL } from "hooks/reusable/global.store/global.hook.constants";

 const Header = () => {

    const { executeActions} = useGlobalStore();

    const [currentPage, setCurrentPage] = useState("home");

    const handleItemClick = (e, { name }) => setCurrentPage(() => name);

    // delete private.router.jsx
    //console.log('${match.path}',`${match.path}`)
    return (
     <React.Fragment>
    
     <Menu
     secondary
     fixed="top"
     style={{ overflow: "hidden", background: "#fff", color: "#fff" }}
   >
     <Menu.Item
       name="home"
       active={currentPage === "home"}
       onClick={handleItemClick}
     />
     <Menu.Item
       name="messages"
       active={currentPage === "messages"}
       onClick={handleItemClick}
     />
     <Menu.Item
       name="friends"
       active={currentPage === "friends"}
       onClick={handleItemClick}
     />
     <Menu.Menu position="right">
     <Menu.Item>
     <Icon style={{ color: "white" }} name='search'  size='large' link 
                    onClick={()=> {executeActions(SHOW_SEARCH_MODAL)}}/>
                    </Menu.Item>
       <Menu.Item
         name="logout"
         active={currentPage === "logout"}
         onClick={handleItemClick}
       />
     </Menu.Menu>
   </Menu>

     </React.Fragment>
    );
  }

  export default Header;
