import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { mail, password } = event.target.elements
    console.log({ mail: mail.value, password: password.value })
    const mailUser = mail.value
    const mdpUser = password.value
    console.log(mailUser)
    console.log(mdpUser)

    axios.get(`http://localhost:8080/getUser?email=` + mailUser + `&password=` + mdpUser)
      .then(res => {
        console.log("GET");
        console.log(res);
        console.log(res.data);
        if (res.data.length === 0 || res.data === "user not found") {
          alert("Utilisateur non trouvé");
        }else if(res.data === "wrong password"){
          alert("Mauvais mot de passe");
        }else{
          console.log(res.data);
          // localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("userId", res.data);  // on store l'id du user dans le localstorage
          this.props.history.push("/admin"); // on redirige vers la page dashboard
        }
      })
  }
  render() {
    return (
      <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Connection
                    </h6>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                  <form onSubmit={this.handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email" id="mail"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password" id="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>


                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 mt-6"
                        type="submit"
                      >
                        Connecter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2">
                </div>
                <div className="w-1/2 text-right">
                  <Link to="/auth/register" className="text-blueGray-200">
                    <small>Créer un nouveau compte</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
