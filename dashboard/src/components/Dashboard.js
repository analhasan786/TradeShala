import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
// import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://tradeshala-backend.onrender.com", 
          {}, 
          { withCredentials: true }  // 👈 send cookies automatically
        );

        if (data.status && data.user?.username) {
          setUsername(data.user.username);
        } else {
          // not authenticated → redirect to login app
          window.location.href = "https://tradeshala.onrender.com/login";
        }
      } catch (err) {
        // error → redirect to login
        window.location.href = "https://tradeshala.onrender.com/login";
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <h4>Welcome {username}</h4>
        <Routes>
          {/* <Route path="/" element={<Summary />} /> */}
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
