interface Episode {
  episodeNumber: number;
  thumbnail: string;
  duration: {
    hours: number;
    minutes: number;
  };
}

interface Season {
  seasonNumber: number;
  episodes: Episode[];
}

interface Media {
  id: number;
  title: string;
  type: string;
  year: number;
  content: string;
  description: string;
  genre: string[];
  isNewRelease: boolean;
  thumbnail: string;
  premiere?: string;
  country?: string[];
  originalTitle?: string;
  languages?: string[];
  quality?: string[];
  rating?: number;
  endYear?: number | null;
  ageRestriction?: string;
  seasons?: Season[];
}

export const filmsAndSeriesData: { mediaList: Media[] } = {
  mediaList: [
    {
      id: 1,
      title: "Уэнсдэй",
      type: "serials",
      year: 2022,
      content:
        "Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.",
      description:
        "Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.",
      genre: ["Драма", "Триллер"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/wednesday/wednesday.png",
      premiere: "2019-10-31",
      country: ["США"],
      originalTitle: "Wednesday",
      languages: ["Английский"],
      quality: ["Full HD"],
      rating: 10,
      endYear: null,
      ageRestriction: "0+",
      seasons: [
        {
          seasonNumber: 1,
          episodes: [
            {
              episodeNumber: 1,
              thumbnail: "url/to/ser1_ep1_thumbnail.jpg",
              duration: { hours: 0, minutes: 43 },
            },
            // Повторите структуру для других эпизодов
          ],
        },
        {
          seasonNumber: 2,
          episodes: [
            {
              episodeNumber: 1,
              thumbnail: "url/to/ser1_ep1_thumbnail.jpg",
              duration: { hours: 0, minutes: 42 },
            },
            // Повторите структуру для других эпизодов
          ],
        },
        // Добавьте другие сезоны по аналогии
      ],
    },
    {
      id: 2,
      title: "Синий жук",
      type: "film",
      year: 2023,
      content:
        "Мексиканский подросток Хайме Рейес получает инопланетный костюм, который даёт ему суперсилы.",
      description:
        "Жизнь мексиканского подростка Хайме Рейеса навсегда меняется, когда он получает инопланетный костюм и обретает мощные, но непредсказуемые сверхспособности. Супергеройский экшен по комиксам DC со Сьюзен Сарандон и Харви Гильеном.",
      genre: ["фантастика", "боевик", "триллер", "приключения"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/blue-beetle/blue-beetle.png",
      premiere: "2023-08-16",
      country: ["США", "Мексика"],
      originalTitle: "Blue Beetle",
      languages: ["Английский", "Французский"],
      quality: ["Full HD", "4k"],
      rating: 10,
      endYear: null,
      ageRestriction: "0+",
    },
    {
      id: 3,
      title: "Синий жук",
      type: "film",
      year: 2023,
      content:
        "Мексиканский подросток Хайме Рейес получает инопланетный костюм, который даёт ему суперсилы.",
      description:
        "Жизнь мексиканского подростка Хайме Рейеса навсегда меняется, когда он получает инопланетный костюм и обретает мощные, но непредсказуемые сверхспособности. Супергеройский экшен по комиксам DC со Сьюзен Сарандон и Харви Гильеном.",
      genre: ["фантастика", "боевик", "триллер", "приключения"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/blue-beetle/blue-beetle.png",
      premiere: "2023-08-16",
      country: ["США", "Мексика"],
      originalTitle: "Blue Beetle",
      languages: ["Английский", "Французский"],
      quality: ["Full HD", "4k"],
      rating: 10,
      endYear: null,
      ageRestriction: "0+",
    },
    {
      id: 4,
      title: "Синий жук",
      type: "film",
      year: 2023,
      content:
        "Мексиканский подросток Хайме Рейес получает инопланетный костюм, который даёт ему суперсилы.",
      description:
        "Жизнь мексиканского подростка Хайме Рейеса навсегда меняется, когда он получает инопланетный костюм и обретает мощные, но непредсказуемые сверхспособности. Супергеройский экшен по комиксам DC со Сьюзен Сарандон и Харви Гильеном.",
      genre: ["фантастика", "боевик", "триллер", "приключения"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/blue-beetle/blue-beetle.png",
      premiere: "2023-08-16",
      country: ["США", "Мексика"],
      originalTitle: "Blue Beetle",
      languages: ["Английский", "Французский"],
      quality: ["Full HD", "4k"],
      rating: 10,
      endYear: null,
      ageRestriction: "0+",
    },
    {
      id: 5,
      title: "Синий жук",
      type: "film",
      year: 2023,
      content:
        "Мексиканский подросток Хайме Рейес получает инопланетный костюм, который даёт ему суперсилы.",
      description:
        "Жизнь мексиканского подростка Хайме Рейеса навсегда меняется, когда он получает инопланетный костюм и обретает мощные, но непредсказуемые сверхспособности. Супергеройский экшен по комиксам DC со Сьюзен Сарандон и Харви Гильеном.",
      genre: ["фантастика", "боевик", "триллер", "приключения"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/blue-beetle/blue-beetle.png",
      premiere: "2023-08-16",
      country: ["США", "Мексика"],
      originalTitle: "Blue Beetle",
      languages: ["Английский", "Французский"],
      quality: ["Full HD", "4k"],
      rating: 10,
      endYear: null,
      ageRestriction: "0+",
    },
  ],
};
