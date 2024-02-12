import { Media } from "@/Data/interface";
import Text from "@/components/Text";

interface DescriptionBlockProps {
  mediaItem: Media;
}

const DescriptionBlock = ({ mediaItem }: DescriptionBlockProps) => {
  return (
    <div>
      <Text
        classes={"mb-[22px] text-[40px] font-bold leading-[51px] text-white"}
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
    </div>
  );
}

export default DescriptionBlock