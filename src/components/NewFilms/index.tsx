"use client";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard } from "swiper/modules";
import Text from "../Text";
import { filmsAndSeriesData } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import styles from "./new-films.module.scss";

const NewFilms = () => {
  const { mediaList } = filmsAndSeriesData;

  return (
    <div>
      <Text
        classes="mb-[26px] text-white text-[40px] font-bold leading-[51px]"
        tag="h2"
        text={"Новинки"}
      />

      <Swiper
        className={`text-white ${styles["new-films__swiper"]}`}
        modules={[Keyboard]}
        slidesPerView={3.95}
        spaceBetween={44}
        keyboard={{
          enabled: true,
        }}
        loop={true}
      >
        {mediaList.map((media) =>
          media.isNewRelease !== false ? (
            <SwiperSlide key={media.id}>
              <Link
                className={`relative flex flex-col gap-[19px] ${styles["new-films__swiper-slide-link"]}`}
                href={media.id.toString()}
              >
                <div
                  className={`relative ${styles["new-films__swiper-slide-link-wrapper"]}`}
                >
                  <Image
                    className="rounded-[20px] max-h-[597px]"
                    src={media.thumbnail}
                    width={398}
                    height={597}
                    alt={media.title}
                  />
                </div>
                <Text
                  classes="text-white text-[28px] font-medium leading-[36px]"
                  tag="p"
                  text={media.title}
                />
                <Text
                  classes={`absolute top-[28px] left-[29px] px-[22px] py-[6px] ${styles["new-films__swiper-slide-rating"]} text-white text-[28px] font-medium leading-[36px] rounded-[12px]`}
                  tag="span"
                  text={media.rating?.toString() ?? "N/A"}
                />
              </Link>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
};

export default NewFilms;
