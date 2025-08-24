import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Summary = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "https://tradeshala-dashboard.onrender.com/login";
        return;
      }
      try {
        const { data } = await axios.post(
          "https://tradeshala-backend.onrender.com",
          {},
          { withCredentials: true }
        );

        // console.log("Verification Response: ", data);

        const { status, user } = data;

        if (status && user?.username) {
          setUsername(user.username);
          toast(`Hello ${user.username}`, { position: "top-right", toastId: "welcome-toast" });
        } else {
          removeCookie("token");
          window.location.href = "https://tradeshala-dashboard.onrender.com";
        }
      } catch (error) {
        removeCookie("token");
        window.location.href = "https://tradeshala-dashboard.onrender.com";
      }
    };

    verifyCookie();
  }, [cookies, removeCookie]);

  // const Logout = () => {
  //   removeCookie("token");
  //   window.location.href = "http://localhost:3000";
  // };
  //         <button onClick={Logout}>LOGOUT</button>


  return (
    <>
      <div className="home_page">
        <div className="username">
          <h6>Hi, {username || "User"}!</h6>
          <hr className="divider" />
        </div>

        <div className="section">
          <span><p>Equity</p></span>
          <div className="data">
            <div className="first">
              <h3>3.74k</h3>
              <p>Margin available</p>
            </div>
            <hr />
            <div className="second">
              <p>Margins used <span>0</span></p>
              <p>Opening balance <span>3.74k</span></p>
            </div>
          </div>
          <hr className="divider" />
        </div>

        <div className="section">
          <span><p>Holdings (13)</p></span>
          <div className="data">
            <div className="first">
              <h3 className="profit">1.55k <small>+5.20%</small></h3>
              <p>P&amp;L</p>
            </div>
            <hr />
            <div className="second">
              <p>Current Value <span>31.43k</span></p>
              <p>Investment <span>29.88k</span></p>
            </div>
          </div>
          <hr className="divider" />
        </div>

        {/* <button onClick={Logout}>LOGOUT</button> */}
      </div>
      <ToastContainer />
    </>
  );
};

export default Summary;