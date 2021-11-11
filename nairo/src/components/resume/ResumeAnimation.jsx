import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Sr. UX Designer eCommerce`,
    jobType: `Remote`,    
    jobDuration: `Feb 2020 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Dick's Sporting Goods",
    jobDescription: `Recently built two new brands including leading the kickoff for the UX design effort for the Public Lands brand, Fall 2021. I currently support two product teams Search and Browse and Athlete Engagement, over 20 engineers and I oversee top of the funnel eComm design interns`,
    delayAnimation: "",
  },
  {
    jobPosition: `Sr. UX Designer and Web Engineer`,
    jobDuration: `Oct 2018 - Feb 2020`,
    timeDuraton: `Full Time`,
    compnayName: "Arrow Electronics",
    jobDescription: `By leveraging user research, testing, best practices and site auditing, I worked to reduce design debt and improve customer interactions, WCAG compliance and customer conversion. I also supported the eComm site product team for customer accounts, cart and checkout.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `UX Design and Frontend Consultant`,
    jobType: `Remote`,
    jobDuration: `May 2016 - Oct 2018`,
    timeDuraton: `Full Time`,
    compnayName: "Customers: bitovi.com, homerenergy.com, ceremetrix.io, rfprepared.com, niteolighting.com",
    jobDescription: `I tested, created and iterated designs and also did frontend development in Angular and React.`,
    delayAnimation: "200",
  },
  {
    jobPosition: `Co-Founder and CEO`,
    jobDuration: `May 2016 - Dec 2017`,
    timeDuraton: `Full Time`,
    compnayName: "Emrys Inc",
    jobDescription: `Co-founder of Emrys Inc a data science platform. Company pitch: https://www.youtube.com/watch?v=uhl_NBhT0M8 `,
    delayAnimation: "300",
  },
  {
    jobPosition: `Agency Partner & Design Lead`,
    jobDuration: `Mar 2011 - May 2016`,
    timeDuraton: `Full Time`,
    compnayName: "Archethought LLC",
    jobDescription: `Was made partner at the agency in 2013 and lead the frontend engineering and design team for Archethought untill I took an IP buyout to start Emrys Inc.`,
    delayAnimation: "400",
  },  
];

const educatonContent = [
  {
    passingYear: "2005-2008",
    degreeTitle: "Bachelor of Media Arts & Animation",
    instituteName: "Art Institute of Colorado",
  },
  {
    passingYear: "1998-2003",
    degreeTitle: "Bachelor of Fine Art",
    instituteName: "CU Boulder",
  },
  {
    passingYear: "1998-2003",
    degreeTitle: "Bachelor of English",
    instituteName: "CU Boulder",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
