import React from "react";
import PropTypes from "prop-types";

export default function BudgetCardStats({
  statSubtitle,
  statTitle,
  statIconName,
  statIconColor,
  statEuro,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xm">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-3xl text-blueGray-700">
                {statTitle} {statEuro === "yes"
                    ? " €"
                    : statEuro === "no"
                    ? ""
                    : ""}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

BudgetCardStats.defaultProps = {
  statSubtitle: "CHARGEMENT...",
  statTitle: "???",
  statEuro: "yes",
  statIconName: "fas fa-euro-sign",
  statIconColor: "bg-lightBlue-500",
};

BudgetCardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statIconName: PropTypes.string,
  statEuro: PropTypes.oneOf(["yes", "no"]),
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
