import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Mockups & Prototypes",
    descriptions: `I create wireframes, mockups and prototypes in figma, sketch, invision, and the adobe suit.`,
    delayAnimation: "100",
  },
  {
    icon: "icon-magnifying-glass",
    title: "Research & Discovery",
    descriptions: `Through a varity of tools like usertesting, user interviews, unmoderated tests, surveys, journeys and persona work, I define, develop and deliver insights and opportunties.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-profile-female",
    title: "Human Interaction",
    descriptions: `It is the ancient and sacred duty of the ux designer to be the voice of the user. It doesn't matter how clever or impressive a technology is if its intended user can't interperate it.`,
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
