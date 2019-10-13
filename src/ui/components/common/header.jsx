import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Icon } from 'semantic-ui-react'
import useGlobalStore from 'hooks/reusable/global.store/global.hook';
import { SHOW_SEARCH_MODAL } from "hooks/reusable/global.store/global.hook.constants";

const paddingStyle = {
  paddingTop:'13px', paddingLeft: '10px'
}
 const Header = () => {

    const { executeActions} = useGlobalStore();

    const [currentPage, setCurrentPage] = useState("Messages");

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
   <div style={paddingStyle}>
     <img src="/images/new-online.gif" style={{width:'25px',height:'18px'}}/>
   </div>
      <div style={paddingStyle}>
        <img src="/images/global-logo.png" style={{width:'90px',height:'15px'}}/>
      </div>
     <Menu.Item
       name="Messages"
       active={currentPage === "Messages"}
       onClick={handleItemClick}
     />
     <Menu.Item
       name="Feeds"
       active={currentPage === "Feeds"}
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
