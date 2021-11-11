import React from "react";

const AwardContnet = [
  {
    img: "boomtown",
    awardName: "Boomtown Accelerator",
    awardFor: "Investment Recipient, 2016",
    delayAnimation: "0",
  },
  {
    img: "wildsound",
    awardName: "WILDsound Film Festival",
    awardFor: "TV Screenplay Finalist, 2009",
    delayAnimation: "200",
  },
  {
    img: "deadborn",
    awardName: "Deadborn",
    awardFor: "Terrible novel I wrote.  You can find it on Amazon.", 
    delayAnimation: "400",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award image" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
