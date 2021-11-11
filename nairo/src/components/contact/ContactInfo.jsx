import React from "react";
import { HiGlobe, HiPhone, HiMail } from "react-icons/hi";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>What’s your story? Get in touch</h4>
        <p>
          Contact me with questions or if you would like to chat about an opportunity.
        </p>

        <ul>
          {/*<li className="media">
            <HiGlobe />
            <span className="media-body">
              Remote
            </span>
          </li>*/}
          {/* End li */}

          <li className="media">
            <HiMail />
            <span className="media-body">artmyshkin@gmail.com</span>
          </li>
          {/* End li */}

          {/*<li className="media">
            <HiPhone />
            <span className="media-body">+044 9696 9696 3636</span>
          </li>*/}
          {/* En}d li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
