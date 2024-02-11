"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { filmsAndSeriesData } from "@/Data";
import Image from "next/image";
import Text from "../Text";
import Button from "../Button";
import Icon from "../Icon/Icon";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getMonthInGenitiveCase, pluralMinutes } from "@/utils";
import { Media } from "@/Data/interface";
import styles from "./detailPage.module.scss";

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

  const premiereDate = new Date(mediaItem.premiere || "");
  const formattedPremiereDate = `${premiereDate.getDate()} ${getMonthInGenitiveCase(
    premiereDate.getMonth()
  )} ${premiereDate.getFullYear()}`;

  return (
    <section>
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
            className={`${styles["detail-page__swiper"]} relative pt-[19px] pl-[15px] ml-[-15px] overflow-hidden z-[1]`}
            slidesPerView={3.06}
            spaceBetween={19}
          >
            {mediaItem.seasons
              .find((season) => season.seasonNumber === selectedSeason)
              ?.episodes.map((episode, index) => (
                <SwiperSlide className="flex flex-col" key={index}>
                  <Link
                    className={`outline-none ${styles["detail-page__swiper-slide-link"]}`}
                    href="#"
                  >
                    <Image
                      className={`mb-[40px] rounded-[20px] ${styles["detail-page__swiper-slide-link-image"]} transition-transform duration-300 ease-in-out`}
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
            classes="mb-[10px] text-[40px] text-bold leading-[51px] text-white"
            tag="h2"
            text={"Похожее"}
          />
          <Swiper
            className={`mb-[50px] ${styles["detail-page__similar"]} relative pt-[10px] pb-[10px] pl-[10px] ml-[-10px] overflow-hidden z-[1]`}
            slidesPerView={6.2}
            spaceBetween={24}
            loop={true}
          >
            {similarFilms.map((film) => (
              <SwiperSlide
                className={`${styles["detail-page__similar-slide"]}`}
                key={film.id}
              >
                <Link
                  className={`relative ${styles["detail-page__similar-slide-link"]}`}
                  href={film.id.toString()}
                >
                  <div
                    className={`relative ${styles["detail-page__similar-slide-link-wrapper"]}`}
                  >
                    <Image
                      className="rounded-[20px] max-h-[382px]"
                      src={film.thumbnail}
                      width={255}
                      height={382}
                      alt={film.title}
                      priority
                    />
                  </div>

                  <Text
                    classes="py-[4px] px-[13px] absolute top-[12px] left-[12px] text-[24px] font-medium leading-[31px] text-white bg-gradient-blue rounded-[8px]"
                    tag="p"
                    text={film.rating || ""}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="mb-[100px]">
        <Text
          classes="mb-[22px] text-[40px] font-bold leading-[51px] text-white"
          tag={"h2"}
          text={"Информация"}
        />
        <div className="flex gap-x-[100px]">
          <div className="flex flex-col gap-y-[22px]">
            {mediaItem && mediaItem.premiere && (
              <div className="flex flex-col gap-[16px]">
                <Text
                  classes={
                    "text-[28px] font-normal leading-[36px] text-white/30"
                  }
                  tag={"p"}
                  text={"Премьера в мире"}
                />
                <Text
                  classes={"text-[28px] font-normal leading-[36px] text-white"}
                  tag={"p"}
                  text={formattedPremiereDate}
                />
              </div>
            )}
            {mediaItem && mediaItem.originalTitle && (
              <div className="flex flex-col gap-[16px]">
                <Text
                  classes={
                    "text-[28px] font-normal leading-[36px] text-white/30"
                  }
                  tag={"p"}
                  text={"Оригинальное название"}
                />
                <Text
                  classes={"text-[28px] font-normal leading-[36px] text-white"}
                  tag={"p"}
                  text={mediaItem.originalTitle}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-[22px]">
            {mediaItem && mediaItem.country && (
              <div className="flex flex-col gap-[16px]">
                <Text
                  classes={
                    "text-[28px] font-normal leading-[36px] text-white/30"
                  }
                  tag={"p"}
                  text={"Страна"}
                />
                <Text
                  classes={"text-[28px] font-normal leading-[36px] text-white"}
                  tag={"p"}
                  text={mediaItem.country}
                />
              </div>
            )}
            {mediaItem && mediaItem.genres && (
              <div className="flex flex-col gap-[16px]">
                <Text
                  classes={
                    "text-[28px] font-normal leading-[36px] text-white/30"
                  }
                  tag={"p"}
                  text={"Жанры"}
                />
                <Text
                  classes={"text-[28px] font-normal leading-[36px] text-white"}
                  tag={"p"}
                  text={mediaItem.genres.join(", ")}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-[22px]">
            {mediaItem && mediaItem.languages && (
              <div className="flex flex-col gap-[16px]">
                <Text
                  classes={
                    "text-[28px] font-normal leading-[36px] text-white/30"
                  }
                  tag={"p"}
                  text={"Язык аудиодорожки"}
                />
                <Text
                  classes={"text-[28px] font-normal leading-[36px] text-white"}
                  tag={"p"}
                  text={mediaItem.languages.join(", ")}
                />
              </div>
            )}
            {mediaItem && mediaItem.quality && (
              <div className="flex flex-col gap-[16px]">
                <Text
                  classes={
                    "text-[28px] font-normal leading-[36px] text-white/30"
                  }
                  tag={"p"}
                  text={"Жанры"}
                />
                <div className="flex items-center gap-[10px]">
                  {mediaItem.quality.map((quality, index) => (
                    <Text
                      classes={"p-[12px] text-[28px] font-normal leading-[36px] text-white bg-gradient-quality rounded-[8px] w-fit"}
                      tag={"p"}
                      text={quality}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
