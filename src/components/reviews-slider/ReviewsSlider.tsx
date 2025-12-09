import React, { useRef } from "react";
import styles from "./style.module.scss";
import SectionHeader from "../ui/section-header/SectionHeader";
import { FiMessageSquare } from "react-icons/fi";
import SliderCard from "../ui/slider-card/SliderCard";
import img from "@/assets/person1.svg";
import Button from "../ui/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import type { Swiper as swiperType } from "swiper/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ReviewsSlider: React.FC = () => {
  const swiperRef = useRef<null | swiperType>(null);

  return (
    <section className={styles["reviews-sec"]}>
      {/* header */}
      <div className="container">
        <SectionHeader
          icon={<FiMessageSquare size={14} className={styles["sub-icon"]} />}
          subTitle="Testimonials"
        >
          <h2>What are people saying</h2>
          <p>
            "Thank you for your trust in Crypt Land! We are grateful for your
            feedback and are committed to providing the best [products/ services
            offered]. Read what our clients have to say about their experience
            with us.
          </p>
        </SectionHeader>
      </div>

      {/* slider */}
      <div className={`container ${styles["slider-container"]}`}>
        <Swiper
          spaceBetween={30}
          slidesPerView={2.55}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
        >
          <SwiperSlide>
            <SliderCard
              reviewContent="I really like the system at this management,
i love recommending this software to you
guys"
              userImg={img}
              username="Alfredo Lubin"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              reviewContent="I really like the system at this management,
i love recommending this software to you
guys"
              userImg={img}
              username="Alfredo Lubin"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              reviewContent="I really like the system at this management,
i love recommending this software to you
guys"
              userImg={img}
              username="Alfredo Lubin"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.btns}>
        <Button
          variant="rounded"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaArrowLeft size={20} />
        </Button>
        <Button
          variant="rounded"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};

export default ReviewsSlider;
