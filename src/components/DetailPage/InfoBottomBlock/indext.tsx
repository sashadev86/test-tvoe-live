import { Media } from "@/Data/interface";
import Text from "@/components/Text";
import { getMonthInGenitiveCase } from "@/utils";

interface InfoBlockProps {
  mediaItem: Media;
}

const InfoBottomBlock = ({ mediaItem }: InfoBlockProps) => {
  if (!mediaItem) {
    return null;
  }

  const premiereDate = new Date(mediaItem.premiere || "");
  const formattedPremiereDate = `${premiereDate.getDate()} ${getMonthInGenitiveCase(
    premiereDate.getMonth()
  )} ${premiereDate.getFullYear()}`;

  return (
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
                classes={"text-[28px] font-normal leading-[36px] text-white/30"}
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
                classes={"text-[28px] font-normal leading-[36px] text-white/30"}
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
                classes={"text-[28px] font-normal leading-[36px] text-white/30"}
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
                classes={"text-[28px] font-normal leading-[36px] text-white/30"}
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
                classes={"text-[28px] font-normal leading-[36px] text-white/30"}
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
                classes={"text-[28px] font-normal leading-[36px] text-white/30"}
                tag={"p"}
                text={"Жанры"}
              />
              <div className="flex items-center gap-[10px]">
                {mediaItem.quality.map((quality, index) => (
                  <Text
                    classes={
                      "p-[12px] text-[28px] font-normal leading-[36px] text-white bg-gradient-quality rounded-[8px] w-fit"
                    }
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
  );
};

export default InfoBottomBlock