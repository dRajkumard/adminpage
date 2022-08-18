import React from "react";
import {
  Search,
  Download,
  Notifications,
  KeyboardArrowDownSharp,
} from "@mui/icons-material";
import Admin from "../../assets/admin.png";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBar">
        <div className="lefthead">
          <h4>gsm master </h4>
        </div>
        <div className="middlehead">
          <input type="text" placeholder="Search" />
          {/* <div className="searchiconcontainer"> */}
            <Search className="searchicon"/>
            {/* </div> */}
          
        </div>
        <div className="righthead">
            <div className="righthead-items">
          <Download />
          <Notifications />
          <img src={Admin} alt="adminimage" />
          <span>Webmaster</span>
          <KeyboardArrowDownSharp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
