import React, { useRef } from "react";
import styles from "./style.module.scss";
import SectionHeader from "../../components/ui/section-header/SectionHeader";
import SliderCard from "../../components/ui/slider-card/SliderCard";
import Button from "../../components/ui/button/Button";
import Spinner from "../../components/ui/spinner/Spinner";
import img from "@/assets/person1.svg";
import { FiMessageSquare } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as swiperType } from "swiper/types";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/posts";
import { useTranslation } from "react-i18next";

const ReviewsSlider: React.FC = () => {
  const swiperRef = useRef<null | swiperType>(null);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const isSmScreen = window.innerWidth <= 600;
  const isMdScreen = window.innerWidth <= 992;
  const isXlScreen = window.innerWidth <= 1920;

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  const handlePrev = () => {
    if (isArabic) {
      swiperRef.current?.slideNext();
    } else {
      swiperRef.current?.slidePrev();
    }
  };

  const handleNext = () => {
    if (isArabic) {
      swiperRef.current?.slidePrev();
    } else {
      swiperRef.current?.slideNext();
    }
  };

  if (isLoading) return <Spinner />;

  if (error) return <p>{t("common.error_fetching_data")}</p>;

  return (
    <section className={styles["reviews-sec"]}>
      <div className="container">
        <SectionHeader
          icon={<FiMessageSquare size={14} className={styles["sub-icon"]} />}
          subTitle={t("testimonials_section.badge")}
        >
          <h2>{t("testimonials_section.title")}</h2>
          <p>{t("testimonials_section.description")}</p>
        </SectionHeader>
      </div>

      <div className={`container ${styles["slider-container"]}`}>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={
            isSmScreen ? 1 : isMdScreen ? 1.6 : isXlScreen ? 2.55 : 5
          }
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={500}
          className={styles["my-swiper"]}
          key={i18n.language}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          {posts?.map((post) => (
            <SwiperSlide key={post.id}>
              <SliderCard
                reviewContent={
                  isArabic
                    ? "نص لوريم إيبسوم هو نوع من النصوص المؤقتة المستخدمة بشكل شائع في صناعات التصميم والنشر لملء مساحة على الصفحة وإعطاء انطباع عن الشكل النهائي للمحتوى. نص لوريم إيبسوم باللغة العربية مشتق من نص لاتيني كتبه الفيلسوف الروماني شيشرون وقد تم استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز على التخطيط والعناصر المرئية دون تشتيت الانتباه بالمحتوى الهادف.".slice(
                        0,
                        150
                      )
                    : post.body.slice(0, 150)
                }
                userImg={img}
                username={isArabic ? "أحمد عمر" : "Alfredo Lubin"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.btns}>
        <Button
          variant="rounded"
          onClick={handlePrev}
          aria-label={t("common.previous_slide")}
        >
          {isArabic ? <FaArrowRight size={20} /> : <FaArrowLeft size={20} />}
        </Button>
        <Button
          variant="rounded"
          onClick={handleNext}
          aria-label={t("common.next_slide")}
        >
          {isArabic ? <FaArrowLeft size={20} /> : <FaArrowRight size={20} />}
        </Button>
      </div>
    </section>
  );
};

export default ReviewsSlider;
