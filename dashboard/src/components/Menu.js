import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";




import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const [cookies, removeCookie] = useCookies([]);



  const Logout = () => {
    removeCookie("token");
    window.location.href = `${process.env.frontend}`;
  };


  return (
    <div className='container-fluid  border-bottom mb-5 box-shadow-5'>
      <div className='bg'>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img style={{ width: '25px', height: '20px' }} src='logo.png' alt='Main Logo' />
            </Link>
            <button className="navbar-toggler border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon border-none"></span>
            </button>
            <div className="collapse ms-auto navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/"
                    onClick={() => handleMenuClick(0)}
                  >
                    <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                      Dashboard
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/orders"
                    onClick={() => handleMenuClick(1)}
                  >
                    <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                      Orders
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/holdings"
                    onClick={() => handleMenuClick(2)}
                  >
                    <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                      Holdings
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/positions"
                    onClick={() => handleMenuClick(3)}
                  >
                    <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                      Positions
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/funds"
                    onClick={() => handleMenuClick(4)}
                  >
                    <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                      Funds
                    </p>
                  </Link>
                </li>

                <li className="nav-item">

                  <div className="profile" onClick={handleProfileClick}>
                      <button className="logout " onClick={Logout}>Logout</button>
                  </div>
                </li>


              </ul>

            </div>
          </div>
        </nav>
      </div>
    </div>



  );
};

export default Menu;