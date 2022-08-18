import {
  AddBox,
  ArrowBack,
  ArrowForwardIos,
  MoreHoriz,
} from "@mui/icons-material";
import React from "react";
import "./UserAccount.css";
const UserAccount = () => {
  return (
    <div className="useraccount_Container">
      
      <div className="useraccount container">
        <div>
        <h4 className="userheader fontpoppins">
          User Account
          <span>
            <ArrowForwardIos />
          </span>
          <span>Manage User Groups</span>
        </h4>
        </div>
        <div className="useraccount_container_tab">
          <div className="container_top">
            <ul class="nav nav-tabs userheader manageheadcontainer">
              <li class="nav-item">
                <a class="nav-link managehead" href="#">
                  Manage
                  User Account
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link managehead" href="#">
                  Manage User Group
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link v" href="#">
                  Manage
                  <br /> Authorization
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link managehead" href="#">
                  Audit Log
                </a>
              </li>
            </ul>

            <div className="row addnewgroupcontainer">
              <div className="col-md-6"></div>
              <div className="col-md-6 addnewgroup">
                <div className="userheader">
                  <AddBox /> <span>Add new group</span>
                </div>
              </div>
            </div>
            <div className='professorcontainer'>
            <div className="row ">
              <div className="col-md-3">
                <div class="status-card card bg-light mb-3">
                  <div class="card-body">
                    <div className="row">
                      <div class="col-md-8 form-check form-switch">
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Active
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked
                        />
                      </div>
                      <div className="col-md-4">
                        <MoreHoriz />
                      </div>
                      <h4 className="userheader">
                        Professor and faculty group
                      </h4>
                    </div>
                    <div className="member-container">
                      <div className="member_content">
                        <div id="line"></div>
                        <div>
                          <span>TOTAL MEMBERS</span>
                          <div className="usertotalandcreated">
                            {" "}
                            <h6 className="userheader">22</h6>
                            <p className="bluecolor">Created by:Clement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="userheader" id="viewmember">
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="status-card card bg-light mb-3">
                  <div class="card-body">
                    <div className="row">
                      <div class="col-md-8 form-check form-switch">
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Active
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked
                        />
                      </div>
                      <div className="col-md-4">
                        <MoreHoriz />
                      </div>
                      <h4 className="userheader">
                        Professor and faculty group
                      </h4>
                    </div>
                    <div className="member-container">
                      <div className="member_content">
                        <div id="line"></div>
                        <div>
                          <span>TOTAL MEMBERS</span>
                          <div className="usertotalandcreated">
                            {" "}
                            <h6 className="userheader">22</h6>
                            <p className="bluecolor">Created by:Clement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="userheader" id="viewmember">
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="status-card card bg-light mb-3">
                  <div class="card-body">
                    <div className="row">
                      <div class="col-md-8 form-check form-switch">
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Active
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked
                        />
                      </div>
                      <div className="col-md-4">
                        <MoreHoriz />
                      </div>
                      <h4 className="userheader">
                        Professor and faculty group
                      </h4>
                    </div>
                    <div className="member-container">
                      <div className="member_content">
                        <div id="line"></div>
                        <div>
                          <span>TOTAL MEMBERS</span>
                          <div className="usertotalandcreated">
                            {" "}
                            <h6 className="userheader">22</h6>
                            <p className="bluecolor">Created by:Clement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="userheader" id="viewmember">
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="status-card card bg-light mb-3">
                  <div class="card-body">
                    <div className="row">
                      <div class="col-md-8 form-check form-switch">
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Active
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked
                        />
                      </div>
                      <div className="col-md-4">
                        <MoreHoriz />
                      </div>
                      <h4 className="userheader">
                        Professor and faculty group
                      </h4>
                    </div>
                    <div className="member-container">
                      <div className="member_content">
                        <div id="line"></div>
                        <div>
                          <span>TOTAL MEMBERS</span>
                          <div className="usertotalandcreated">
                            {" "}
                            <h6 className="userheader">22</h6>
                            <p className="bluecolor">Created by:Clement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="userheader" id="viewmember">
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div class="status-card card bg-light mb-3">
                  <div class="card-body">
                    <div className="row">
                      <div class="col-md-8 form-check form-switch">
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Active
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked
                        />
                      </div>
                      <div className="col-md-4">
                        <MoreHoriz />
                      </div>
                      <h4 className="userheader">
                        Professor and faculty group
                      </h4>
                    </div>
                    <div className="member-container">
                      <div className="member_content">
                        <div id="line"></div>
                        <div>
                          <span>TOTAL MEMBERS</span>
                          <div className="usertotalandcreated">
                            {" "}
                            <h6 className="userheader">22</h6>
                            <p className="bluecolor">Created by:Clement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="userheader" id="viewmember">
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="status-card card bg-light mb-3">
                  <div class="card-body">
                    <div className="row">
                      <div class="col-md-8 form-check form-switch">
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Active
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked
                        />
                      </div>
                      <div className="col-md-4">
                        <MoreHoriz />
                      </div>
                      <h4 className="userheader">
                        Professor and faculty group
                      </h4>
                    </div>
                    <div className="member-container">
                      <div className="member_content">
                        <div id="line"></div>
                        <div>
                          <span>TOTAL MEMBERS</span>
                          <div className="usertotalandcreated">
                            {" "}
                            <h6 className="userheader">22</h6>
                            <p className="bluecolor">Created by:Clement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="userheader" id="viewmember">
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="status-card card bg-light mb-3">
                  <div class="card-body">
                    <div className="row">
                      <div class="col-md-8 form-check form-switch">
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Active
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked
                        />
                      </div>
                      <div className="col-md-4">
                        <MoreHoriz />
                      </div>
                      <h4 className="userheader">
                        Professor and faculty group
                      </h4>
                    </div>
                    <div className="member-container">
                      <div className="member_content">
                        <div id="line"></div>
                        <div>
                          <span>TOTAL MEMBERS</span>
                          <div className="usertotalandcreated">
                            {" "}
                            <h6 className="userheader">22</h6>
                            <p className="bluecolor">Created by:Clement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="userheader" id="viewmember">
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="status-card card bg-light mb-3">
                  <div class="card-body">
                    <div className="row">
                      <div class="col-md-8 form-check form-switch">
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          Active
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked
                        />
                      </div>
                      <div className="col-md-4">
                        <MoreHoriz />
                      </div>
                      <h4 className="userheader">
                        Professor and faculty group
                      </h4>
                    </div>
                    <div className="member-container">
                      <div className="member_content">
                        <div id="line"></div>
                        <div>
                          <span>TOTAL MEMBERS</span>
                          <div className="usertotalandcreated">
                            {" "}
                            <h6 className="userheader">22</h6>
                            <p className="bluecolor">Created by:Clement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="userheader" id="viewmember">
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
