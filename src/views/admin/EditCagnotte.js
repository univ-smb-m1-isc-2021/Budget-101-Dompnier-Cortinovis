import React from "react";

// components


import CardCagnotte from "components/Cards/CardCagnotte.js";

export default function EditCagnotte() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mt-12 mb-12 px-4">
          {/* Formulaire edit cagnotte */}
          <CardCagnotte
            statName= ""
            statStart= ""
            statEnd= ""
            statModification= "yes"
            statBudgetTT= ""
            statCurrentBudget= ""
            statPrevelement= ""
          /> 
        </div>
      </div>
      
    </>
  );
}
