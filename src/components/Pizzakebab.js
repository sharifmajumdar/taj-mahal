import React from "react";

const Pizzakebab = () => {
  return (
    <div
      name="pizza & kebab"
      className="bg-white dark:bg-gradient-to-b from-black to-gray-800 w-full text-gray-800 dark:text-gray-300 min-h-screen py-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Pizza & Kebab
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Kebab Ruoat</h2>
            <p className="mt-2">
              RULLAKEBAB 10,50 € <br />
              Kebab rullattu leivän sisällä <br />
              <br />
              KEBAB RIISILLÄ 12,00 € <br />
              Kebabia ja riisiä <br />
              <br />
              KEBAB RANSKALAISILLA 12,00 € <br />
              Kebabia ja ranskalaisia <br />
              <br />
              KEBAB PITALLEIVÄLLÄ 12,00 € <br />
              Kebab pitalleivällä <br />
              <br />
              KEBAB ANNOS 11,50 € <br />
              Kebab annos <br />
              <br />
              ISKENDER KEBAB 13,50 € <br />
              Iskender kebab <br />
              <br />
              KANAKASTIKE KEBAB 13,50 € <br />
              Kanakastikkeella kebab <br />
              <br />
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Pizza</h2>
            <p className="mt-2">
              MARGHERITA 9,00 € <br />
              Tomaatti, juusto <br />
              <br />
              SALAMI 10,00 € <br />
              Salami, tomaatti, juusto <br />
              <br />
              PEPPERONI 10,00 € <br />
              Pepperoni, tomaatti, juusto <br />
              <br />
              VEGETARIANA 11,00 € <br />
              Kasviksia, tomaatti, juusto <br />
              <br />
              TONNIKALA 11,00 € <br />
              Tonnikala, tomaatti, juusto <br />
              <br />
              HAWAI 11,50 € <br />
              Kinkku, ananas, tomaatti, juusto <br />
              <br />
              QUATTRO STAGIONI 12,00 € <br />
              Kinkku, salami, tonnikala, tomaatti, juusto <br />
              <br />
              MEAT LOVER'S 12,50 € <br />
              Kinkku, salami, pepperoni, kebab, tomaatti, juusto <br />
              <br />
              KEBAB PIZZA 12,50 € <br />
              Kebab, tomaatti, juusto <br />
              <br />
              CHEF'S SPECIAL 13,00 € <br />
              Chef's erikoispizza <br />
              <br />
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Lisukkeet</h2>
            <p className="mt-2">
              RANSKALAISET 3,50 € <br />
              Paistetut perunat <br />
              <br />
              NUGGETIT 5,00 € <br />
              Kana nuggetit (5 kpl) <br />
              <br />
              SIPULIRENGAT 4,00 € <br />
              Paistetut sipulirenkaat <br />
              <br />
              MOZZARELLA TIKUT 5,50 € <br />
              Paistetut mozzarella tikut (5 kpl) <br />
              <br />
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Juomat</h2>
            <p className="mt-2">
              COCA-COLA / FANTA / 7UP / MUUMI <br />
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizzakebab;
