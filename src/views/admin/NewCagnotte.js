import React from "react";

// components


import CardCagnotte from "components/Cards/CardNewCagnotte.js";

export default function NewCagnotte() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardCagnotte/> {/* Formulaire nouvelle cagnotte */}
        </div>
      </div>
      
    </>
  );
}
