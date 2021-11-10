/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import Typical from "react-typical";
import Headerbar from '../../../components/Headerbar';


const Dashboard = () => {

  return (
    <div className="wrapper">
      <div className="rightside-panel">
        <Headerbar headerName="My-Profile" />
        <div className="profileInfo">
          <div className=" soon">
            <div className="page-text">
              <Typical
                steps={['Something Awesome is', 2000, 'COMING SOON', 3000, 'Stay Tuned!', 500]}
                loop={Infinity}
                wrapper="span" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;