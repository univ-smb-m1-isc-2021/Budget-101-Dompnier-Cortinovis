import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cagnottes: [],
    };
  }

  componentDidMount() {
    const userId = localStorage.getItem('userId')
    console.log(userId)

    axios.get(`http://localhost:8080/cagnottes?id=` + userId)
      .then(res => {
        this.setState({
          cagnottes: res.data,
        });
        console.log(this.state.cagnottes);
      }
      )
  }
  render() {
    const { cagnottes } = this.state;
    return true ? (

      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 text-white"
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className="font-semibold text-lg text-white"

              >
                Mes Cagnottes
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"

                >
                  Cagnotte
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"

                >
                  Budget total
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"

                >
                  Date limite
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"

                >
                  Budget actuel
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"

                >
                  Prélèvement mensuel
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"

                >
                  Completion
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"

                ></th>
              </tr>
            </thead>
            <tbody>
              {cagnottes.map((cagnotte) => {
                return (
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className=
                        "ml-3 font-bold text-xl text-white"

                      >
                        {cagnotte.nom}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4">
                      {cagnotte.montantTT}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4">
                      {Date(cagnotte.end_date).substring(0,16)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4">
                      {cagnotte.montantActuel}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4">
                      <div className="flex">
                        {cagnotte.prelevementMensuel}
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">{Math.round((cagnotte.montantActuel / cagnotte.montantTT) * 100)}%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                            <div
                              style={{ width: Math.round((cagnotte.montantActuel / cagnotte.montantTT) * 100) + '%' }}
                              className={"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-400 " + (Math.round((cagnotte.montantActuel / cagnotte.montantTT) * 100) <= 50
                                ? "bg-red-500"
                                : Math.round((cagnotte.montantActuel / cagnotte.montantTT) * 100) <= 70
                                  ? "bg-orange-500"
                                  : "bg-green-500")}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <TableDropdown />
                    </td>
                  </tr>
                );
              })}
              {/* {this.handleTable()} */}
              {/* { this.setState }
              { console.log("POUTRE" + this.handleTable())} */}
            </tbody>
          </table>
        </div>
      </div>

    ) : (<h1>Pas de cagnotte </h1>);
  }
  // render() {
  //   return (null );
  // }
}

