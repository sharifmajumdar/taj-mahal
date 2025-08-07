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
          Lounas aika: 11.00 - 16.00 (Ma - Pe)
        </p>
        <p className="text-xl mt-5 text-justify">
          Hinta: 13,50€ (ePassi, edenred, smartum, käteinen ja korti maksu) ja Lapsi: 1€/ikävuosi
        </p>
        <p className="text-xl mt-5 text-justify">
          Alustava menu: <br/>
          (Sis. Sis. Salaatti, Raita (L, G), Riisi (L, G), Naan leipä (L), Papadam (L, G), Sormisyötävät, Mehu, Mango lassi (L, G), Kahvi ja Tee)
        </p>
        <p className="text-xl mt-5 text-justify">
          Maanantai: <br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Palak chicken L, G <br/>
          (Kanapaloja pinaatti-valkosipuli-kermakastikkeessa)<br/>
{/*           Beef handi L, G <br/>
          (Naudanlihaa maustetussa kermakastikkeessa)<br/> */}
          Malai kofta  L, G <br/>
          (Tiristettyjä ja soseutettuja vihannespullia kerma-currykastikkeessa)<br/>
          Veganinen täytetty munakoiso L, G, Veg<br/>
          (Munakoiso kikherneillä sipuli-maustekastikkeessa)<br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Tiistai: <br/>
          Chicken curry L, G  <br/>
          (Kanaa kerma-currykastikkeessa)<br/>
          Chicken tikka masala L, G <br/>
          (Marinoitua kanaa masala-kastikkeessa)<br/>
          Mushroom jalfrezi  L, G, Veg <br/>
          (Tulisesti herkkusieniä paprika-sipulimuhennoksen kerä)<br/>
          Veganinen täytetty kesäkurpitsa L, G, Veg<br/>
          (kesäkurpitsa rodalinssilla sipuli-maustekastikkeessa)<br/>
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
          Veganinen täytetty porkana L, G, Veg<br/>
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
          Alo gobi L, G, Veg<br/>
          (Perunaa ja kukkakalia maustekastikkeessa)<br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Perjantai: <br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Beef dal L, G <br/>
          (Nautaa linssejä curry-sipulikastikkeessa)<br/>
          Malai kofta L, G <br/>
          (Uppopaistettua vihannespullaa kerma-currykastikkeessa)<br/>
          Green beans jalfrezi L, G, Veg<br/>
          (Vihreää papua, paprikaa ja tomaattia maustekastikkeessa) <br/>
          Biryani L, G <br/>
          (Mausteista, hitaasti kypsytettyä riisiä kanan kanssa)<br/>
        </p> <br/><br/>
        <p>Huom! L = Laktositon G = Glutiniton Veg = Vegaaninen</p>
        <p>Jos sinulla on alergiaongelma, kysy myyjältä*</p>
      </div>
    </div>
  );
};

export default Lounas;
