"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Text from "../Text";
import { filmsAndSeriesData } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import styles from "./new-films.module.scss";

const NewFilms = () => {
  const { mediaList } = filmsAndSeriesData;

  return (
    <section className="pb-[55px]">
      <Text
        classes="text-white text-[40px] font-bold leading-[51px]"
        tag="h2"
        text={"Новинки"}
      />

      <Swiper
        className={`${styles["new-films__swiper"]} relative pt-[26px] pl-[8px] pb-[8px] ml-[-8px] overflow-hidden z-[1]`}
        slidesPerView={3.962}
        spaceBetween={44}
        initialSlide={1}
        loop={true}
      >
        {mediaList.map((media) =>
          media.isNewRelease ? (
            <SwiperSlide key={media.id}>
              <Link
                className={`relative flex flex-col gap-[19px] max-w-fit outline-none ${styles["new-films__swiper-slide-link"]}`}
                href={`/series/${media.id.toString()}`}
              >
                <div
                  className={`relative max-w-fit ${styles["new-films__swiper-slide-link-wrapper"]}`}
                >
                  <Image
                    className="rounded-[20px] max-w-auto max-h-[597px]"
                    src={media.thumbnail}
                    width={398}
                    height={597}
                    alt={media.title}
                    priority
                  />
                </div>
                <Text
                  classes="text-white text-[28px] font-medium leading-[36px]"
                  tag="p"
                  text={media.title}
                />
                <Text
                  classes={`absolute top-[28px] left-[29px] px-[22px] py-[6px] bg-gradient-blue text-white text-[28px] font-medium leading-[36px] rounded-[12px]`}
                  tag="span"
                  text={media.rating?.toString() ?? "N/A"}
                />
              </Link>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </section>
  );
};

export default NewFilms;
