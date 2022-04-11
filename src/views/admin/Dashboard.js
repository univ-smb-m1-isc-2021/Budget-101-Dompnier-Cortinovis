import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardTable from "components/Cards/CardTable";


export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />  {/* Courbe du solde */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />   {/* Graph des différences */}
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable />       {/* Tableau des cagnottes */}
        </div>
      </div>

    </>
  );
}
