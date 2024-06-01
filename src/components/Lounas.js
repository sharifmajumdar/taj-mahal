import React from "react";

const Lounas = () => {
  return (
    <div
      name="lounas"
      className="w-full h-screen bg-white dark:bg-gradient-to-b from-gray-800 to-black text-gray-500"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-500 font-bold inline border-b-4 border-grey-900">
            Lounas
          </p>
        </div>
        <p className="text-xl mt-20 text-justify">
          Lounas aika: Ma - Pe 11.00 - 15.30
        </p>
        <br />
        <p className="text-xl text-justify">Hinta: 12€</p>
        <p className="text-xl text-justify mt-6">
          Valita yksi pääruoka (sis. naan, riisi, salaatti, raita)
        </p>
      </div>
    </div>
  );
};

export default Lounas;
