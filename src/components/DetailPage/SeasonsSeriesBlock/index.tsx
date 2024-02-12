import { Media } from '@/Data/interface';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import Text from '@/components/Text';
import { pluralMinutes } from '@/utils';
import styles from "./SeasonsSeriesBlock.module.scss"

interface SeasonSeriesBlockProps {
  mediaItem: Media;
  selectedSeason: number;
}

const SeasonSeriesBlock = ({ mediaItem, selectedSeason }: SeasonSeriesBlockProps) => {
  return (
    <>
      {mediaItem && mediaItem.seasons && (
        <Swiper
          className={`${styles["series__swiper"]} relative mb-[58px] pt-[19px] pl-[15px] ml-[-15px] overflow-hidden z-[1]`}
          slidesPerView={3.057}
          spaceBetween={19}
        >
          {mediaItem.seasons
            .find((season) => season.seasonNumber === selectedSeason)
            ?.episodes.map((episode, index) => (
              <SwiperSlide className="flex flex-col" key={index}>
                <Link
                  className={`outline-none ${styles["series__swiper-slide-link"]}`}
                  href="#"
                >
                  <Image
                    className={`mb-[40px] max-w-[544px] max-h-[306px] w-full rounded-[20px] ${styles["series__swiper-slide-link-image"]} transition-transform duration-300 ease-in-out`}
                    src={episode.thumbnail}
                    width={544}
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
    </>
  );
}

export default SeasonSeriesBlock