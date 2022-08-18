import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Person, Visibility, VpnKey } from "@mui/icons-material";
import "../../css/Login/index.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/features/user";
import Dashboard from "../Dashboard";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.name);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "useremail",
    password: "password",
  });
  const useremail = (event) => {
    event.preventDefault();
    let updatedEmail = {};
    updatedEmail = { email: event.target.value };
    setInput((input) => ({
      ...input,
      ...updatedEmail,
    }));
  };
  const userpassword = (event) => {
    event.preventDefault();
    let updatedPassword = {};
    updatedPassword = { password: event.target.value };
    setInput((input) => ({
      ...input,
      ...updatedPassword,
    }));
  };

  const handleSubmitPress = (e) => {
    e.preventDefault();

    let email = input.email;
    let password = input.password;
    const payload = {
      email,
      password,
    };
    console.log("email", email);
    console.log("password", password);

    fetch("http://c2d.comorins.com/api/admin/login", {
      method: "POST",
      headers: {
        //Header Defination
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        // setLoading(false);
        console.log("hello", responseJson.status);
        console.log("hello", responseJson);
        console.log("token", responseJson.token);
       

        // If server response message same as Data Matched
        if (responseJson.status == "success") {
          sessionStorage.setItem("token", responseJson.token);
         navigate ('/home', { replace: true })
        // navigate("../success", { replace: true });
          dispatch(
            login({
              token: sessionStorage.getItem("token"),
            })
          );

          // sessionStorage.getItem('token').then((res) => console.log("rajtoken",res))
        } else {
        }
      })
      .catch((error) => {});
  };
  // useEffect(()=>{
  //   // handleSubmitPress();
  //   console.log('refresh')
  // },[handleSubmitPress])
  return (
    <div className="Loginfield">
      {/* <h2>naeme:{user}</h2> */}
      <h2 className="text-center loginLog card">Login </h2>
      <div className="logincontainer row">
        <div className="logocontainer col-md-5 ">
          {/* <img src={Loginlogo} alt='loginimage'/> */}
          <h1>Login</h1>
        </div>
        <div className="inputcontainer col-md-6 card">
          <form action="" className="form" onSubmit={handleSubmitPress}>
            <div className="loginicon">
              <Person className="loginLogo" />
              <input
                type="text"
                placeholder="UserId"
                required
                className="form-control"
                onChange={useremail}
              />
            </div>
            <br />
            <br />
            <div className="loginicon">
              <VpnKey className="loginLogo" />
              <input
                type="password"
                placeholder="Password"
                required
                className="form-control"
                onChange={userpassword}
              />
            </div>
            <br />
            <br />
            <div className="buttoncontainer">
              <input
                type="submit"
                className="loginbutton"
                required
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
