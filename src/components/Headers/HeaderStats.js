import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import BudgetCardStats from "components/Cards/BudgetCardStats.js";
import CardBarChart from "components/Cards/CardBarChart";
import CardTable from "components/Cards/CardTable";
import CardSettings from "components/Cards/CardSettings";
import CardPageVisits from "components/Cards/CardPageVisits";

export default function HeaderStats() {
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
                  statTitle="450.00"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <BudgetCardStats
                  statSubtitle="Cotisation mensuelle"
                  statTitle="200.00"
                  statIconName="fas fa-hand-holding-usd"
                  statIconColor="bg-emerald-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <BudgetCardStats
                  statSubtitle="Nombre de cagnotte"
                  statTitle="4"
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
