import React from "react";
import "./Sidebar.css";
import { KeyboardArrowDownSharp } from "@mui/icons-material";
const Sidebar = () => {
  return (
    <div className="SidebarContainer">
      <div className="sidebar">
        <h4 className="sidebarheader">Dashboard</h4>
        <ul>z
          <li>
            Analytics
            <KeyboardArrowDownSharp className='sidebararrowicon' />
            <ul>
              <li>Course Overview</li>
              <li>Traffic Overview</li>
              <li>Sales Overview</li>
              <li>People Overview</li>
              <li>Job Overview</li>
              <li>Site Session</li>
            </ul>
          </li>
          <li>
            Curriculum <KeyboardArrowDownSharp className='sidebararrowicon' />
            <ul>
              <li>Curriculum Management</li>
              <li>Course Planner</li>
            </ul>
          </li>
          <li>
            Satisfacation Rate<KeyboardArrowDownSharp className='sidebararrowicon' />
            <ul>
              <li>Global Satisfaction</li>
              <li>Course Satisfaction</li>
              <li>Partner Satisfaction</li>
              <li>Statistics</li>
            </ul>
          </li>
          <li>
            Job Updates<KeyboardArrowDownSharp className='sidebararrowicon' />
            <ul>
              <li>Add newjob</li>
              <li>Published</li>
              <li>premission</li>
              <li>Draft</li>
              <li>Catagories</li>
              <li>Settings</li>
            </ul>
          </li>
          <li>FAQs</li>
          <li>
            Partner<KeyboardArrowDownSharp className='sidebararrowicon' />
            <ul>
              <li>Manage partners</li>
              <li>User Accounts </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
