import "./Skill.css";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
const data = [
  {
    imgUrl: "https://www.offidocs.com/imageswebp/logohtmlhtml5.jpg.webp",
    description: "HTML",
  },
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png",
    description: "CSS",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    description: "Javascript",
  },
  {
    imgUrl: "https://ionicframework.com/docs/icons/logo-react-icon.png",
    description: "React JS",
  },
  {
    imgUrl:
      "https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg",
    description: "Tailwind CSS",
  },
  {
    imgUrl:
      "https://i.pinimg.com/originals/17/06/c9/1706c9f16bd08eb5e03f1df3e0a94a1c.png",
    description: "Figma",
  },
];
function Skill() {
  return (
    <section
      id="slider"
      className=" mt-10 top-1/3 inset-x-0 mx-auto max-w-4xl w-2/3 h-80  bg-neutral-900"
    >
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        navigation={data.length > 3 ? true : false}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loopFillGroupWithBlank={true}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide>
              <div
                key={index}
                className="flex justify-center items-center flex-col font-mono"
              >
                <img
                  className="w-20 h-20"
                  src={item.imgUrl}
                  alt={"A picture about " + item.description}
                />
                <p className="pt-4 text-base">{item.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Skill;
