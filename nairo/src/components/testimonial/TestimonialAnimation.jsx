import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `Amanda is an amazing UX designer. I relied on her expertise as an experience expert to develop multiple features while we were team mates. She has a knack for asking the insightful question that drives ecommerce feature development. Her skill at user research and her innate understanding of how our athletes think were integral to our ability to meet the needs of our athlete. More importantly, she was able to synthesize that information into actionable steps that drove iteration and allowed the team to move fast to completion.`,
      reviewerName: "David Schaffner",
      designation: "Senior Product Manager - Search and Browse at DICK'S Sporting Goods",
      delayAnimation: "",
    },
    {/*{
      imageName: "team-2",
      desc: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
      reviewerName: "Jara Afsari",
      designation: "CEO at ib-themes",
      delayAnimation: "200",
    },
    {
      imageName: "team-4",
      desc: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
      reviewerName: "Janiaya kiaram",
      designation: "Visual Designer",
      delayAnimation: "400",
    },*/}
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt=""
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
