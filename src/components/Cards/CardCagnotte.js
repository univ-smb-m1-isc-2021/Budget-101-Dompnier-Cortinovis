import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';


export default class CardCagnotte extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, start, end, goalBudget, currentBudget, monthlyPayment } = event.target.elements
    console.log({ name: name.value, end: end.value })
    const nameCagnotte = name.value
    const startCagnotte = start.value
    const endCagnotte = end.value
    const goalBudgetCagnotte = goalBudget.value
    const currentBudgetCagnotte = currentBudget.value
    const monthlyPaymentCagnotte = monthlyPayment.value
    const userId = localStorage.getItem('userId')
    console.log(userId)
    console.log(currentBudgetCagnotte)


    axios.get(`http://localhost:8080/addCagnotte?id=` + userId + `&nom=` + nameCagnotte + `&start=` + startCagnotte + `&end=` + endCagnotte + `&montantTT=` + goalBudgetCagnotte + `&montantActuel=` + currentBudgetCagnotte + `&pm=` + monthlyPaymentCagnotte)
      .then(res => {
        console.log("GET");
        console.log(res);
        console.log(res.data);
        this.props.history.push("/admin/dashboard"); // on redirige vers la page dashboard

      })
  }
  render() {

    return (
      <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-600 text-xl font-bold">
                      Nouvelle Cagnotte
                    </h6>
                  </div>

                  <hr className="mt-8 mb-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                  <form onSubmit={this.handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Nom
                      </label>
                      <input
                        type="text" id="name"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="ex: Vidange"
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
                        type="date" id="start"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder=""
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
                        type="date" id="end"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder=""
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Objectif Budget
                      </label>
                      <input
                        type="number" id="goalBudget"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="ex: 250€"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Budget actuel
                      </label>
                      <input
                        type="number" id="currentBudget"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="ex: 43€"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Prélèvement mensuel
                      </label>
                      <input
                        type="number" id="monthlyPayment"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="ex: 50€"
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="text-white bg-emerald-400 active:bg-lightBlue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-4 mx-4 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Créer la Cagnotte

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
}
