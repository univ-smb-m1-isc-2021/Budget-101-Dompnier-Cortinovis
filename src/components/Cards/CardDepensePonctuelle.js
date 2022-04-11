import React from "react";
import PropTypes from "prop-types";
// components

export default function CardDepensePonctuelle({
    statName,
    statDate,
    statAmount,
    statModification
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
                                            ? "Modifier la Dépense"
                                            : statModification === "no"
                                                ? "Nouvelle Dépense"
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
                                            
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        >
                                            Somme
                                        </label>
                                        <input
                                            type="number"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="ex: 250€"
                                            
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
                                                    ? "Ajouter la Dépense"
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
CardDepensePonctuelle.defaultProps = {
    statName: "",
    statDate: "",
    statModification: "no",
    statAmount: "",
};

CardDepensePonctuelle.propTypes = {
    statName: PropTypes.string,
    statDate: PropTypes.string,
    statModification: PropTypes.oneOf(["yes", "no"]),
    statAmount: PropTypes.number,
};
