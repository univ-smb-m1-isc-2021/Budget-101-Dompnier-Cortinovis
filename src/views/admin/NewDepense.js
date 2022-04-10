import React from "react";

// components


import CardDepensePonctuelle from "components/Cards/CardDepensePonctuelle.js";

export default function NewCagnotte() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mt-12 mb-12 px-4">
          <CardDepensePonctuelle/> {/* Formulaire nouvelle dépense */}
        </div>
      </div>
      
    </>
  );
}
