import React from "react";
import PropTypes from "prop-types";
// components

export default function CardCagnotte({
  statName,
  statStart,
  statEnd,
  statModification,
  statBudgetTT,
  statCurrentBudget,
  statPrevelement,
}) {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-600 text-xl font-bold">
                    {statModification === "yes"
                      ? "Modifier Cagnotte"
                      : statModification === "no"
                        ? "Nouvelle Cagnotte"
                        : ""}
                  </h6>
                </div>

                <hr className="mt-8 mb-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="ex: Vidange"
                      value={statName}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Début
                    </label>
                    <input
                      type="date"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={statStart}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Fin
                    </label>
                    <input
                      type="date"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={statEnd}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Objectif Budget
                    </label>
                    <input
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="ex: 250€"
                      value={statBudgetTT}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Budget actuel
                    </label>
                    <input
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="ex: 43€"
                      value={statCurrentBudget}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Prélèvement mensuel
                    </label>
                    <input
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="ex: 50€"
                      value={statPrevelement}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className={statModification === "yes"
                        ? "bg-orange-500 text-white active:bg-lightBlue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-4 mx-4 mb-1 ease-linear transition-all duration-150"
                        : statModification === "no"
                          ? "bg-emerald-400 text-white active:bg-lightBlue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-4 mx-4 mb-1 ease-linear transition-all duration-150"
                          : "text-white active:bg-lightBlue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-4 mx-4 mb-1 ease-linear transition-all duration-150"}
                      type="button"
                    >
                      {statModification === "yes"
                        ? "Confirmer"
                        : statModification === "no"
                          ? "Créer la Cagnotte"
                          : ""}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
CardCagnotte.defaultProps = {
  statName: "",
  statStart: "",
  statEnd: "",
  statModification: "no",
  statBudgetTT: "",
  statCurrentBudget: "",
  statPrevelement: "",
};

CardCagnotte.propTypes = {
  statName: PropTypes.string,
  statStart: PropTypes.string,
  statEnd: PropTypes.string,
  statModification: PropTypes.oneOf(["yes", "no"]),
  statBudgetTT: PropTypes.number,
  statCurrentBudget: PropTypes.number,
  statPrevelement: PropTypes.number,
};
