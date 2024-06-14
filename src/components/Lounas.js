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
          Lounas aika: Ma - Pe 11.00 - 15.30
        </p>
        <br />
        <p className="text-xl text-justify">Hinta: 12€</p>
        <br />
        <p className="text-xl text-justify mt-6">
          Valita yksi pääruoka (sis. naan, riisi, salaatti, raita)
        </p>
        <p className="text-xl mt-10 text-justify">
          1. CHILI CHICKEN <br />
          Erittäin tulista kanaa maustetussa kastikkeessa
          <br />
          <br />
          2. CHICKEN KORMA <br />
          Kanaa maustetusa jogurttikastikkeessa
          <br />
          <br />
          3. CHICKEN CURRY <br />
          Kanaa kerma-currykastikkeessa
          <br />
          <br />
          4. CHICKEN VINDALOO <br />
          Kanaa vindaloo-kastikkeessa
          <br />
          <br />
          5. BUTTER CHICKEN <br />
          Kanaa mausteisella tomaatti-voikastikkeella
          <br />
          <br />
          6. PALAK PANIR <br />
          Painattia ja tuorejuustoa maustekastikkeessa
          <br />
          <br />
          7. MUSHROOM JALFREZI <br />
          Tulisesti maustettuja herkkusieniä
          <br />
          <br />
          8. MALAI KOFTA <br />
          Tiristettyjä, soseutettuja vihannespuillia
          <br />
          <br />
          9. BEEF HANDI <br />
          Naudanlihaa maustetussa kermakastikkeessa tomaatin ja sipulin kera
          <br />
          <br />
          10. BEEF VINDALOO <br />
          Tulisesti maustettua naudanlihaa chilikastikkeessa
        </p>
        <br />
      </div>
    </div>
  );
};

export default Lounas;
