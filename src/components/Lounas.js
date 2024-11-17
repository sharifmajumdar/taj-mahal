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
          Lounas aika: 11.00 - 15.00 (Ma - Pe)
        </p>
        <p className="text-xl mt-5 text-justify">
          Hinta: 13,50€ (ePassi, edenred, smartum, käteinen ja korti maksu)
        </p>
        <p className="text-xl mt-5 text-justify">
          Alustava menu: <br/>
          (Sis. mehu, salaatti bar, riisi, kasvis riisi, leipä, papadam, tulinen kastike, kahvi, tee)
        </p>
        <p className="text-xl mt-5 text-justify">
          Maanantai: <br/>
          Alkupala L, G, V  <br/>
          (Erilaisia alkuruokia joka päivä)<br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Beef handi L, G <br/>
          (Naudanlihaa maustetussa kermakastikkeessa)<br/>
          Malai kofta  L, G <br/>
          (Tiristettyjä ja soseutettuja vihannespullia kerma-currykastikkeessa)<br/>
          Veganinen täytetty vihannes L, G, V<br/>
          (erilaisia ​​vihanneksia cussy-kastikkeella)<br/>
          Jälkiruoka L <br/>
          (Erilaisia jäkiruokia joka päivä)<br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Tiistai: <br/>
          Chicken curry L, G  <br/>
          (Kanaa kerma-currykastikkeessa)<br/>
          Chicken tikka masala L, G <br/>
          (Marinoitua ja hiillostettua kanaa masala-kastikkeessa)<br/>
          Mushroom jalfrezi  L, G, V <br/>
          (Tulisesti herkkusieniä paprika-sipulimuhennoksen kerä)<br/>
          Veganinen täytetty kesäkurpitsa L, G, V<br/>
          (Kesäkurpitsa- ja kikherne maustekastikkeessa)<br/>
          Butter dal L, G <br/>
          (Yrteillä linssejä voi-sipulikastikkeessa)<br/>
{/*           Rajma aloo L, G, V <br/>
          (Rajmaa- ja perunaa curry-maustekastikkeessa)<br/> */}
        </p>
        <p className="text-xl mt-5 text-justify">
          Keskivikko: <br/>
          Garlic chicken L, G  <br/>
          (Kanaa valkosipuli-currykastikkeessa) <br/>
          Butter fish L, G <br/>
          (Lohta voikastikkeessa) <br/>
          Palak paneer L, G <br/>
          (Pinattia ja tuorejuustoa maustekastikkeessa) <br/>
          Veganinen täytetty porkana L, G, V<br/>
          (Porkana-ja erilaisia vihannes maustekastikkeessa) <br/>
          Aloo gobi  L, G, V <br/>
          (Perunaa- ja kukkakalia maustekastikkeessa)
        </p>
        <p className="text-xl mt-5 text-justify">
          Torstai: <br/>
          Chicken korma L, G  <br/>
          (Kanaa maustetussa jogurttikastikkeessa) <br/>
          Chicken vindaloo L, G <br/>
          (Tulisesti maustettua kanaa vindaloo-kastikkeessa)<br/>
          Butter dal L, G <br/>
          (Yrteillä linssejä voi-sipulikastikkeessa)<br/>
          Vihannessekoitus L, G, V<br/>
          (erilaisia vihannes maustekastikkeessa)<br/>
          Baigan aloo L, G, V <br/>
          (Perunaa- ja munakoisoa maustekastikkeessa)
        </p>
        <p className="text-xl mt-5 text-justify">
          Perjantai: <br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Mutton kofta L, G <br/>
          (Tiristettyjä ja soseutettuja lammaspullia kerma-currykastikkeessa)<br/>
          Baigan korma L, G <br/>
          (Paistettua munakoisoa maustetussa jogurttikastikkeessa)<br/>
          Green beans jalfrezi L, G, V<br/>
          (Vihreää pavua, perunaa ja tomaattia maustekastikkeessa) <br/>
          Kurpitsa dal L, G<br/>
          (Kurpitsaa, linssejä, tomattia maustekastikkeessa)<br/>
          Biryani L, G <br/>
          (Mausteista, hitaasti kypsytettyä riisiä kanan kanssa)<br/>
        </p>
      </div>
    </div>
  );
};

export default Lounas;
