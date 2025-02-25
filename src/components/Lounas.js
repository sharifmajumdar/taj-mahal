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
          Hinta: 13,50€ (ePassi, edenred, smartum, käteinen ja korti maksu) ja Lapsi: 1€/ikävuosi
        </p>
        <p className="text-xl mt-5 text-justify">
          Alustava menu: <br/>
          (Sis. Sis. Salaatti, Raita(L, G), Riisi, Naan leipä (L), Papadam (L, G), Ranskalaiset, Lounas pizza, Tulinen kastike (L, G, M), Mehu, Mango lassi (L, G), Keksi, Karkki, Kahvi ja Tee)
        </p>
        <p className="text-xl mt-5 text-justify">
          Maanantai: <br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Beef handi L, G <br/>
          (Naudanlihaa maustetussa kermakastikkeessa)<br/>
          Malai kofta  L, G <br/>
          (Tiristettyjä ja soseutettuja vihannespullia kerma-currykastikkeessa)<br/>
          Veganinen täytetty munakoiso L, G, M<br/>
          (Munakoiso kikherneillä sipuli-maustekastikkeessa)<br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Tiistai: <br/>
          Chicken curry L, G  <br/>
          (Kanaa kerma-currykastikkeessa)<br/>
          Chicken tikka masala L, G <br/>
          (Marinoitua kanaa masala-kastikkeessa)<br/>
          Mushroom jalfrezi  L, G, M <br/>
          (Tulisesti herkkusieniä paprika-sipulimuhennoksen kerä)<br/>
          Veganinen täytetty vihannessekoitus L, G, Veg<br/>
          (vihannessekoitus rodalinssilla sipuli-maustekastikkeessa)<br/>
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
          Veganinen täytetty porkana L, G, M<br/>
          (Porkkana herneillä sipuli-maustekastikkeessa) <br/>
{/*           Aloo gobi  L, G, V <br/>
          (Perunaa- ja kukkakalia maustekastikkeessa)<br/> */}
        </p>
        <p className="text-xl mt-5 text-justify">
          Torstai: <br/>
          Chicken korma L, G  <br/>
          (Kanaa maustetussa jogurttikastikkeessa) <br/>
          Chicken vindaloo L, G <br/>
          (Tulisesti maustettua kanaa vindaloo-kastikkeessa)<br/>
          Butter dal L, G <br/>
          (Yrteillä linssejä voi-sipulikastikkeessa)<br/>
          Alo gobi L, G, M<br/>
          (Perunaa ja kukkakalia maustekastikkeessa)<br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Perjantai: <br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Mutton dal L, G <br/>
          (Lammasta linssejä curry-sipulikastikkeessa)<br/>
          Panir malai kofta L, G <br/>
          (Uppopaistettua vihannespullaa tuoreella juustolla kerma-currykastikkeessa)<br/>
          Green beans jalfrezi L, G, M<br/>
          (Vihreää papua, paprikaa ja tomaattia maustekastikkeessa) <br/>
{/*           Biryani L, G <br/>
          (Mausteista, hitaasti kypsytettyä riisiä kanan kanssa)<br/> */}
        </p>
        <p>Huom! L = Laktositon G = Glutiniton M = Maidoton Veg = Vegaaninen</p>
      </div>
    </div>
  );
};

export default Lounas;
