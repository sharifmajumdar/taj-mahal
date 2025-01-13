import React from "react";

const Kuljetus = () => {
  return (
    <div
      name="kuljetus"
      className="bg-white dark:bg-gradient-to-b from-black to-gray-800 w-full text-gray-800 dark:text-gray-300 min-h-screen py-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Kuljetus
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Kotin kuljetus</h2>
            <p className="mt-2">
              Wolt <br />
              https://wolt.com/en/fin/joensuu/restaurant/ravintola-taj-mahal?srsltid=AfmBOoq_LONi6RYF-5NP8CEx_fJob5h1w40ewKgmXfYOA0B6UGMP-k7D <br />
              <br />
              Foodora<br />
              https://www.foodora.fi/en/restaurant/sxsc/ravintola-taj-mahal-sxsc <br />
              <br />
              Oma kuljetus <br />
              Soita: 045 140 2904 <br />
              Aika: 12.00 - 20.00 <br />
              Huom! Ilmainen kuljetus 5 kilometrin saakka (vähimmäiskulutus kaksi annosta)
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kuljetus;
