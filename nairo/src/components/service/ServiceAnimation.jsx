import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Mockups & Prototypes",
    descriptions: `Create wireframes, mockups and prototypes in figma, sketch, invision, and the adobe suit`,
    delayAnimation: "100",
  },
  {
    icon: "icon-magnifying-glass",
    title: "Research & Discovery",
    descriptions: `Through a varity of tools like usertesting, interview, unmoderated tests, surveys, journeys and persona work I define, develop and delivery insights and opportunties.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-profile-female",
    title: "Human Interaction",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
