import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login/";
import { selectUser } from "./redux/features/user";

const App = () => {

  let user = useSelector((state)=>console.log(state.value.token));
  console.log("hello",user)
  var token = sessionStorage.getItem("token");
  useEffect( () => console.log('Refresh'));
  return (
    <BrowserRouter>
      <Routes>
      
      <Route exact path="/" element={!token ? <Login/> : <Dashboard />} />
      <Route path="/home" element={<Dashboard/>}/>
      {/* <Route path="/home" element={token ?<Dashboard />  : <Login/>} /> */}
        {/* <Route exact path="/" element={token ? <Navigate to='/home' /> : <Navigate to='/' />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
