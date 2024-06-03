import React from "react";
/* import reactFirebase from "../assets/portfolio/reactFirebase.jpg";
import reactRouter from "../assets/portfolio/reactRouter.jpg";
import reactRESTAPI from "../assets/portfolio/reactRESTAPI.jpg";
import reactFakeAPI from "../assets/portfolio/reactFakeAPI.jpg";
import reactTailwind from "../assets/portfolio/reactTailwind.jpg";
import bootstrapLangingPage from "../assets/portfolio/bootstrapLangingPage.jpg"; */

const Alacarte = () => {
  /*   const portfolios = [
    {
      id: 1,
      src: reactFirebase,
      demo: "",
      code: "https://github.com/sharifmajumdar/react-authentication-bussi-lippu",
    },
    {
      id: 2,
      src: reactRouter,
      demo: "https://bejewelled-faloodeh-97d284.netlify.app/",
      code: "https://github.com/sharifmajumdar/react-router-sharifmajumdar",
    },
    {
      id: 3,
      src: reactRESTAPI,
      demo: "https://ephemeral-beijinho-765154.netlify.app/",
      code: "https://github.com/sharifmajumdar/react-rest-countries",
    },
    {
      id: 4,
      src: reactFakeAPI,
      demo: "https://beautiful-gumdrop-0b74c1.netlify.app/player",
      code: "https://github.com/sharifmajumdar/simple-react-sharifmajumdar",
    },
    {
      id: 5,
      src: reactTailwind,
      demo: "https://glittery-pothos-53aff6.netlify.app/",
      code: "https://github.com/sharifmajumdar/portfolio-sharifmajumdar",
    },
    {
      id: 6,
      src: bootstrapLangingPage,
      demo: "https://sharifmajumdar.github.io/responsive-landingpage-bootstrap/#",
      code: "https://github.com/sharifmajumdar/responsive-landingpage-bootstrap",
    },
  ];

  const handleDemo = (demo) => {
    window.open(demo);
  };

  const handleCode = (code) => {
    window.open(code);
  }; */
  return (
    <div
      name="à la carte"
      className="bg-white dark:bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl text-gray-500 font-bold inline border-b-4 border-gray-500">
            À la Carte
          </p>
          <p className="py-6 text-gray-500">Herkullisia intialaisia ​​ruokia</p>
          <p className="py-6 text-gray-500">
            <b>ALKUPALAT</b> <br />
            SAMOSA 5,20 L <br />
            Jauheliha tai kasvispasteija (2 kpl) <br />
            <br />
            PAKURA 5,50 L <br />
            Papujauheella kuorrutettua ja tiristettyä kanaa <br />
            <br />
            PUREE(PRAWN/ALOO/DAL) 5,20 L <br />
            Paistettua prawn, aloo tai dal leivän päällä (2 kpl) <br />
            <br />
            PAPADAM 2,50 L, G <br />
            Papadam leipä (2 kpl) <br />
            <br />
            SINGARA 5,20 L <br />
            Paistettua erilaisia vihanneksia leivän sisällä (2 kpl) <br />
            <br />
            KEBAB(CHICKEN/BEEF/TUNA) 6,50 L <br />
            Paistettua tikka kanaa, naudan liha tai tuna (2 kpl) <br />
            <br />
            BEGUNI 5,50 L <br />
            Papujauheella paistettu monakoiso (4 kpl) <br />
            <br />
            VEGETABLE ROLL 5,20 L <br />
            Paistettua erilaisia vihanneksia leipä roll (4 kpl) <br />
            <br />
          </p>
          <p className="py-6 text-gray-500">
            <b>PÄÄRUOKIA (Sis. riisin)</b>
            <br />
            <b>KANA RUOAT</b>
            <br />
            <br />
            CHICKEN CURRY 16,20 L, G <br />
            Kanaa kerma-currykastikkeessa <br />
            <br />
            BUTTER CHICKEN 16,20 L, G <br />
            Kanaa mausteisessa voikastikkeessa <br />
            <br />
            CHICKEN KORMA 16,20 L, G <br />
            Kanaa maustetussa jogurttikastikkeessa <br />
            <br />
            CHICKEN TIKKA MASALA 17,20 L, G <br />
            Marinoitua ja hiillostettua kanaa masala-kastikkeessa <br />
            <br />
            CHICKEN TANDOORI 17,20 L, G <br />
            Tandoori-uunissa paistettua kanaa <br />
            <br />
            CHILI CHICKEN 16,20 L, G <br />
            Erittäin tulista kanaa maustetussa kastikkeessa <br />
            <br />
            CHICKEN VINDALOO 16,20 L, G <br />
            Tulisesti maustettua kanaa vindaloo-kastikkeessa <br />
            <br />
            <b>NAUTA ja LAMMAS RUOAT</b>
            <br />
            <br />
            BUTTER BEEF 16,20 L, G <br />
            Naudanlihaa voikastikkeessa <br />
            <br />
            BEEF HANDI 16,20 L, G <br />
            Naudanlihaa maustetussa kermakastikkeessa <br />
            <br />
            BEEF VINDALOO 16,20 L, G <br />
            Tulisesti maustettua naudanlihaa chilikastikkeessa <br />
            <br />
            MUTTON MINT MASALA 17,50 L, G <br />
            Lammasta mausteisesa minttukastikkeessa <br />
            <br />
            MUTTON KORMA 17,50 L, G <br />
            Lammasta jogurtti-kermakastikkeessa <br />
            <br />
            MUTTON TIKKA MASALA 17,50 L, G <br />
            Marinoitua lammasta masala-kastikkeessa <br />
            <br />
            <b>KALA ja KATKARAPU RUOAT</b> <br />
            <br />
            FISH CURRY 17,20 L, G <br />
            Lohta kookos-currykastikkeessa <br />
            <br />
            BUTTER FISH 17,20 L, G <br />
            Lohta voikastikkeessa <br />
            <br />
            PRAWN CURRY 17,90 L, G <br />
            Korallikatkarapuja kookosmaitokastikkeessa <br />
            <br />
            GARLIC PRAWN 17,90 L, G <br />
            Korallikatkarapuja valkosipulikastikkeessa <br />
            <br />
            <b>KASVIS RUOKIA</b> <br />
            <br />
            PALAK PANIR 15,00 L, G <br />
            Pinattia ja tuorejuustoa maustekastikkeessa <br />
            <br />
            MUSHROOM JALFREZI 15,00 L, G <br />
            Tulisesti herkkusieniä paprika-sipulimuhennoksen kerä <br />
            MALAI KOFTA 15,00 L <br />
            Tiristettyjä ja soseutettuja vihannespullia kerma-currykastikkeessa{" "}
            <br />
            <br />
            BAIGAN KORMA 15,00 L, G <br />
            Paistettua munakoisoa maustetussa jogurttikastikkeessa <br />
            <br />
            VIHANNESSEKOITUS 1 5,00 L, G <br />
            Erilaisia vihanneksia maustekastikkeessa <br />
            <br />
            BUTTER DAL 14,00 L, G <br />
            Yrteillä linssejä voi-sipulikastikkeessa <br />
            <br />
            <b>ERIKOIS ANNOKSET</b> <br />
            <br />
            MEAT THALI 22,50 L, G <br />
            Kolme liharuokaa, naan ja raita <br />
            <br />
            VEGETABLE THALI 20,50 L, G <br />
            Kolme kasvisruoka, naan ja raita <br />
            <br />
            TAJ MAHAL CHEF SPECIAL 25,50 L, G <br />
            Uunissa kypsennettyä kanaa, tandoorilammasta, katkarapuja, sipulin
            ja paprikan kera naan ja raitha <br />
            <br />
            <b>RIISIA ja LEIPIÄ</b> <br />
            <br />
            TAVALLINEN RIISI 4,00 <br />
            Basmati-riisiä <br /> <br />
            LEMON RIISI 4,50 <br />
            Basmati-riisiä ja lemon <br />
            <br />
            SIENI RIISI 5,00 <br />
            Basmati-riisiä ja sieniä <br />
            <br />
            PAISTETTU RIISI 6,50 <br />
            Basmati-riisiä, herneitä ja kanamuna <br />
            <br />
            NAAN 2,50 <br />
            Paistettua vehnäleipää <br />
            <br />
            GARLIC NAAN 3,00 <br />
            Paistettua valkosipulivehnäleipää <br />
            <br />
            JUUSTO NAAN 3,00 <br />
            Paistettua juustovehnäleipää <br />
            <br />
            PESHWARI NAAN 3,50 <br />
            Paistettua pähkinä ja rusina vehnäleipää <br />
            <br />
            <b>JÄKIRUOKIA ja JUOMIA </b>
            <br />
            <br />
            RAITA 3,00 L, G <br />
            Kevysesti maustetusta jogurtista <br />
            <br />
            CHUTNEY 2,00 L, G <br />
            Makea mango-chutney <br />
            <br />
            JÄÄTELÖ 4,50 <br />
            Erilaisia jäätelövaihtoehtoja kastikkeella <br />
            <br />
            PÄHKINÄ LASSI 4,0 <br />
            Jogurtti, pähkinä, sokeri, suola <br />
            <br />
            MANGOLASSI 4,00 <br />
            Intialainen jogurttijuoma, sisältää hedelmälihaa <br />
            <br />
            LEMONADE 3,50 <br />
            <br />
            Lime, sokeri, suola <br />
            <br />
            COCA-COLA / FANTA / 7up / MUUMI <br />
            (0,33 lm / 0,5 ml / 1.5 l) 2,50 / 3,50 / 4,5 <br />
            <br />
            MEHU (APPLESIINI / TRIP) 2,50 <br />
            <br />
            MAITO 3,00 L, G <br />
            <br />
            TEE / KAHVI 2,00 <br />
            <br />
            SOODAVESI / VESI 2,50 / 0,50 <br />
            <br />
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemo(demo)}
                  className="w-1/2 px-6 py-3 m-4 text-gray-500 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCode(code)}
                  className="w-1/2 px-6 py-3 m-4 text-gray-500  duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Alacarte;
