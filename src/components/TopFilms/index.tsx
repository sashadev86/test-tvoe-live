"use client";

import Text from "../Text";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard } from "swiper/modules";
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

  console.log(topMediaList);

  return (
    <section className="pt-[50px]">
      <div
        className={`flex items-center gap-[20px] mb-[19px] ${styles["top-films__wrapper"]}`}
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
        slidesPerView={2.753}
        spaceBetween={100}
        modules={[Keyboard]}
        keyboard={{
          enabled: true,
        }}
      >
        {topMediaList.map((media) =>
          media.weeklyTop && media.weeklyTop[0].isInTop ? (
            <SwiperSlide key={media.id}>
              <Link
                className="relative flex items-center"
                href={media.id.toString()}
              >
                <Text
                  classes={`pl-[5px] ml-[-5px] z-[-1] font-[Archivo] text-[360px] leading-[392px] ${styles["top-films__swiper-slide-text"]}`}
                  tag={"span"}
                  text={media.weeklyTop[0].rank?.toString() || ""}
                />
                <Image
                  className="rounded-[20px] h-[597px] translate-x-[-79px]"
                  src={media.thumbnail}
                  width={398}
                  height={597}
                  alt={media.title}
                  priority
                />
              </Link>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </section>
  );
};
export default TopFilms;
