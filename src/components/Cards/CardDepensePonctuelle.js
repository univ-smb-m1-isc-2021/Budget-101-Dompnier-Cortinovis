import React from "react";
import PropTypes from "prop-types";
// components
import axios from 'axios';

export default class CardDepensePonctuelle extends React.Component {
    
    handleSubmit(event) {
        event.preventDefault();
        const { text, date, number} = event.target.elements
        const nameDepense = text.value
        const dateD = date.value
        const numberD = number.value
        const userId = localStorage.getItem('userId')
    
        if (nameDepense != "" && dateD != "" && numberD != "" ) {
          axios.get(`http://localhost:8080/addDepense?id=` + userId + `&nom=` + nameDepense + `&montant=` + numberD + `&date=` + dateD)
            .then(res => {
              console.log("GET");
              console.log(res);
              console.log(res.data);
              if (res.data.length === 0) {
                alert("Dépense non créée");
              } else {
                alert("Dépense créée");
                // on redirige vers la page dashboard
                this.props.history.push("/admin");
              }
            }
            )
        }else{
          alert("Veuillez remplir tous les champs")
        }
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
                                            Nouvelle dépense ponctuelle
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
                                                className="text-white bg-emerald-400 active:bg-lightBlue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-4 mx-4 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                Ajouter la dépense

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
