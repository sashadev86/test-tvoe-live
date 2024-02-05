"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard } from "swiper/modules";
import Text from "../Text";
import { filmsAndSeriesData } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import styles from "./new-films.module.scss";
import { SetStateAction, useState } from "react";

const NewFilms = () => {
  const { mediaList } = filmsAndSeriesData;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

 const handleSlideChange = (swiper) => {
   setActiveSlideIndex(swiper.activeIndex);
   console.log("Active Slide Index:", swiper.activeIndex);
 };


  return (
    <div>
      <Text
        classes="mb-[26px] text-white text-[40px] font-bold leading-[51px]"
        tag="h2"
        text={"Новинки"}
      />

      <Swiper
        className="new-films__swiper text-white"
        modules={[Keyboard]}
        slidesPerView={3.95}
        spaceBetween={44}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        onInit={handleSlideChange}
      >
        {mediaList.map((media, index) => (
          <SwiperSlide
            className={`new-films__swiper-slide ${
              index === activeSlideIndex ? styles.activeSlide : ""
            }`}
            key={media.id}
          >
            <Link
              className="relative flex flex-col gap-[19px]"
              href={media.id.toString()}
            >
              <Image
                className={`rounded-[20px] ${
                  index === activeSlideIndex ? styles.activeImage : ""
                }`}
                src={media.thumbnail}
                width={398}
                height={597}
                alt={media.title}
              />
              <Text
                classes="text-white text-[28px] font-medium leading-[36px]"
                tag="p"
                text={media.title}
              />
              <Text
                classes={`absolute top-[28px] left-[29px] px-[22px] py-[6px] ${styles["new-films__swiper-slide"]} text-white text-[28px] font-medium leading-[36px] rounded-[12px]`}
                tag="span"
                text={media.rating?.toString() ?? "N/A"}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewFilms;
