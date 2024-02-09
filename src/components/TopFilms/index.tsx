"use client";

import Text from "../Text";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import { filmsAndSeriesData } from "@/Data";
import styles from "./top-films.module.scss";
import Link from "next/link";
import Image from "next/image";

const TopFilms = () => {
  const { mediaList } = filmsAndSeriesData;
  const topMediaList = mediaList.filter(
    (media) => media.weeklyTop && media.weeklyTop[0].isInTop
  );

  topMediaList.sort((a, b) => {
    const rankA = (a.weeklyTop && a.weeklyTop[0]?.rank) || 0;
    const rankB = (b.weeklyTop && b.weeklyTop[0]?.rank) || 0;
    return rankA - rankB;
  });

  // console.log(topMediaList);

  return (
    <section className="pt-[50px] pb-[200px]">
      <div
        className={`flex items-center gap-[20px] ${styles["top-films__wrapper"]}`}
      >
        <Text
          classes={`text-[52px] font-black italic text-white uppercase pr-[5px] ml-[-3px] ${styles["top-films__wrapper-title-italic"]}`}
          tag="h2"
          text="Топ-10"
        />
        <Text
          classes={"text-[40px] text-white font-bold"}
          tag="h2"
          text="просмотров за неделю"
        />
      </div>

      <Swiper
        className={`text-white ${styles["top-films__swiper"]}`}
        slidesPerView={2.71}
        spaceBetween={79}
        centeredSlides={true}
        initialSlide={1}
      >
        {topMediaList.map((media) =>
          media.weeklyTop && media.weeklyTop[0].isInTop ? (
            <SwiperSlide key={media.id}>
              <Link
                className={`relative flex items-center ml-[95px] outline-none py-[10px] ${styles["top-films__swiper-slide-link"]}`}
                href={media.id.toString()}
              >
                <Text
                  classes={`pl-[5px] ml-[-5px] z-[-1] font-[Archivo] text-[360px] leading-[392px] ${styles["top-films__swiper-slide-link-text"]}`}
                  tag={"span"}
                  text={media.weeklyTop[0].rank?.toString() || ""}
                />
                <div
                  className={`relative max-w-fit w-[398px] translate-x-[-79px] ${styles["top-films__swiper-slide-link-wrapper"]}`}
                >
                  <Image
                    className={`rounded-[20px] min-w-[398px] h-[597px] ${styles["top-films__swiper-slide-link-wrapper-image"]}`}
                    src={media.thumbnail}
                    width={398}
                    height={597}
                    alt={media.title}
                    priority
                  />
                </div>
              </Link>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </section>
  );
};
export default TopFilms;
