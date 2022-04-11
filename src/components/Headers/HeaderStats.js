import React from "react";
import axios from 'axios';
// components

import CardStats from "components/Cards/CardStats.js";
import BudgetCardStats from "components/Cards/BudgetCardStats.js";
import CardBarChart from "components/Cards/CardBarChart";
import CardTable from "components/Cards/CardTable";
import CardPageVisits from "components/Cards/CardPageVisits";

export default class HeaderStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: []
    };
  }
  // console.log("Ceci est l'userId: "+localStorage.getItem("userId"));
  componentDidMount() {
    const userId = localStorage.getItem('userId')
    console.log(userId)
    axios.get(`http://localhost:8080/infoCagnotte?id=` + userId)
      .then(res => {
        console.log("GET INFO CAGNOTTES");
        console.log(res);
        console.log(res.data);
        this.setState({
          widgets: res.data
        });
        console.log(this.state.widgets);
      }
      )
  //     axios.get(`http://localhost:8080/TotalPm?id=` + userId)
  //     .then(res => {
  //       console.log("GET TOTAL PM");
  //       console.log(res);
  //       console.log(res.data);
  //       this.setState({
  //         budgetTT: res.data,
  //       });
  //       console.log(this.state.widgets);
  //     }
  //     )
   }

  render() {
    const { widgets } = this.state;
    //const { test2 } = this.state.budgetTT;
    console.log("BDD RENDER TEST")
    console.log(widgets);
    // console.log("---------")
    // console.log(test2);
    return (
      <>
        {/* Header */}
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <BudgetCardStats
                    statSubtitle="Solde Courant"
                    statTitle={widgets} 
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <BudgetCardStats
                    statSubtitle="prélèvements mensuels"
                    statTitle="200.00"
                    statIconName="fas fa-hand-holding-usd"
                    statIconColor="bg-emerald-500"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <BudgetCardStats
                    statSubtitle="Nombre de cagnotte"
                    statTitle={ widgets }
                    statEuro="no"
                    statIconName="fas fa-chart-pie"
                    statIconColor="bg-orange-500"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <BudgetCardStats
                    statSubtitle="Budget en cagnotte"
                    statTitle="360.00"
                    statIconName="fas fa-wallet"
                    statIconColor="bg-pink-500"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
