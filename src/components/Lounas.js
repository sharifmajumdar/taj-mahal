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
          Hinta: 13,50€ (ePassi, edenred, smartum, käteinen ja korti maksu)
        </p>
        <p className="text-xl mt-5 text-justify">
          Alustava menu: <br/>
          (Sis. Sis. Salaatti, Raita(L), Alkupala, Basmati riisi, Kasvis riisi, Naan leipä (L), Papadam (L, G), Ranskalaiset, Lounas pizza, Tulinen kastike (L, G, Vg), Mehu, Mango lassi (L), Keksi, Karkki, Kahvi ja Tee)
        </p>
        <p className="text-xl mt-5 text-justify">
          Maanantai: <br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Beef handi L, G <br/>
          (Naudanlihaa maustetussa kermakastikkeessa)<br/>
          Malai kofta  L, G <br/>
          (Tiristettyjä ja soseutettuja vihannespullia kerma-currykastikkeessa)<br/>
          Veganinen täytetty vihannes L, G, Vg<br/>
          (erilaisia ​​vihanneksia cussy-kastikkeella)<br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Tiistai: <br/>
          Chicken curry L, G  <br/>
          (Kanaa kerma-currykastikkeessa)<br/>
          Chicken tikka masala L, G <br/>
          (Marinoitua ja hiillostettua kanaa masala-kastikkeessa)<br/>
          Mushroom jalfrezi  L, G, Vg <br/>
          (Tulisesti herkkusieniä paprika-sipulimuhennoksen kerä)<br/>
          Veganinen täytetty kesäkurpitsa L, G, Vg<br/>
          (Kesäkurpitsa- ja kikherne maustekastikkeessa)<br/>
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
          Veganinen täytetty porkana L, G, Vg<br/>
          (Porkana-ja erilaisia vihannes maustekastikkeessa) <br/>
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
          Vihannessekoitus L, G, Vg<br/>
          (erilaisia vihannes maustekastikkeessa)<br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Perjantai: <br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Mutton dal L, G <br/>
          (Lammasta linssejä curry-sipulikastikkeessa)<br/>
          Panir malai kofta L, G <br/>
          (Uppopaistettua vihannespullaa tuoreella juustolla kerma-currykastikkeessa)<br/>
          Green beans jalfrezi L, G, Vg<br/>
          (Vihreää papua, perunaa ja tomaattia maustekastikkeessa) <br/>
{/*           Biryani L, G <br/>
          (Mausteista, hitaasti kypsytettyä riisiä kanan kanssa)<br/> */}
        </p>
      </div>
    </div>
  );
};

export default Lounas;
