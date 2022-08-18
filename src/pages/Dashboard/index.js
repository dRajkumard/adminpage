import React from 'react'
import Side from '../../components/Sidebar/Side'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import UserAccount from '../../components/UserAccount/UserAccount'
import './index.css'
const Dashboard = () => {
const Logout = ()=>{
  sessionStorage.removeItem('token')
}

  return (
    <div>
      <Topbar/>
      <div id='dashboard_spliting'>
      {/* <Sidebar/> */}
      <Side/>
      <UserAccount/>
      </div>
      <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default Dashboard