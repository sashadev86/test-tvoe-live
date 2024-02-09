export interface Episode {
  episodeNumber: number;
  thumbnail: string;
  duration: {
    hours: number;
    minutes: number;
  };
}

export interface Season {
  seasonNumber: number;
  episodes: Episode[];
  description: string;
}

export interface WeeklyTopData {
  rank: number | null;
  isInTop: boolean;
}

export interface Detail {
  imgBg: string | null;
  imgTitleLogo: string | null;
}

export interface Media {
  id: number;
  title: string;
  type: string;
  year: number;
  content: string;
  description: string;
  genre: string;
  genres?: string[];
  isNewRelease: boolean;
  thumbnail: string;
  details?: Detail;
  premiere?: string;
  country: string;
  countries?: string[];
  originalTitle?: string;
  languages?: string[];
  quality?: string[];
  rating?: string;
  endYear?: number | null;
  ageRestriction: string;
  seasons?: Season[];
  weeklyTop?: WeeklyTopData[];
}
