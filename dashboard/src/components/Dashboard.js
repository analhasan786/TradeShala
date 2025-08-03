import React , { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";


const Dashboard = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    // 1. Get token from URL (when redirected from frontend)
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get('token');

    if (urlToken) {
      localStorage.setItem('token', urlToken);
    }

    // 2. Check token in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // No token → redirect to frontend login
      window.location.href = `${process.env.React_frontend}`;
    }
  }, []);



  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">

        
        <Routes>
          <Route exact path="/" element={<Summary />} />
          {/* <Route exact path="/logout" element={<Logout />} /> */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>

      </div>
    </div>
  );
};


export default Dashboard;