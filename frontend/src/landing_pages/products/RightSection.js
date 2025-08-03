import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-6 p-5 mt-5  order-2 order-lg-1">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2">
          <img src={imageURL}  alt="product"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;