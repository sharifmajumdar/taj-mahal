/* import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/reactImage.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png"; */

const Pizzakebab = () => {
  /* const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: node,
      title: "Node",
      style: "shadow-green-300",
    },
    {
      id: 8,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-900",
    },
  ]; */
  return (
    <div
      name="pizza & kebab"
      className="bg-white dark:bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl text-gray-500 font-bold inline border-b-4 border-gray-500 p-2">
            Pizza & Kebab
          </p>
          <p className="py-6 text-gray-500">Erilaisia pizzat ja kebabit</p>
          <br />
          <br />
          <p className="py-6 text-gray-500">
            <b>PIZZAT</b>
            Maanantai 9,00 <br />
            Herkkusieni, paprika, tomaatti, oliivi, sipuli <br />
            <br />
            Maanantain Special 10,00 <br />
            Herkkusieni, tomaatti, paprika, mizzarella, basilika, oiliiviöljy{" "}
            <br />
            <br />
            Tiistai 9,00 <br />
            Pepperoni, ananas, jalapeno, chilikastike <br />
            <br />
            Tiistain Special 10,00 <br />
            Pepperoni, oliivi, sipuli, tomatti, feta, oregano <br />
            <br />
            Keskiviikko 9,00 <br />
            Kana, ananas, BBQ kastike, aura <br />
            <br />
            Keskiviikon Special 10,00 <br />
            Kana kebab, BBQ kastike, sipuli, mozzarella, basilika <br />
            <br />
            Torstai 9,00 <br />
            Salami, jauheliha, aura, rucola <br />
            <br />
            Torstain Special 10,00 <br />
            Salami, mozzarella, paprika, herkkusieni, basilika <br />
            <br />
            Perjantai 9,50 <br />
            Katkarapu, tonnikala, valkosipuli, tuplajuusto <br />
            <br />
            Pejantain Special 10,50 <br />
            Katkarapu, kapris, sipuli, valkosipuli, basilika, sitruuna <br />
            <br />
            Lauantai 9,50 <br />
            Jauheliha, pepperoni, herkkusieni, tuplajuusto <br />
            <br />
            Lauantain Special 11,00 <br />
            Naudanliha, pizzasuikale, pepperoni, mozzarella, punapippuri <br />
            <br />
            Sunnuntai 9,50 <br />
            Pizzasuikale, mozzarella, tomaatti, basilika <br />
            <br />
            Sunnuntai Special 11,00 <br />
            Pizzasuikale, salami, sipuli, mozzarella, oliivi, rucola, hunaja{" "}
            <br />
            <br />
            Taj Mahal 10,00 <br />
            Tonnikala, Katkarapu, paprika, herkkusieni, jalapeno, oregano <br />
            <br />
            Taj Mahalin Special 12,00 <br />
            Kebab, ananas, paprika, herkkusieni, jalapeno, sipuli, oregano{" "}
            <br />
            <br />
            CALZONE(2/3/4/5 täyteellä) 8,50/9,00/9,50/10,00 <br />
            <br />
            Pannu(2/3/4/5 täyteellä) 9,50/10,00/10,50/11,00 <br />
            <br />
            Perfetta(2/3/4/5 täyteellä) 8,00/8,50/9,00/9,50 <br />
            <br />
            Lisätäytteet (1,00 / täyte) <br />
            Ananas, Aura, BBQ-kastike, Jauheliha, Feta, Herkkusieni, Jalapeno,
            Kana, Kana Kebab, Katkarapu, Mojoneesi, Kebab, Naudanliha,
            Pizzasuikale, Majoneesi, Oliivi, Paprika,chilikastike Pepperoni,
            Rucola, Salami, Sipuli, Tonnikala, Tomaatti, Mozzarella,
            Punapippuri, Oliiviöljy, Basilika, V. Sipuli, Oregano <br />
            <br />
          </p>
          <p className="py-6 text-gray-500">
            <b>SALAATIT (Sis. leipä)</b>
            <br />
            SALAATTI (ei leipiä) 1,50 <br />
            Salaatti, kurkku, tomatti <br />
            <br />
            KANA SALAATTI 9,00 <br />
            Kana, kastike, salaatti, tomatti, kurkku, juusto <br />
            <br />
            KREIKKALAINEN SALAATTI 8,50 <br />
            Fetajuusto, salaatti, tomatti, kurkku, kastike, oilivi <br />
            <br />
            KEBAB SALAATTI 9,00 <br />
            Kebab, kastike, salaatti, tomatti, kurkku, juusto <br />
            <br />
            TONNIKALA SALAATTI 9,00 <br />
            Tonnikala, kastike, salaatti, tomatti, kurkku, juusto <br />
            <br />
            KATKARAPU SALAATTI 9,50 <br />
            Katkarapu, kastike, salatti, tomatti, kurkku, juusto <br />
            <br />
            FALAFEL SALAATTI 8,50 <br />
            Falafel, kastike, salaatti, tomatti, kurkku, juusto <br />
            <br />
          </p>
          <p className="py-6 text-gray-500">
            <b>KEBABIT</b>
            <br />
            <br />
            KEBAB RANSKALAISET 9,00 <br />
            Kebab, ranskalaiset, kastike, salaatti <br />
            <br />
            KEBAB LOHKOPERUNOILLA 9,00 <br />
            Kebab, ranskalaiset, kastike, salaatti <br />
            <br />
            KEBAB JUUSTOLEIPÄ 9,00 <br />
            Kebab, juustoleipä, kastike, salaatti <br />
            <br />
            KEBAB INSKENDAR 9,50 <br />
            Kebab, voileipäkuutiot, jogurtti, salaatti <br />
            <br />
            KEBAB RIISI 9,00 <br />
            Kebab, riisi, kastike, salaatti <br />
            <br />
            PITA KEBAB 8,50 <br />
            Kebab, pitaleipä, kastike, salaatti <br />
            <br />
            KEBAB ROLLA 9,00 <br />
            Kebab, leipä, kastike, salaatti, majoneesi <br />
            <br />
            KEBAB AURA ROLLA 9,50 <br />
            Kebab, leipä, aura, kastike, salaatti, majoneesi <br />
            <br />
            KASVIS ROLLA 8,50 <br />
            Leipä, fetajuusto, olivi, salaatti, majoneesi <br />
            <br />
            KANA ROLLA 8.90 <br />
            Kana, leipä, kastike, salaatti, majoneesi <br />
            <br />
          </p>
          <br />
          <br />
          <p className="py-6 text-gray-500">
            <b>PASTAT</b>
            <br />
            <br />
            TONNIKALA PASTA 9,00 <br />
            Macaroni, tonnikala, herkkusieni, oregano, salaatti <br />
            <br />
            KANA PASTA 9,50 <br />
            Macaroni, kana, herkkusieni, oregano, salaatti <br />
            <br />
          </p>
          <br />
          <br />
          <p className="py-6 text-gray-500">
            <b>Sormisyötävät</b>
            (Sis. Valkosipuli/BBQ/Majoneesi) <br />
            <br />
            RANSKALAISET 6,00 <br /> <br />
            RISTIKKOPERUNAT 6,00 <br /> <br />
            CHICKEN NUGETIT (6 kpl) 6,00 <br /> <br />
            SIPULI RENKAAT (6 kpl) 6,00 L <br /> <br />
            MIZZARELLATIKUT (6 kpl) 6,00 <br /> <br />
            CHILI CHEESE TOPS (6 kpl) 6,00 <br /> <br />
          </p>
          <br />
          <br />
        </div>
        <div className="grid grid-cols-2 w-full sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {/* {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Pizzakebab;
