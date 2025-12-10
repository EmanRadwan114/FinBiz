import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import SectionHeader from "../../components/ui/section-header/SectionHeader";
import { FiMessageSquare } from "react-icons/fi";
import SliderCard from "../../components/ui/slider-card/SliderCard";
import img from "@/assets/person1.svg";
import Button from "../../components/ui/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import type { Swiper as swiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/posts";
import Spinner from "../../components/ui/spinner/Spinner";

const ReviewsSlider: React.FC = () => {
  const swiperRef = useRef<null | swiperType>(null);

  //———————————————————————————————— fetch posts ————————————————————————————————
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <Spinner />;

  if (error) return <p>Error in fetching posts</p>;

  console.log(posts);

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
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2.55}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={500}
          className={styles["my-swiper"]}
        >
          {posts?.map((post) => (
            <SwiperSlide>
              <SliderCard
                reviewContent={post.body.slice(0, 150)}
                userImg={img}
                username="Alfredo Lubin"
              />
            </SwiperSlide>
          ))}
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
