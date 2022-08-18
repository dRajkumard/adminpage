import { ArrowBack, ArrowForwardIos, MoreHoriz } from "@mui/icons-material";
import React from "react";
import "./UserAccount.css";
const UserAccount = () => {
  return (
    <div className="useraccount_Container">
      <div className="useraccount container">
        <h2 className="userheader">
          User Account{" "}
          <span>
            <ArrowForwardIos />
          </span>
          <span>Manage User Groups</span>
        </h2>
        <div className="Useraccount_container">
          <div className="container_top">
            <div className="row">
              <div className="col">Manage User Account</div>
              <div className="col">Manage User Group</div>
              <div className="col">Manage Authorization</div>
              <div className="col">Audit Log</div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div class="card bg-light mb-3">
                  <div class="card-body">
                    <div>
                      <h5 class="card-title">Super Admin</h5>
                      <MoreHoriz />
                    </div>
                    <div className="member-container">
                      <div id="line"></div>
                      <div>
                        <h6>TOTAL MEMBERS</h6>
                        <h2>22</h2>
                        <p>created by:Clement</p>
                      </div>
                    </div>
                    <h6>
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
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
                      <h4 className="userheader">Professor and faculty group</h4>
                    </div>
                    <div className="member-container">
                     <div className="member_content">
                      <div id="line"></div>
                      <div>
                        <p>TOTAL MEMBERS</p>
                        <h2 className="userheader">22</h2>
                        </div>
                        </div>
                        <div>
                        <p className="bluecolor">Created by:Clement</p>
                        </div>
                    </div>
                    <h6 className="userheader">
                      View member <ArrowForwardIos />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
