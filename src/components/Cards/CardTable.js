import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleTable = this.handleTable.bind(this);
  }

  handleTable() {
    // event.preventDefault();
    // const { name, start, end, goalBudget, currentBudget, monthlyPayment } = event.target.elements
    // console.log({ name: name.value, end: end.value })
    // const nameCagnotte = name.value
    // const startCagnotte = start.value
    // const endCagnotte = end.value
    // const goalBudgetCagnotte = goalBudget.value
    // const currentBudgetCagnotte = currentBudget.value
    // const monthlyPaymentCagnotte = monthlyPayment.value
    const userId = localStorage.getItem('userId')
    console.log(userId)
    //console.log(currentBudgetCagnotte)

    axios.get(`http://localhost:8080/cagnottes?id=` + userId)
      .then(res => {
        console.log("GET");
        console.log(res);
        console.log(res.data);
          
        for (let i = 0; i < res.data.length; i++) {
          console.log("Nom "+i+ res.data[i].nom)
              {<tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className=
                    "ml-3 font-bold text-xl text-white"

                  >
                    {res.data[i].nom}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4">
                  {res.data[i].montantTT}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4">
                  250€
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4">
                  <div className="flex">
                    20€
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "60%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              }
          

        }
        
      }
      )
  }
  render() {
    return (
      
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
                {this.handleTable()}
                {console.log("POUTRE"+this.handleTable())}
              </tbody>
            </table>
          </div>
        </div>
      
    );
  }
}

