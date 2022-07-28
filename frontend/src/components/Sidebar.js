import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {FiHome,FiFolder,FiUsers, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { MdAccountBalance } from "react-icons/md";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header" >
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader style={{height:"55px"}}>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? (<MdAccountBalance style={{fontSize:"28px",marginLeft:"7px"}}/>) : (<div style={{display:"flex"}}><MdAccountBalance style={{marginTop:"5px",marginBottom:"5px",marginLeft:"1px",fontSize:"23px"}}/><p style={{fontStyle:"normal"}}>Mon Bureau</p></div>) }</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? ( <FiArrowRightCircle/> ) : ( <FiArrowLeftCircle/>)}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />}> <a href={`/Accueil`}>Accueil</a></MenuItem>
              <MenuItem icon={<FiUsers />}><a href={`/clientlist`}>Clients</a></MenuItem>
              <MenuItem icon={<FiFolder />}><a href={`/dossierlist`}>Dossiers</a></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;