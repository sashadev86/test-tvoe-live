import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Text from "@/components/Text";
import { Media } from "@/Data/interface";
import { useMemo } from "react";
import Link from "next/link";
import styles from "./SimilarFilmBlock.module.scss";

interface SimilarFilmProps {
  mediaItem: Media;
  filmsAndSeriesData: {
    mediaList: Media[];
  };
}

const SimilarFilmBlock = ({ mediaItem, filmsAndSeriesData }: SimilarFilmProps) => {
  const similarFilms = useMemo(() => {
    if (mediaItem) {
      // Filter other movies by the genres of the current movie
      const similar = filmsAndSeriesData.mediaList.filter((item) =>
        item.genres.some((genre) => mediaItem.genres.includes(genre))
      );

      // We exclude the current movie from the list of similar ones
      return similar.filter((item) => item.id !== mediaItem.id);
    }
    return [];
  }, [mediaItem, filmsAndSeriesData.mediaList]);

  return (
    <>
      {similarFilms.length > 0 && (
        <div className="similar">
          <Text
            classes="mb-[12px] text-[40px] font-bold leading-[51px] text-white"
            tag="h2"
            text={"Похожее"}
          />
          <Swiper
            className={`mb-[50px] ${styles["similar__swiper"]} relative pt-[10px] pb-[10px] pl-[10px] ml-[-10px] overflow-hidden z-[1]`}
            slidesPerView={Math.min(6.2, similarFilms.length)}
            spaceBetween={24}
            loop={similarFilms.length > 6.2}
          >
            {similarFilms.map((film) => (
              <SwiperSlide
                className={`${styles["similar__swiper-slide"]}`}
                key={film.id}
              >
                <Link
                  className={`relative ${styles["similar__swiper-slide-link"]}`}
                  href={film.id.toString()}
                >
                  <div
                    className={`relative ${styles["similar__swiper-slide-link-wrapper"]}`}
                  >
                    <Image
                      className="rounded-[20px] max-w-[255px] max-h-[382px]"
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
    </>
  );
};

export default SimilarFilmBlock;
