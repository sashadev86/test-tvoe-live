import { Media } from "./interface";

export const filmsAndSeriesData: { mediaList: Media[] } = {
  mediaList: [
    {
      id: 1,
      title: "Уэнсдэй",
      type: "serial",
      year: 2022,
      content:
        "Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.",
      description:
        "Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.",
      genre: "Ужасы",
      genres: ["Фентези", "Комедия", "Криминал", "Детектив"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/wednesday/wednesday.png",
      details: {
        imgBg: "/img/films-posters/wednesday/wednesday-detail-bg.png",
        imgTitleLogo: "/img/films-posters/wednesday/wednesday-title-logo.png",
      },
      premiere: "2019-10-31",
      endYear: null,
      country: "США",
      countries: ["США"],
      originalTitle: "Wednesday",
      languages: ["Rus", "Eng"],
      quality: ["Full HD"],
      rating: "10",
      ageRestriction: "0+",
      weeklyTop: [
        {
          rank: 9,
          isInTop: true,
        },
      ],
      seasons: [
        {
          seasonNumber: 1,
          description:
            "Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.",
          episodes: [
            {
              episodeNumber: 1,
              thumbnail: "/img/films-posters/wednesday/season1/episode1.png",
              duration: { hours: 0, minutes: 43 },
            },
            {
              episodeNumber: 2,
              thumbnail: "/img/films-posters/wednesday/season1/episode2.png",
              duration: { hours: 0, minutes: 41 },
            },
            {
              episodeNumber: 3,
              thumbnail: "/img/films-posters/wednesday/season1/episode3.png",
              duration: { hours: 0, minutes: 38 },
            },
            {
              episodeNumber: 4,
              thumbnail: "/img/films-posters/wednesday/season1/episode4.png",
              duration: { hours: 0, minutes: 43 },
            },
            {
              episodeNumber: 5,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 43 },
            },
            {
              episodeNumber: 6,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 43 },
            },
            {
              episodeNumber: 7,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 43 },
            },
            {
              episodeNumber: 8,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 43 },
            },
          ],
        },
        {
          seasonNumber: 2,
          description:
            "Лед в отношениях Уэнсдэй и Энид тронулся еще в первом сезоне. В финальной серии девчонки даже обнялись. В случае с Уэнсдэй, сами понимаете, это говорит о многом.",
          episodes: [
            {
              episodeNumber: 1,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 45 },
            },
            {
              episodeNumber: 2,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 45 },
            },
            {
              episodeNumber: 3,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 45 },
            },
            {
              episodeNumber: 4,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 45 },
            },
            {
              episodeNumber: 5,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 45 },
            },
            {
              episodeNumber: 6,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 45 },
            },
            {
              episodeNumber: 7,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 45 },
            },
            {
              episodeNumber: 8,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 45 },
            },
            // структура для других эпизодов
          ],
        },
        // другие сезоны
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
      genre: "Фантастика",
      genres: ["Фантастика", "Боевик", "Триллер", "Приключения"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/blue-beetle/blue-beetle.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2023-08-16",
      endYear: null,
      country: "США",
      countries: ["США", "Мексика"],
      originalTitle: "Blue Beetle",
      languages: ["Rus", "Eng"],
      quality: ["Full HD", "4k"],
      rating: "10",
      ageRestriction: "0+",
      weeklyTop: [
        {
          rank: null,
          isInTop: false,
        },
      ],
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
      genre: "Комедия",
      genres: ["Комедия", "Спорт"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/home-team/home-team.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2022-01-28",
      endYear: null,
      country: "США",
      countries: ["США"],
      originalTitle: "Home Team",
      languages: ["Rus", "Eng"],
      quality: ["Full HD", "4k"],
      rating: "6,9",
      ageRestriction: "6+",
      weeklyTop: [
        {
          rank: null,
          isInTop: false,
        },
      ],
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
      genre: "Драма",
      genres: ["Драма", "Приключения", "Триллер"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/salute7/salute7.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2017-09-21",
      endYear: null,
      country: "Россия",
      countries: ["Россия"],
      originalTitle: "Салют 7",
      languages: ["Rus"],
      quality: ["Full HD", "4k"],
      rating: "5,8",
      ageRestriction: "16+",
      weeklyTop: [
        {
          rank: null,
          isInTop: false,
        },
      ],
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
      genre: "Криминал",
      genres: ["Криминал", "Биография", "Комедия"],
      isNewRelease: true,
      thumbnail:
        "/img/films-posters/catch-me-if-you-can/catch-me-if-you-can.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2002-12-16",
      country: "США",
      countries: ["США", "Канада"],
      originalTitle: "Catch Me If You Can",
      languages: ["Rus", "Eng"],
      quality: ["Full HD"],
      rating: "7,0",
      endYear: null,
      ageRestriction: "18+",
      weeklyTop: [
        {
          rank: null,
          isInTop: false,
        },
      ],
    },
    {
      id: 6,
      title: "Моё прекрасное несчатье",
      type: "film",
      year: 2022,
      content:
        "Проиграв пари, недотрога Эбби должна месяц прожить с плохим парнем. Ромком по бестселлеру Джейми Макгуайр",
      description:
        "Эбби — загадочная и недоступная первокурсница, желающая сбежать от своего прошлого. Трэвис — бунтарь и чемпион подпольных боёв, который не верит в любовь. Воплощая в себе всё, от чего Эбби стоит держаться подальше, Трэвис предлагает пари: если он выиграет следующий поединок, она проведёт месяц с ним. Однако он и не догадывается, что у них намного больше общего, чем кажется.",
      genre: "Комедия",
      genres: ["Комедия", "Мелодрама"],
      isNewRelease: false,
      thumbnail: "/img/films-posters/beautiful-disaster/beautiful-disaster.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2023-04-05",
      country: "США",
      countries: ["США"],
      originalTitle: "Beautiful Disaster",
      languages: ["Rus", "Eng"],
      quality: ["4k", "Full HD"],
      rating: "6,5",
      endYear: null,
      ageRestriction: "18+",
      weeklyTop: [
        {
          rank: 1,
          isInTop: true,
        },
      ],
    },
    {
      id: 7,
      title: "Красное уведомление",
      type: "film",
      year: 2021,
      content:
        "Более двух тысяч лет назад влюблённый в Клеопатру древнеримский генерал Марк Антоний подарил ей три яйца, украшенные золотом и драгоценными камнями. С тех пор эти вещицы окружали легенды, пока в начале XX века не были обнаружены две из них: теперь одно яйцо выставляется в музее Рима, другое содержится в частной коллекции, а местонахождение третьего неизвестно.",
      description:
        "Когда египетский миллиардер объявляет большую награду каждому, кто доставит три яйца Клеопатры к свадьбе его дочери, агент ФБР Джон Хартли использует это как возможность поймать самого разыскиваемого вора предметов искусства Нолана Бута. Но тот, стащив яйцо из римского музея, уходит от преследования. Вскоре под давлением обстоятельств Буту и Хартли придётся не только объединиться в поисках драгоценных яиц, но и вести хитроумную игру против ещё одного разыскиваемого Интерполом «любителя» предметов старины по прозвищу Ладья.",
      genre: "Комедия",
      genres: ["Комедия", "Боевик", "Криминал"],
      isNewRelease: false,
      thumbnail: "/img/films-posters/red-notice/red-notice.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2021-11-04",
      country: "США",
      countries: ["США"],
      originalTitle: "Red Notice",
      languages: ["Rus", "Eng"],
      quality: ["4k", "Full HD"],
      rating: "6,5",
      endYear: null,
      ageRestriction: "12+",
      weeklyTop: [
        {
          rank: 2,
          isInTop: true,
        },
      ],
    },
    {
      id: 8,
      title: "Ведьмак",
      type: "serial",
      year: 2019,
      content:
        "«Ведьмак» — это, возможно, самый успешный проект последних лет. История о магии, добре, зле и силе судьбы собрала армию фанатов. Они с нетерпением ждут новый сезон и ищут интересные факты о сериале. Читайте больше: https://www.nur.kz/leisure/movies/1834481-vedmak-cto-nuzno-znat-pered-prosmotrom-seriala/",
      description:
        "Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ болотных, оборотней и даже заколдованных принцесс. В сельской глуши местную девушку Йеннифэр, которой сильно не повезло с внешностью, зато посчастливилось иметь способности к магии, отец продаёт колдунье в ученицы. А малолетняя наследница королевства Цинтра по имени Цири вынуждена пуститься в бега, когда их страну захватывает империя Нильфгаард. Судьбы этих троих окажутся тесно связаны, но скоро сказка сказывается, да не скоро дело делается.",
      genre: "Фентези",
      genres: ["Фентези", "Приключеие", "Драмма", "Ужасы"],
      isNewRelease: false,
      thumbnail: "/img/films-posters/witcher/witcher.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2019-12-20",
      country: "США",
      countries: ["США", "Польша"],
      originalTitle: "The Witcher",
      languages: ["Rus", "Eng"],
      quality: ["4k", "Full HD"],
      rating: "7,2",
      endYear: null,
      ageRestriction: "18+",
      seasons: [
        {
          seasonNumber: 1,
          description: "",
          episodes: [
            {
              episodeNumber: 1,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 43 },
            },
            // структура для других эпизодов
          ],
        },
        {
          seasonNumber: 2,
          description: "",
          episodes: [
            {
              episodeNumber: 1,
              thumbnail: "/img/films-posters/plug/plug.png",
              duration: { hours: 0, minutes: 42 },
            },
            // структура для других эпизодов
          ],
        },
        // другие сезоны по аналогии
      ],
      weeklyTop: [
        {
          rank: 3,
          isInTop: true,
        },
      ],
    },
    {
      id: 9,
      title: "Джон Уик 4",
      type: "film",
      year: 2023,
      content:
        "Чтобы обрести свободу, киллер-изгой бросает вызов Правлению кланов. Самая зрелищная часть стильной экшен-саги",
      description:
        "Оставляя за собой горы трупов, Джон Уик продолжает скрываться от всевозможных наёмных убийц, и теперь охоту на него возглавляет молодой и честолюбивый член Правления по имени Маркиз. Два управляющих отелями «Континенталь» в Нью-Йорке и Осаке, решившие по старой дружбе помочь своенравному киллеру, уже жестоко за это поплатились, но внезапно Джон узнаёт способ выбраться из этой, казалось бы, безвыходной ситуации.",
      genre: "Триллер",
      genres: ["Триллер", "Боевик", "Криминал"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/john-wick-4/john-wick-4.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2023-03-13",
      country: "США",
      countries: ["США", "Германия"],
      originalTitle: "John Wick: Chapter 4",
      languages: ["Rus", "Eng"],
      quality: ["4k", "Full HD"],
      rating: "7,6",
      endYear: null,
      ageRestriction: "18+",
      weeklyTop: [
        {
          rank: 4,
          isInTop: true,
        },
      ],
    },
    {
      id: 10,
      title: "Дамбо",
      type: "film",
      year: 2019,
      content:
        "Были времена, когда с Тимом Бертоном ассоциировались лишь мрачные фильмы о фриках. Судя по всему, этот период давно подошел к концу. Сейчас режиссер выпустил новый фильм для Walt Disney Pictures, переосмыслив старую историю о слоненке с большими ушами, благодаря которым он может летать. Получился очень трогательный ремейк «Дамбо», в котором Бертон по привычке снял своих любимых актеров.",
      description:
        "Цирковой импресарио Макс Медичи назначает бывшую звезду цирка Холта Фэрриера и его детей Милли и Джо опекунами новорожденного слонёнка, чьи невероятно большие уши сразу становятся предметом для постоянных шуток и насмешек коллег Холта по цеху. Внезапно узнав, что Дамбо умеет летать, владелец цирка решает нажиться на необычных способностях слонёнка. К делу подключается энергичный предприниматель В.А.Вэндевер, который решает сделать из малыша Дамбо главную звезду своего нового грандиозного развлекательного предприятия «Сказочная страна».",
      genre: "Фэнтези",
      genres: ["Фэнтези", "Семейный", "Приключения"],
      isNewRelease: false,
      thumbnail: "/img/films-posters/dumbo/dumbo.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2019-03-28",
      country: "Великобритания",
      countries: ["Великобритания", "Канада", "Австралия", "США"],
      originalTitle: "Dumbo",
      languages: ["Rus", "Eng"],
      quality: ["Full HD"],
      rating: "6,9",
      endYear: null,
      ageRestriction: "6+",
      weeklyTop: [
        {
          rank: 5,
          isInTop: true,
        },
      ],
    },
    {
      id: 11,
      title: "Кот в сапогах",
      type: "film",
      year: 2011,
      content:
        "Кот-романтик мечтает найти волшебные бобы. Приключения обаятельного пройдохи задолго до встречи со Шрэком",
      description:
        "Кот в сапогах объединяется с умным Шалтай-Болтаем и сообразительной Кисой, чтобы украсть знаменитую Гусыню, несущую золотые яйца.",
      genre: "Мультфильм",
      genres: [
        "Мультфильм",
        "Фэнтези",
        "Мелодрама",
        "Комедия",
        "Детектив",
        "Приключения",
        "Семейный",
      ],
      isNewRelease: false,
      thumbnail: "/img/films-posters/puss-in-boots/puss-in-boots.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2011-10-23",
      country: "США",
      countries: ["США", "Индия"],
      originalTitle: "Puss in Boots",
      languages: ["Rus", "Eng"],
      quality: ["Full HD"],
      rating: "7,1",
      endYear: null,
      ageRestriction: "6+",
      weeklyTop: [
        {
          rank: 6,
          isInTop: true,
        },
      ],
    },
    {
      id: 12,
      title: "Рапунцель: Запутанная история",
      type: "film",
      year: 2010,
      content:
        "Обаятельный разбойник Флинн путешествует по жизни с легкостью, лишь потому, что он красив, болтлив и удачлив. И, казалось, фортуна всегда на его стороне, пока однажды он не выбирает высокую башню в густой чаще леса в качестве «спокойного» убежища. Флинн оказывается связанным по рукам и ногам юной красавицей по имени Рапунцель.",
      description:
        "Если вы думаете, что самое интересное в ней - это 21 метр волшебных золотистых волос, то вы заблуждаетесь! Запертая в башне и отчаянно ищущая приключений, Рапунцель решает использовать Флинна в качестве билета в большой мир. Сначала комичное похищение, затем невинный шантаж - и вот наши герои на воле. Вместе с главными героями в авантюрное путешествие отправятся бравый конь-ищейка Максимус, ручной хамелеон и шайка сумасбродных разбойников.",
      genre: "Мультфильм",
      genres: [
        "Мультфильм",
        "Фэнтези",
        "Мелодрама",
        "Комедия",
        "Детектив",
        "Приключения",
        "Семейный",
      ],
      isNewRelease: false,
      thumbnail: "/img/films-posters/tangled/tangled.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2010-11-24",
      country: "США",
      countries: ["США", "Япония"],
      originalTitle: "Tangled",
      languages: ["Rus", "Eng"],
      quality: ["Full HD"],
      rating: "8,0",
      endYear: null,
      ageRestriction: "6+",
      weeklyTop: [
        {
          rank: 7,
          isInTop: true,
        },
      ],
    },
    {
      id: 13,
      title: "Мумиёшки",
      type: "film",
      year: 2023,
      content:
        "Мультфильм переносит нас в большой секретный город, расположенный прямо под землей.",
      description:
        "Египетские мумии живут под землей в секретном городе, который является точным отражением Древнего Египта времен фараонов. Три мумии — принцесса, бывший возничий и его младший брат вместе со своим домашним крокодилом попадают в забавное приключение, в ходе которого они случайно попадают в современный Лондон, где попытаются найти древнее кольцо, украденное археологом, лордом Карнаби.",
      genre: "Мультфильм",
      genres: [
        "Мультфильм",
        "Мюзикл",
        "Фэнтези",
        "Драма",
        "Мелодрама",
        "Комедия",
        "Криминал",
        "Приключения",
        "Семейный",
      ],
      isNewRelease: false,
      thumbnail: "/img/films-posters/mummies/mummies.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2023-12-05",
      country: "США",
      countries: ["США", "Испания"],
      originalTitle: "Momias",
      languages: ["Rus", "Eng"],
      quality: ["4k", "Full HD"],
      rating: "6,6",
      endYear: null,
      ageRestriction: "6+",
      weeklyTop: [
        {
          rank: 8,
          isInTop: true,
        },
      ],
    },
    {
      id: 14,
      title: "Удача",
      type: "film",
      year: 2022,
      content:
        "Мультфильм переносит нас в большой секретный город, расположенный прямо под землей.",
      description:
        "Выпускница детского дома Сэм больше всего на свете хочет, чтобы её подружке, маленькой Хэйзел, улыбнулась удача, и девочка наконец обрела семью. Сама Сэм везучестью не отличается, но однажды она угощает бродячего кота, находит счастливую монетку, и с этого момента ей начинает сопутствовать удача буквально во всём. Решив отдать монетку Хэйзел, девушка случайно смывает её в унитаз, а когда снова сталкивается с тем котом, понимает, что это не обычное животное. Пытаясь выпросить у котейки новую монетку, Сэм начинает его преследовать и попадает в волшебную Страну Удачи.",
      genre: "Мультфильм",
      genres: ["Мультфильм", "Фэнтези", "Приключения", "Семейный", "Комедия"],
      isNewRelease: true,
      thumbnail: "/img/films-posters/luck/luck.png",
      details: {
        imgBg: null,
        imgTitleLogo: null,
      },
      premiere: "2022-08-05",
      country: "США",
      countries: ["США", "Испания"],
      originalTitle: "Luck",
      languages: ["Rus", "Eng"],
      quality: ["4k", "Full HD"],
      rating: "7,3",
      endYear: null,
      ageRestriction: "6+",
      weeklyTop: [
        {
          rank: 10,
          isInTop: true,
        },
      ],
    },
  ],
};
