import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-6 order-1">
          <img src={imageURL} alt="product" />
        </div>
        <div className="col-12 col-lg-6 p-5 mt-5 order-2">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"  alt="product"/>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg" alt="product"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;