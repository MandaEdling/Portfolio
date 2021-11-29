import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Design", "Research", "Fun"];
const AllPortfolioContent = [
  {
    img: "dsg-mobile-home",
    title: "Progressive App DSG",
    subTitle: "Screenshot",
    alterText: "DSG Screenshot",
    delayAnimation: "",
    portfolioLink:
      "https://dickssportinggoods.com",
  },
  {
    img: "desktop-taxo",
    title: "DSG Desktop Global Navigation",
    subTitle: "DSG Nav",
    alterText: "Screenshot",
    delayAnimation: "100",
    portfolioLink:
      "https://dickssportinggoods.com",
  },
  {
    img: "dsg-menu",
    title: "DSG Mobile Global Navigation",
    subTitle: "DSG Nav",
    alterText: "Screenshot",
    delayAnimation: "200",
    portfolioLink:
      "https://dickssportinggoods.com",
  },
  {
    img: "ge-app",
    title: "General Electric Screenshot",
    subTitle: "Micro-grid Calculator",
    alterText: "Screenshot",
    delayAnimation: "0",
    portfolioLink:
      "https://ge.homerenergy.com",
  },
  {
    img: "ge-mobile-fuel",
    title: "GE Mobile Screenshot",
    subTitle: "Micro-grid Calculator Fuels",
    alterText: "Screenshot",
    delayAnimation: "100",
    portfolioLink:
      "https://ge.homerenergy.com",
  },
  {
    img: "goinggoing-mobile",
    title: "Progressive App Going Going Gone!",
    subTitle: "Clearance Brand Site",
    alterText: "Screenshot",
    delayAnimation: "200",
    portfolioLink:
      "https://www.goinggoing.com",
  },
  {
    img: "homepage-desktop-public lands",
    title: "New Brand Launch",
    subTitle: "Public Lands Website",
    alterText: "Screenshot",
    delayAnimation: "0",
    portfolioLink:
      "https://www.publiclands.com",
  },
  {
    img: "public-lands-mobile",
    title: "New Brand Launch Mobile",
    subTitle: "Public Lands Progressive App",
    alterText: "Screenshot",
    delayAnimation: "100",
    portfolioLink:
      "https://www.publiclands.com",
  },
  {
    img: "refresh",
    title: "Homer Energy",
    subTitle: "Payment Packages",
    alterText: "Site Refresh",
    delayAnimation: "200",
    portfolioLink: "https://www.homerenergy.com/products/pro/pricing/index.html",
  },
  {
    img: "graphs",
    title: "JS Prototyping",
    subTitle: "Prototype",
    alterText: "JS Frontend Prototyping",
    delayAnimation: "300",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "prototype",
    title: "Design",
    subTitle: "Microgrid Design Software",
    alterText: "Homer Energy SAAS",
    delayAnimation: "400",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "data1",
    title: "Emrys Inc Screenshot",
    subTitle: "Data Science Toolbox",
    alterText: "Screenshot Emrys Website",
    delayAnimation: "400",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "process",
    title: "Testing Process",
    subTitle: "AB Testing",
    alterText: "AB Testing Process",
    delayAnimation: "400",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "journey",
    title: "eComm Journey Mapping",
    subTitle: "Journey Map",
    alterText: "Feature Journey Map",
    delayAnimation: "500",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "interview-synthesis",
    title: "Customer Interview Synthesis",
    subTitle: "CX Interviews",
    alterText: "Insight Gathering",
    delayAnimation: "500",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "journey2",
    title: "Experience Journey Map",
    subTitle: "Macro view of site experience",
    alterText: "Journey Mapping Exercise",
    delayAnimation: "500",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "brainstorm-scope",
    title: "Miro Brainstorming",
    subTitle: "Group Brainstorming Activity",
    alterText: "Remote Project Scope Exercise",
    delayAnimation: "500",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "pointhouse2",
    title: "Lighting Design",
    subTitle: "Lighting Design Niteo Lighting",
    alterText: "Niteo Concept Work",
    delayAnimation: "600",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "staude1",
    title: "Lighting Design",
    subTitle: "Lighting Design Niteo Lighting",
    alterText: "Niteo Concept Work",
    delayAnimation: "600",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "sketch-samples",
    title: "Character Art",
    subTitle: "Sketches & Character Art",
    alterText: "Character Concept Art",
    delayAnimation: "700",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "test",
    title: "3D Animation",
    subTitle: "3D Wireframing & Animation",
    alterText: "Blender Animation",
    delayAnimation: "700",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
];

const BrandingPortfolioContent = [ //Design
  {
    img: "dsg-mobile-home",
    title: "Progressive App DSG",
    subTitle: "Screenshot",
    alterText: "DSG Screenshot",
    delayAnimation: "0",
    portfolioLink:
      "https://dickssportinggoods.com",
  },
  {
    img: "desktop-taxo",
    title: "DSG Desktop Global Navigation",
    subTitle: "DSG Nav",
    alterText: "Screenshot",
    delayAnimation: "100",
    portfolioLink:
      "https://dickssportinggoods.com",
  },
  {
    img: "dsg-menu",
    title: "DSG Mobile Global Navigation",
    subTitle: "DSG Nav",
    alterText: "Screenshot",
    delayAnimation: "200",
    portfolioLink:
      "https://dickssportinggoods.com",
  },
  {
    img: "ge-app",
    title: "General Electric Screenshot",
    subTitle: "Micro-grid Calculator",
    alterText: "Screenshot",
    delayAnimation: "0",
    portfolioLink:
      "https://ge.homerenergy.com",
  },
  {
    img: "ge-mobile-fuel",
    title: "GE Mobile Screenshot",
    subTitle: "Micro-grid Calculator Fuels",
    alterText: "Screenshot",
    delayAnimation: "100",
    portfolioLink:
      "https://ge.homerenergy.com",
  },
  {
    img: "goinggoing-mobile",
    title: "Progressive App Going Going Gone!",
    subTitle: "Clearance Brand Site",
    alterText: "Screenshot",
    delayAnimation: "200",
    portfolioLink:
      "https://www.goinggoing.com",
  },
  {
    img: "homepage-desktop-public lands",
    title: "New Brand Launch",
    subTitle: "Public Lands Website",
    alterText: "Screenshot",
    delayAnimation: "0",
    portfolioLink:
      "https://www.publiclands.com",
  },
  {
    img: "public-lands-mobile",
    title: "New Brand Launch Mobile",
    subTitle: "Public Lands Progressive App",
    alterText: "Screenshot",
    delayAnimation: "100",
    portfolioLink:
      "https://www.publiclands.com",
  },
  {
    img: "refresh",
    title: "Homer Energy",
    subTitle: "Payment Packages",
    alterText: "Site Refresh",
    delayAnimation: "200",
    portfolioLink: "https://www.homerenergy.com/products/pro/pricing/index.html",
  },
  {
    img: "prototype",
    title: "Design",
    subTitle: "Microgrid Design Software",
    alterText: "Homer Energy SAAS",
    delayAnimation: "200",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "data1",
    title: "Emrys Inc Screenshot",
    subTitle: "Data Science Toolbox",
    alterText: "Screenshot Emrys Website",
    delayAnimation: "200",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
];
const PhotographyPortfolioContent = [ //Research
  {
    img: "journey",
    title: "eComm Journey Mapping",
    subTitle: "Journey Map",
    alterText: "Feature Journey Map",
    delayAnimation: "0",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "interview-synthesis",
    title: "Customer Interview Synthesis",
    subTitle: "CX Interviews",
    alterText: "Insight Gathering",
    delayAnimation: "100",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "journey2",
    title: "Experience Journey Map",
    subTitle: "Macro view of site experience",
    alterText: "Journey Mapping Exercise",
    delayAnimation: "200",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "brainstorm-scope",
    title: "Miro Brainstorming",
    subTitle: "Group Brainstorming Activity",
    alterText: "Remote Project Scope Exercise",
    delayAnimation: "0",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "graphs",
    title: "JS Prototyping",
    subTitle: "Prototype",
    alterText: "JS Frontend Prototyping",
    delayAnimation: "100",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
];

const FashionPortfolioContent = [ //Fun
  {
    img: "pointhouse2",
    title: "Lighting Design",
    subTitle: "Lighting Design Niteo Lighting",
    alterText: "Niteo Concept Work",
    delayAnimation: "0",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "staude1",
    title: "Lighting Design",
    subTitle: "Lighting Design Niteo Lighting",
    alterText: "Niteo Concept Work",
    delayAnimation: "100",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "sketch-samples",
    title: "Character Art",
    subTitle: "Sketches & Character Art",
    alterText: "Character Concept Art",
    delayAnimation: "200",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
  {
    img: "test",
    title: "3D Animation",
    subTitle: "3D Wireframing & Animation",
    alterText: "Blender Animation",
    delayAnimation: "100",
    portfolioLink: "https://www.behance.net/gallery/132229987/UX-Design-and-Research",
  },
];

const ProductPortfolioContent = [
  {
    img: "m-portfolio-2",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
    delayAnimation: "0",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: "m-portfolio-3",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    delayAnimation: "100",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },

  {
    img: "m-portfolio-5",
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    delayAnimation: "200",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    delayAnimation: "300",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
];

const PortfolioAnimation = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <SRLWrapper>
            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {BrandingPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
                {/* grid item  */}
              </div>

              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {PhotographyPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {FashionPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {ProductPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default PortfolioAnimation;
