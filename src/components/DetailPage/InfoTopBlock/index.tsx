import { Media } from "@/Data/interface";
import Image from "next/image";
import Text from "@/components/Text";

interface InfoTopBlockProps {
  mediaItem: Media;
  selectedSeason: number;
}

const InfoTopBlock = ({ mediaItem, selectedSeason }: InfoTopBlockProps) => {
  return (
    <div className="mb-[110px]">
      {mediaItem &&
        mediaItem.details &&
        mediaItem.details.imgTitleLogo !== null && (
          <Image
            className="mb-[32px] max-w-[367px] max-h-[132px]"
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
        classes="max-w-[735px] text-white text-[28px] font-medium leading-[34px]"
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
    </div>
  );
};

export default InfoTopBlock;
