import { Media } from "@/Data/interface";
import Image from "next/image";

interface BgPreviewBlockProps {
  mediaItem: Media;
}

const BgPreviewBlock = ({ mediaItem }: BgPreviewBlockProps) => {
  return (
    <>
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
    </>
  );
};

export default BgPreviewBlock;
