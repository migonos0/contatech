import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsLf0rDZ41UD0S_j3ie_W2VpjnYBRdxCXMKdGYjX7nw&s"
          }
          alt="AI Headshot Illustration"
          className="rounded-lg object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={
            "https://pixahive.com/wp-content/uploads/2020/10/A-scientific-calculator-for-accounting-139900-pixahive.jpg"
          }
          alt="AI Headshot Illustration"
          className="rounded-lg object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMu0oYbqMJbACp8kNhvPtZjTKnhx7XoTlciilHks4RlA&s"
          }
          alt="AI Headshot Illustration"
          className="rounded-lg object-cover w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
};
