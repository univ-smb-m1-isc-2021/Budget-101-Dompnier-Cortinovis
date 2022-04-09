import React from "react";

// components


import CardCagnotte from "components/Cards/CardCagnotte.js";

export default function NewCagnotte() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mt-12 mb-12 px-4">
          <CardCagnotte/> {/* Formulaire nouvelle cagnotte */}
        </div>
      </div>
      
    </>
  );
}
