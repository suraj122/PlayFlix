import React from "react";
import Button from "./Button";

const buttons = [
  "All",
  "Music",
  "Movies",
  "Comedy",
  "Mixes",
  "T-series",
  "Food",
  "Travel",
  "New",
  "Trailer",
  "Mixes",
  "T-series",
  "Food",
];

const FilterBtnList = () => {
  return (
    <div className="flex space-x-4">
      {buttons.map((btn, i) => (
        <Button key={i} name={btn} />
      ))}
    </div>
  );
};

export default FilterBtnList;
