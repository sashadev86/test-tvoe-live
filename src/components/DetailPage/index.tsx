"use client";

import { filmsAndSeriesData } from "@/Data";
import Image from "next/image";
import Text from "../Text";
import Button from "../Button";
import Icon from "../Icon/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Link from "next/link";
import { pluralMinutes } from "@/utils";

interface PropsDetailPage {
  id: string;
}

const DetailPage = ({ id }: PropsDetailPage) => {
  const [selectedSeason, setSelectedSeason] = useState(1);

  const mediaItem = filmsAndSeriesData.mediaList.find(
    (item) => item.id === parseInt(id)
  );

  if (mediaItem === undefined) {
    return <div>Media not found</div>;
  }

  const handleSeasonChange = (seasonNumber: number) => {
    setSelectedSeason(seasonNumber);
  };

  // console.log(mediaItem);

  // const selectedSeasonData = mediaItem.seasons.find(
  //   (season) => season.seasonNumber === selectedSeason
  // );

  // console.log(selectedSeasonData);

  return (
    <section>
      <div className="relative pt-[90px]">
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
              className=""
              src={mediaItem.details.imgTitleLogo}
              width={367}
              height={132}
              alt={mediaItem.title}
              priority
            />
          )}

        <div className="flex items-center gap-[32px]">
          {mediaItem && mediaItem.rating && (
            <Text
              classes="text-white text-[28px]"
              tag={"p"}
              text={mediaItem.rating}
            />
          )}

          {mediaItem && mediaItem.type === "film" ? (
            <Text
              classes="text-white"
              tag={"p"}
              text={mediaItem.year.toString()}
            />
          ) : (
            <>
              {mediaItem && mediaItem.endYear !== null ? (
                <Text
                  classes="text-white"
                  tag={"p"}
                  text={`${mediaItem.year.toString()} - ${mediaItem.endYear}`}
                />
              ) : (
                <Text
                  classes="text-white"
                  tag={"p"}
                  text={`${mediaItem.year.toString()} - ...`}
                />
              )}
            </>
          )}

          {mediaItem && mediaItem.type === "serial" && (
            <Text
              classes="text-white"
              tag={"p"}
              text={`${selectedSeason.toString()} сезон`}
            />
          )}

          <Text classes="text-white" tag={"p"} text={mediaItem.country} />
          <Text classes="text-white" tag={"p"} text={mediaItem.genre} />
          <Text
            classes="text-white"
            tag={"p"}
            text={mediaItem.ageRestriction}
          />
        </div>

        <Text
          classes="text-white"
          tag="p"
          text={mediaItem.type === "film" ? mediaItem.content : (mediaItem.seasons && mediaItem.seasons.find((season) => season.seasonNumber === selectedSeason)?.description) || ""}
        />

        <div className="flex items-center">
          <Button className="text-white" text="Смотреть" />
          <Button className="text-white" text="Трейлер" />
          <Button className="text-white" text="">
            <Icon
              id="bookmark"
              className="text-white w-[21.33px] h-[26.67px]"
            />
          </Button>
          <Button className="text-white" text="">
            <Icon id="like" className="text-white w-[32px] h-[32px]" />
          </Button>
        </div>

        {mediaItem && mediaItem.seasons && (
          <div className="flex items-center gap-[44px]">
            <Text classes="text-white" tag={"h2"} text="Сезоны" />
            <div className="flex items-center gap-[20px]">
              {mediaItem.seasons.map((season, index) => (
                <Button
                  className={`text-white ${
                    selectedSeason === season.seasonNumber ? "tab-active" : ""
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
          <Swiper slidesPerView={3.1} spaceBetween={20}>
            {mediaItem.seasons
              .find((season) => season.seasonNumber === selectedSeason)
              ?.episodes.map((episode, index) => (
                <SwiperSlide key={index}>
                  <Link href="#">
                    <Image
                      className="rounded-[20px]"
                      src={episode.thumbnail}
                      width={577}
                      height={306}
                      alt={mediaItem.title}
                    />

                    <Text
                      classes="text-white"
                      tag={"p"}
                      text={`${episode.episodeNumber.toString()} серия`}
                    />

                    <Text
                      classes="text-white"
                      tag={"p"}
                      text={`${episode.duration.minutes} ${pluralMinutes(
                        episode.duration.minutes
                      ).toString()}`}
                    />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default DetailPage;
