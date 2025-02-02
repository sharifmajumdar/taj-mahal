import React from "react";

const Alacarte = () => {
  return (
    <div
      name="à la carte"
      className="bg-white dark:bg-gradient-to-b from-black to-gray-800 w-full text-gray-800 dark:text-gray-300 min-h-screen py-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            À la Carte
          </p>
          <p className="py-6">Herkullisia intialaisia ​​ruokia ja pizzoja</p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Alkupalat</h2>
            <p className="mt-2">
              SAMOSA L 5,20  € <br />
              Jauheliha tai kasvispasteija (2 kpl) <br />
              <br />
              PAKURA L 5,50 € <br />
              Papujauheella kuorrutettua ja tiristettyä kanaa <br />
              <br />
              PUREE (PRAWN/ALOO/DAL) L 5,20 € <br />
              Paistettua prawn, aloo tai dal leivän päällä (2 kpl) <br />
              <br />
              PAPADAM L, G 2,50 € <br />
              Papadam leipä (2 kpl) <br />
              <br />
              SINGARA L 5,20 € <br />
              Paistettua erilaisia vihanneksia leivän sisällä (2 kpl) <br />
              <br />
              KEBAB (CHICKEN/BEEF/TUNA) L 6,50 € <br />
              Paistettua tikka kanaa, naudan liha tai tuna (2 kpl) <br />
              <br />
              BEGUNI L 5,50 € <br />
              Papujauheella paistettu monakoiso (4 kpl) <br />
              <br />
              VEGETABLE ROLL L 5,20 € <br />
              Paistettua erilaisia vihanneksia leipä roll (4 kpl) <br />
              <br />
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Pääruokia (Sis. riisin)</h2>

            <h3 className="mt-4 text-xl font-semibold">Kana Ruoat</h3>
            <p className="mt-2">
              CHICKEN CURRY L, G 16,20 € <br />
              Kanaa kerma-currykastikkeessa <br />
              <br />
              BUTTER CHICKEN L, G 16,20 € <br />
              Kanaa mausteisessa voikastikkeessa <br />
              <br />
              CHICKEN KORMA L, G 16,20 € <br />
              Kanaa maustetussa jogurttikastikkeessa <br />
              <br />
              CHICKEN TIKKA MASALA L, G 17,20 € <br />
              Marinoitua kanaa masala-kastikkeessa <br />
              <br />
              CHICKEN TANDOORI L, G 17,20 € <br />
              Tandoori-uunissa paistettua kanaa <br />
              <br />
              CHILI CHICKEN L, G 16,20 € <br />
              Erittäin tulista kanaa maustetussa kastikkeessa <br />
              <br />
              CHICKEN VINDALOO L, G 16,20 € <br />
              Tulisesti maustettua kanaa vindaloo-kastikkeessa <br />
              <br />
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              Nauta ja Lammas Ruoat
            </h3>
            <p className="mt-2">
              BUTTER BEEF 16,20 € <br />
              Naudanlihaa voikastikkeessa <br />
              <br />
              BEEF HANDI 16,20 € <br />
              Naudanlihaa maustetussa kermakastikkeessa <br />
              <br />
              BEEF VINDALOO 16,20 € <br />
              Tulisesti maustettua naudanlihaa chilikastikkeessa <br />
              <br />
              MUTTON MINT MASALA 17,50 € <br />
              Lammasta mausteisesa minttukastikkeessa <br />
              <br />
              MUTTON KORMA 17,50 € <br />
              Lammasta jogurtti-kermakastikkeessa <br />
              <br />
              MUTTON TIKKA MASALA 17,50 € <br />
              Marinoitua lammasta masala-kastikkeessa <br />
              <br />
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              Kala ja Katkarapu Ruoat
            </h3>
            <p className="mt-2">
              FISH CURRY 17,20 € <br />
              Lohta kookos-currykastikkeessa <br />
              <br />
              BUTTER FISH 17,20 € <br />
              Lohta voikastikkeessa <br />
              <br />
              PRAWN CURRY 17,90 € <br />
              Korallikatkarapuja kookosmaitokastikkeessa <br />
              <br />
              GARLIC PRAWN 17,90 € <br />
              Korallikatkarapuja valkosipulikastikkeessa <br />
              <br />
            </p>

            <h3 className="mt-4 text-xl font-semibold">Kasvis Ruoat</h3>
            <p className="mt-2">
              PALAK PANIR 15,00 € <br />
              Pinattia ja tuorejuustoa maustekastikkeessa <br />
              <br />
              MUSHROOM JALFREZI 15,00 € <br />
              Tulisesti herkkusieniä paprika-sipulimuhennoksen kerä <br />
              <br />
              MALAI KOFTA 15,00 € <br />
              Tiristettyjä ja soseutettuja vihannespullia
              kerma-currykastikkeessa <br />
              <br />
              BAIGAN KORMA 15,00 € <br />
              Paistettua munakoisoa maustetussa jogurttikastikkeessa <br />
              <br />
              VIHANNESSEKOITUS 15,00 € <br />
              Erilaisia vihanneksia maustekastikkeessa <br />
              <br />
              BUTTER DAL 14,00 € <br />
              Yrteillä linssejä voi-sipulikastikkeessa <br />
              <br />
            </p>

            <h3 className="mt-4 text-xl font-semibold">Erikois Annokset</h3>
            <p className="mt-2">
              MEAT THALI 22,50 € <br />
              Kolme liharuokaa, naan ja raita <br />
              <br />
              VEGETABLE THALI 20,50 € <br />
              Kolme kasvisruokaa, naan ja raita <br />
              <br />
              TAJ MAHAL CHEF SPECIAL 25,50 € <br />
              Uunissa kypsennettyä kanaa, tandoorilammasta, katkarapuja, sipulin
              ja paprikan kera naan ja raitha <br />
              <br />
            </p>

            <h3 className="mt-4 text-xl font-semibold">Riisiä ja Leipiä</h3>
            <p className="mt-2">
              TAVALLINEN RIISI 4,00 € <br />
              Basmati-riisiä <br />
              <br />
              LEMON RIISI 4,50 € <br />
              Basmati-riisiä ja sitruunaa <br />
              <br />
              SIENI RIISI 5,00 € <br />
              Basmati-riisiä ja sieniä <br />
              <br />
              PAISTETTU RIISI 6,50 € <br />
              Basmati-riisiä, herneitä ja kanamuna <br />
              <br />
              NAAN 2,50 € <br />
              Paistettua vehnäleipää <br />
              <br />
              GARLIC NAAN 3,00 € <br />
              Paistettua valkosipulivehnäleipää <br />
              <br />
              JUUSTO NAAN 3,00 € <br />
              Paistettua juustovehnäleipää <br />
              <br />
              PESHWARI NAAN 3,50 € <br />
              Paistettua pähkinä- ja rusinavehnäleipää <br />
              <br />
            </p>

            <h3 className="mt-4 text-xl font-semibold">Jälkiruoat ja Juomat</h3>
            <p className="mt-2">
              RAITA 3,00 € <br />
              Kevyesti maustetusta jogurtista <br />
              <br />
              CHUTNEY 2,00 € <br />
              Makea mango-chutney <br />
              <br />
              JÄÄTELÖ 4,50 € <br />
              Erilaisia jäätelövaihtoehtoja kastikkeella <br />
              <br />
              PÄHKINÄ LASSI 4,00 € <br />
              Jogurtti, pähkinä, sokeri, suola <br />
              <br />
              MANGOLASSI 4,00 € <br />
              Intialainen jogurttijuoma, sisältää hedelmälihaa <br />
              <br />
              LEMONADE 3,50 € <br />
              Lime, sokeri, suola <br />
              <br />
              COCA-COLA / FANTA / 7up / MUUMI <br />
              (0,33 l / 0,5 l / 1.5 l) 2,50 € / 3,50 € / 4,50 € <br />
              <br />
              MEHU (APPELSIINI / TRIP) 2,50 € <br />
              <br />
              MAITO 3,00 € <br />
              <br />
              TEE / KAHVI 2,00 € <br />
              <br />
              SOODAVESI / VESI 2,50 € / 0,50 € <br />
              <br />
              <br/>
          (L = Laktositon, G = Glutiniton, Vg = Vegaaninen)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alacarte;
