import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


export default class Navbar extends React.Component {

 constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    
      event.preventDefault();
      const userId = localStorage.getItem('userId')
      console.log(userId)

      axios.get(`http://localhost:8080/sendEmail?id=` + userId)
        .then(res => {
          console.log("GET");
          console.log(res);
          console.log(res.data);
          if (res.data.length === 0) {
            alert("Problème surveneu");
          }else if(res.data === "Email Sent!"){
            alert("Email envoyé");
          }else{
            alert("Problème surveneu");
          }
        })
   }

  render() {
    return (
        <>
          {/* Navbar */}
          <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
            <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
              {/* Brand */}
              <Link
                to="/admin/dashboard"
              >
                <a
                  className="text-white text-3xl uppercase hidden lg:inline-block font-bold"
                >
                  Budget101 - Mon Compte
                </a>
              </Link>
              {/* User */}
              <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                {/* <UserDropdown /> */}
              </ul>
            </div>
            <Link
              to="/admin/cagnotte/new"
            >
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i className=""></i> ajouter une cagnotte
              </button>
            </Link>
            <Link
              to="/admin/depense/new"
            >
              <button
                className="bg-red-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i className=""></i>Nouvelle Dépense ponctuelle
              </button>
            </Link>
            <button
              onClick={this.handleSubmit}
              className="bg-orange-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              <i className=""></i>Récapitulatif Mail
            </button>
          </nav>
          {/* End Navbar */}
        </>
      );
  }
}

