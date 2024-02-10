"use client";

import { filmsAndSeriesData } from "@/Data";
import Image from "next/image";
import Text from "../Text";
import Button from "../Button";
import Icon from "../Icon/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { pluralMinutes } from "@/utils";
import styles from "./detailPage.module.scss";
import { Media } from "@/Data/interface";

interface PropsDetailPage {
  id: string;
}

const DetailPage = ({ id }: PropsDetailPage) => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [similarFilms, setSimilarFilms] = useState<Media[]>([]);

  const mediaItem = filmsAndSeriesData.mediaList.find(
    (item) => item.id === parseInt(id)
  );

  useEffect(() => {
    if (mediaItem) {
      // Фильтруем другие фильмы по жанрам текущего фильма
      const similar = filmsAndSeriesData.mediaList.filter((item) =>
        item.genres.some((genre) => mediaItem.genres.includes(genre))
      );

      // Исключаем текущий фильм из списка похожих
      const filteredSimilar = similar.filter(
        (item) => item.id !== mediaItem.id
      );

      // Устанавливаем похожие фильмы в состояние
      setSimilarFilms(filteredSimilar);
    }
  }, [mediaItem]);

  if (mediaItem === undefined) {
    return <div>Media not found</div>;
  }

  const handleSeasonChange = (seasonNumber: number) => {
    setSelectedSeason(seasonNumber);
  };

  console.log(similarFilms);
  // console.log(mediaItem);

  // const selectedSeasonData = mediaItem.seasons.find(
  //   (season) => season.seasonNumber === selectedSeason
  // );

  // console.log(selectedSeasonData);

  return (
    <section className="detail">
      <div className="relative pt-[90px] mb-[60px]">
        {mediaItem && mediaItem.details && mediaItem.details.imgBg !== null && (
          <Image
            className="absolute top-0 right-0 z-[-1]"
            src={mediaItem.details.imgBg}
            width={1400}
            height={780}
            alt={mediaItem.title}
            priority
          />
        )}

        {mediaItem &&
          mediaItem.details &&
          mediaItem.details.imgTitleLogo !== null && (
            <Image
              className="mb-[32px]"
              src={mediaItem.details.imgTitleLogo}
              width={367}
              height={132}
              alt={mediaItem.title}
              priority
            />
          )}

        <div className="mb-[20px] flex items-center gap-[32px]">
          {mediaItem && mediaItem.rating && (
            <Text
              classes="text-white text-[28px] font-medium px-[22px] py-[3px] bg-white/[.2] rounded-[12px]"
              tag={"p"}
              text={mediaItem.rating}
            />
          )}

          {mediaItem && mediaItem.type === "film" ? (
            <Text
              classes="text-white text-[28px] font-normal"
              tag={"p"}
              text={mediaItem.year.toString()}
            />
          ) : (
            <>
              {mediaItem && mediaItem.endYear !== null ? (
                <Text
                  classes="text-white text-[28px] font-normal"
                  tag={"p"}
                  text={`${mediaItem.year.toString()} - ${mediaItem.endYear}`}
                />
              ) : (
                <Text
                  classes="text-white text-[28px] font-normal"
                  tag={"p"}
                  text={`${mediaItem.year.toString()} - ...`}
                />
              )}
            </>
          )}

          {mediaItem && mediaItem.type === "serial" && (
            <Text
              classes="text-white text-[28px] font-normal"
              tag={"p"}
              text={`${selectedSeason.toString()} сезон`}
            />
          )}

          <Text
            classes="text-white text-[28px] font-normal"
            tag={"p"}
            text={mediaItem.country}
          />
          <Text
            classes="text-white text-[28px] font-normal"
            tag={"p"}
            text={mediaItem.genre}
          />
          <Text
            classes="text-white text-[28px] font-normal"
            tag={"p"}
            text={mediaItem.ageRestriction}
          />
        </div>

        <Text
          classes="mb-[110px] max-w-[735px] text-white text-[28px] font-medium leading-[34px]"
          tag="p"
          text={
            mediaItem.type === "film"
              ? mediaItem.content
              : (mediaItem.seasons &&
                  mediaItem.seasons.find(
                    (season) => season.seasonNumber === selectedSeason
                  )?.description) ||
                ""
          }
        />

        <div className="mb-[106px] flex items-center gap-[17px]">
          <Button
            className="px-[32px] pt-[16px] pb-[19px] text-[30px] font-medium text-white bg-gradient-blue rounded-[16px] hover:opacity-70 focus:opacity-70 transition-opacity duration-300 ease-in-out outline-none"
            text="Смотреть"
          />
          <Button
            className="px-[32px] pt-[16px] pb-[19px] text-[30px] font-medium text-white bg-white/[.2] rounded-[16px] hover:opacity-70 focus:opacity-70 transition-opacity duration-300 ease-in-out outline-none"
            text="Трейлер"
          />
          <Button
            className="px-[37px] py-[26px] text-[30px] text-white bg-white/[.2] rounded-[16px] hover:opacity-70 focus:opacity-70 transition-opacity duration-300 ease-in-out outline-none"
            text=""
          >
            <Icon
              id="bookmark"
              className="text-white w-[21.33px] h-[26.67px]"
            />
          </Button>
          <Button
            className="px-[32px] py-[24px] text-[30px] text-white bg-white/[.2] rounded-[16px] hover:opacity-70 focus:opacity-70 transition-opacity duration-300 ease-in-out outline-none"
            text=""
          >
            <Icon id="like" className="text-white w-[32px] h-[32px]" />
          </Button>
        </div>

        {mediaItem && mediaItem.seasons && (
          <div className="flex items-center gap-[44px]">
            <Text
              classes="text-[40px] text-white font-bold"
              tag={"h2"}
              text="Сезоны"
            />
            <div className="flex items-center gap-[20px]">
              {mediaItem.seasons.map((season, index) => (
                <Button
                  className={`w-[40px] h-[40px] text-[24px] font-medium text-[#FFFFFF] bg-[#232326] rounded-full hover:bg-[#6A11CB] hover:text-[#FFFFFF] focus:bg-[#6A11CB] focus:text-[#FFFFFF] transition-colors duration-300 ease-in-out outline-none ${
                    selectedSeason === season.seasonNumber
                      ? styles["tab-active"]
                      : ""
                  }`}
                  text={season.seasonNumber.toString()}
                  onClick={() => handleSeasonChange(season.seasonNumber)}
                  key={index}
                />
              ))}
            </div>
          </div>
        )}

        {mediaItem && mediaItem.seasons && (
          <Swiper
            className={`${styles["detail__swiper"]}`}
            slidesPerView={3.06}
            spaceBetween={19}
          >
            {mediaItem.seasons
              .find((season) => season.seasonNumber === selectedSeason)
              ?.episodes.map((episode, index) => (
                <SwiperSlide key={index}>
                  <Link
                    className={`outline-none ${styles["detail__swiper-slide-link"]}`}
                    href="#"
                  >
                    <Image
                      className={`mb-[40px] rounded-[20px] ${styles["detail__swiper-slide-link-image"]} transition-transform duration-300 ease-in-out`}
                      src={episode.thumbnail}
                      width={577}
                      height={306}
                      alt={mediaItem.title}
                      priority
                    />
                  </Link>

                  <Text
                    classes="mb-[11px] pl-[7px] text-[24px] font-medium text-white tracking-[2px]"
                    tag={"p"}
                    text={`${episode.episodeNumber.toString()} серия`}
                  />

                  <Text
                    classes="text-[24px] font-normal leading-[31px] text-[#BABABA]"
                    tag={"p"}
                    text={`${episode.duration.minutes} ${pluralMinutes(
                      episode.duration.minutes
                    ).toString()}`}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>

      <Text
        classes={"mb-[20px] text-[40px] font-bold leading-[51px] text-white"}
        tag={"h2"}
        text={"Описание"}
      />
      <Text
        classes={
          "mb-[26px] text-[30px] font-normal leading-[36px] text-white max-w-[1635px]"
        }
        tag={"p"}
        text={mediaItem.description}
      />

      <div className="mb-[60px] flex items-start gap-[14px]">
        <Icon id={"warning"} className={"w-[55px] h-[45px] text-[#4B4B4B]"} />
        <Text
          classes={"text-[28px] text-[#4B4B4B] leading-[36px] max-w-[1510px]"}
          tag={"p"}
          text={
            "Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью."
          }
        />
      </div>

      {similarFilms.length > 0 && (
        <div>
          <Text
            classes="mb-[24px] text-[40px] text-bold leading-[51px] text-white"
            tag="h2"
            text={"Похожее"}
          />
          <Swiper
            className="mb-[60px]"
            slidesPerView={6.2}
            spaceBetween={24}
            loop={true}
          >
            {similarFilms.map((film) => (
              <SwiperSlide key={film.id}>
                <Link className="relative" href={film.id.toString()}>
                  <Image
                    className="rounded-[20px] max-h-[382px]"
                    src={film.thumbnail}
                    width={255}
                    height={382}
                    alt={film.title}
                    priority
                  />

                  <Text classes={"text-white"} tag={"p"} text={film.rating || ""} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default DetailPage;
