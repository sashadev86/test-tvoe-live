import { Media } from "@/Data/interface";
import Button from "@/components/Button";
import Text from "@/components/Text";
import styles from "./SeasonTabsBlock.module.scss"

interface SeasonTabsBlockProps {
  mediaItem: Media;
  selectedSeason: number;
  handleSeasonChange: (seasonNumber: number) => void;
}

const SeasonTabsBlock = ({ mediaItem, selectedSeason, handleSeasonChange }: SeasonTabsBlockProps) => {
  return (
    <>
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
    </>
  );
}

export default SeasonTabsBlock