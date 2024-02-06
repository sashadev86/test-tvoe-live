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
  rating?: string;
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
      endYear: null,
      country: ["США"],
      originalTitle: "Wednesday",
      languages: ["Rus", "Eng"],
      quality: ["Full HD"],
      rating: "10",
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
            // структура для других эпизодов
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
            // структура для других эпизодов
          ],
        },
        // другие сезоны по аналогии
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
      endYear: null,
      country: ["США", "Мексика"],
      originalTitle: "Blue Beetle",
      languages: ["Rus", "Eng"],
      quality: ["Full HD", "4k"],
      rating: "10",
      ageRestriction: "0+",
    },
    {
      id: 3,
      title: "Домашняя игра",
      type: "film",
      year: 2022,
      content:
        "Главный тренер New Orleans Saints Шон Пейтон потерял работу из-за скандала. После этого он берёт шефство над футбольной командой своего сына-шестиклассника.",
      description:
        "Лента «Домашняя игра» повествует о событиях, произошедших спустя 2 года после того, как футбольная команда «Нью-Орлеан Сэйнтс» выиграла престижную награду — Суперкубок. Главного тренера сборной отстраняют от работы из-за громкого скандала. Теперь Шон Пэйтон вынужден вернуться в родной город, где ему, высшему тренеру американской футбольной лиги, предстоит стать наставником для команды обычных школьников, в которую входит его двенадцатилетний сын-шестиклассник. Шон бросает вызов самому себе, когда решает сделать из обычных мальчишек блестящих игроков и вывести юных спортсменов на новый уровень.",
      genre: ["комедия", "спорт"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/home-team/home-team.png",
      premiere: "2022-01-28",
      endYear: null,
      country: ["США"],
      originalTitle: "Home Team",
      languages: ["Rus", "Eng"],
      quality: ["Full HD", "4k"],
      rating: "6,9",
      ageRestriction: "6+",
    },
    {
      id: 4,
      title: "Салют 7",
      type: "film",
      year: 2017,
      content:
        "Фильм о драматических событиях, происходивших на орбите в 1985 году, и о настоящих героях, участвовавших в спасении космической станции «Салют-7».",
      description:
        "Космическая станция «Салют-7», находящаяся на орбите в беспилотном режиме, неожиданно перестаёт отвечать на сигналы центра управления полётами. Принято решение об отправке на орбиту спасательной экспедиции — космический экипаж должен найти «мёртвую» станцию и впервые в мире провести стыковку с 20-тонной глыбой неуправляемого железа. Космонавты понимают, что шансов вернуться на Землю у них немного. Но этот рискованный путь — единственно возможный. Они должны не только проникнуть на «Салют-7», но и оживить его.",
      genre: ["драма", "приключения", "триллер"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/salute7/salute7.png",
      premiere: "2017-09-21",
      endYear: null,
      country: ["Россия"],
      originalTitle: "Салют 7",
      languages: ["Rus"],
      quality: ["Full HD", "4k"],
      rating: "5,8",
      ageRestriction: "16+",
    },
    {
      id: 5,
      title: "Поймай меня, если сможешь",
      type: "film",
      year: 2002,
      content:
        "Мошеннику Фрэнку Абигнейлу понадобилось всего пять лет, чтобы стать легендой криминального мира. В его арсенале было четыре главных оружия - превосходная память, очарование, наблюдательность и остроумие. Именно с их помощью он смог заработать более миллиона долларов.",
      description:
        "Фрэнк Эбегнейл успел поработать врачом, адвокатом и пилотом на пассажирской авиалинии – и все это до достижения полного совершеннолетия в 21 год. Мастер в обмане и жульничестве, он также обладал искусством подделки документов, что в конечном счете принесло ему миллионы долларов, которые он получил по фальшивым чекам. Агент ФБР Карл Хэнрэтти отдал бы все, чтобы схватить Фрэнка и привлечь к ответственности за свои деяния, но Фрэнк всегда опережает его на шаг, заставляя продолжать погоню.",
      genre: ["комедия", "биография", "комедия"],
      isNewRelease: true,
      thumbnail:
        "/img/films-posters/catch-me-if-you-can/catch-me-if-you-can.png",
      premiere: "2002-12-16",
      country: ["США", "Канада"],
      originalTitle: "Catch Me If You Can",
      languages: ["Rus", "Eng"],
      quality: ["Full HD"],
      rating: "7,0",
      endYear: null,
      ageRestriction: "18+",
    },
  ],
};
