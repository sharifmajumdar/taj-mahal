/* import React from "react";

const Yhteystiedot = () => {
  return (
    <div
      name="yhteystiedot"
      className="w-full h-screen bg-white dark:bg-gradient-to-b from-black to to-gray-800 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-500 font-bold inline border-b-4 border-gray-500">
            Yhteystiedot
          </p>
          <p className="py-6 text-gray-500">Lähetä palautetta</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/71dbc174-ada3-4c92-a84e-eea4ec18dca7"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Nimi"
              className="p-2 border-2 bg-transparent rounded-md text-gray-500 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Sähköposti"
              className="my-4 p-2 border-2 bg-transparent rounded-md text-gray-500 focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Viesti"
              className="p-2 bg-transparent border-2 rounded-md text-gray-500 focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                            flex items-center rounded-md hover:scale-110 duration-300"
            >
              Lähetä
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Yhteystiedot;
 */

import React from "react";

const Yhteystiedot = () => {
  return (
    <div
      name="yhteystiedot"
      className="w-full min-h-screen bg-white dark:bg-gradient-to-b from-black to-gray-800 p-4 text-white py-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-500 font-bold inline border-b-4 border-gray-500">
            Yhteystiedot
          </p>
          <p className="py-6 text-gray-500">Yhteystiedot ja sijainti</p>
          <p className="py-6 text-gray-500">
            Ravintola Taj Mahal, Kirkkokatu 25b, 80100 Joensuu Soita: 045 140
            2904 Sähköposti: tajmahaljoensuu@gmail.com
          </p>
          <p className="py-6 text-gray-500">
          Aukioloajat: <br></br>
            MA 10.30 - 21.00 <br></br>
            TI 10.30  - 21.00 <br></br>
            KE 10.30  - 21.00 <br></br>
            TO 10.30  - 21.00 <br></br>
            PE 10.30  - 21.00 <br></br>
            LA 12.00 - 21.00 <br></br>
            SU 12.00 - 21.00 <br></br>
          </p>
          <br></br><br></br>
        </div>
        <div>
          <form
            action="https://getform.io/f/71dbc174-ada3-4c92-a84e-eea4ec18dca7"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Nimi"
              className="p-2 border-2 bg-transparent rounded-md text-gray-500 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Sähköposti"
              className="my-4 p-2 border-2 bg-transparent rounded-md text-gray-500 focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Viesti"
              className="p-2 bg-transparent border-2 rounded-md text-gray-500 focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                            flex items-center rounded-md hover:scale-110 duration-300"
            >
              Lähetä
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Yhteystiedot;
