import React from "react";

const Lounas = () => {
  return (
    <div
      name="lounas"
      className="w-full min-h-screen bg-white dark:bg-gradient-to-b from-gray-800 to-black text-gray-500 py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-500 font-bold inline border-b-4 border-grey-900">
            Lounas
          </p>
        </div>
        <p className="text-xl mt-5 text-justify">
          Lounas aika: 10.30 - 16.00 (Ma - Pe)
        </p>
        <p className="text-xl mt-5 text-justify">
          Hinta: 13,20€ (ePassi, edenred, smartum, käteinen ja korti maksu)
        </p>
        <p className="text-xl mt-5 text-justify">
          Alustava menu:
        </p>
        <p className="text-xl mt-5 text-justify">
          Maanantai: <br/>
          Butter chicken L, G  <br/>
          Beef handi L, G <br/>
          Malai kofta  L, G <br/>
          Veganinen täytetty munakoisoa L, G, V<br/>
          Matar aloo L, G, V
        </p>
        <p className="text-xl mt-5 text-justify">
          Tiistai: <br/>
          Butter chicken L, G  <br/>
          Beef handi L, G <br/>
          Malai kofta  L, G <br/>
          Veganinen täytetty munakoisoa L, G, V<br/>
          Matar aloo L, G, V
        </p>
        <p className="text-xl mt-5 text-justify">
          Keskivikko: <br/>
          Butter chicken L, G  <br/>
          Beef handi L, G <br/>
          Malai kofta  L, G <br/>
          Veganinen täytetty munakoisoa L, G, V<br/>
          Matar aloo L, G, V
        </p>
        <p className="text-xl mt-5 text-justify">
          Torstai: <br/>
          Chicken korma L, G  <br/>
          Chicken vindaalo L, G <br/>
          Butter dal L, G <br/>
          Vihannessekoitus L, G, V<br/>
          Matar aloo L, G, V
        </p>
        <p className="text-xl mt-5 text-justify">
          Perjantai: <br/>
          Butter chicken L, G  <br/>
          Chicken tikka masala L, G <br/>
          Baigan korma L, G <br/>
          Green beans jalfrezi L, G, V<br/>
          Rajma aloo L, G, V
        </p>
      </div>
    </div>
  );
};

export default Lounas;
