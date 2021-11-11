import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <div className="contact-info">
            <h4>Where am I?</h4>
            <p>
              My current galactic position.
            </p>
          </div>
          <div>.</div>
          <img class="qrcode" src="img/qrcode_earth.png"></img>
          {/*<iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/d/embed?mid=1cdyCTT-pIjzK2Vu8AK45bAp9h1MQeIB9"
          ></iframe>*/}
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
