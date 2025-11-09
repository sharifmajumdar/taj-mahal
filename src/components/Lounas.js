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
          (Sis. salaattipöytä, mehu, riisi, naanleipä (L), pizza (L), sormisyötävät, sekä jälkiruoka.)
        </p>
{/*         <p>
        <div data-lounastaja-widget-id="GSQuYapj5bOav0OQjYWo" data-api-key="91c157a5-52d7-41ab-9773-ce4de03a91e6">
        </div>
        <script defer src="https://lounastaja.app/widget/base.min.js">
        </script>
        </p> */}

        <p className="text-xl mt-5 text-justify">
          Maanantai: <br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Palak chicken L, G <br/>
          (Kanapaloja pinaatti-valkosipuli-kermakastikkeessa)<br/>
          Malai kofta  L, G <br/>
          (Tiristettyjä ja soseutettuja vihannespullia kerma-currykastikkeessa)<br/>
          Veganinen täytetty munakoiso L, G, V<br/>
          (Munakoiso kikherneillä sipuli-maustekastikkeessa)<br/>
          Dal tarka L, G, V<br/>
          (Valkosipuli-tomaatin kera kypsennettyjä linssejä)<br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Tiistai: <br/>
          Chicken curry L, G  <br/>
          (Kanaa kerma-currykastikkeessa)<br/>
          Chicken tikka masala L, G <br/>
          (Marinoitua kanaa masala-kastikkeessa)<br/>
          Mushroom jalfrezi  L, G, V <br/>
          (Tulisesti herkkusieniä paprika-sipulimuhennoksen kerä)<br/>
          Veganinen täytetty kesäkurpitsa L, G, V<br/>
          (kesäkurpitsa rodalinssilla sipuli-maustekastikkeessa)<br/>
          Baigan korma L, G<br/>
          (Paistettua munakoisoa maustetussa jogurttikastikkeessa)<br/>
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
          (Porkkana herneillä sipuli-maustekastikkeessa) <br/>
          Vihannessekoitus  L, G, V<br/>
          (Erilaisia vihanneksia maustekastikkeessa) <br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Torstai: <br/>
          Chicken korma L, G  <br/>
          (Kanaa maustetussa jogurttikastikkeessa) <br/>
          Chicken vindaloo L, G <br/>
          (Tulisesti maustettua kanaa vindaloo-kastikkeessa)<br/>
          Butter dal L, G <br/>
          (Yrteillä linssejä voi-sipulikastikkeessa)<br/>
          Alo gobi L, G, V<br/>
          (Perunaa ja kukkakalia maustekastikkeessa)<br/>
          Tofu curry L, G, V<br/>
          (Tofua curry-kastikkeessa)<br/>
        </p>
        <p className="text-xl mt-5 text-justify">
          Perjantai: <br/>
          Butter chicken L, G  <br/>
          (Kanaa mausteisessa voikastikkeessa)<br/>
          Beef dal L, G <br/>
          (Nautaa linssejä curry-sipulikastikkeessa)<br/>
          Malai kofta L, G <br/>
          (Uppopaistettua vihannespullaa kerma-currykastikkeessa)<br/>
          Green beans jalfrezi L, G, V<br/>
          (Vihreää papua, paprikaa ja tomaattia maustekastikkeessa) <br/>
          Chana masala L, G, V<br/>
          (Kikherneitä maustetussa masalakastikkeessa) <br/>
        </p> <br/><br/>
        <p>Huom! L = Laktositon G = Glutiniton V = Vegaaninen</p>
        <p>Jos sinulla on alergiaongelma, kysy myyjältä*</p>
      </div>
    </div>
  );
};

export default Lounas;
