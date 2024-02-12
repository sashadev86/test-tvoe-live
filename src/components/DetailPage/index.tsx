"use client";

import { filmsAndSeriesData } from "@/Data";
import { useCallback, useMemo, useState } from "react";
import InfoBottomBlock from "./InfoBottomBlock/indext";
import SimilarFilmBlock from "./SimilarFilmBlock";
import WarningBlock from "./WarningBlock";
import DescriptionBlock from "./DescriptionBlock";
import SeasonSeriesBlock from "./SeasonsSeriesBlock";
import SeasonTabsBlock from "./SeasonTabsBlock";
import ControlsBlock from "./ControlsBlock";
import BgPreviewBlock from "./BgPreviewBlock";
import InfoTopBlock from "./InfoTopBlock";

interface PropsDetailPage {
  id: string;
}

const DetailPage = ({ id }: PropsDetailPage) => {
  const [selectedSeason, setSelectedSeason] = useState(1);

  const handleSeasonChange = useCallback((seasonNumber: number) => {
    setSelectedSeason(seasonNumber);
  }, [setSelectedSeason]);

  const mediaItem = useMemo(() => {
    return filmsAndSeriesData.mediaList.find((item) => item.id === parseInt(id));
  }, [id]);

  if (mediaItem === undefined) {
    return <div>Media not found</div>;
  }

  return (
    <section className="relative pt-[90px]">
      <BgPreviewBlock mediaItem={mediaItem} />
      <InfoTopBlock mediaItem={mediaItem} selectedSeason={selectedSeason} />
      <ControlsBlock />
      <SeasonTabsBlock mediaItem={mediaItem} selectedSeason={selectedSeason} handleSeasonChange={handleSeasonChange} />
      <SeasonSeriesBlock mediaItem={mediaItem} selectedSeason={selectedSeason} />
      <DescriptionBlock mediaItem={mediaItem} />
      <WarningBlock />
      <SimilarFilmBlock mediaItem={mediaItem} filmsAndSeriesData={filmsAndSeriesData} />
      <InfoBottomBlock mediaItem={mediaItem} />
    </section>
  );
};

export default DetailPage;
