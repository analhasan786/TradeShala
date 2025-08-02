import React from "react";




const TopBar = () => {
  return (
    <div className="topbar-container border-bottom border-shadow-1">
      {/* <Menu /> */}
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      
    </div>
  );
};

export default TopBar;