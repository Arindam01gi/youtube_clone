import React from "react";
import Button from "./Button";

const buttonNameList = [
  "All",
  "APIs",
  "Software Engineering",
  "AI",
  "Websites",
  "Information",
  "Law Enforcement",
  "Skills",
  "History",
  "Fundamental Analysis",
  "Flights",
];

const ButtonList = () => {
  return (
    <div className="flex gap-2 my-1 mx-3">
      {buttonNameList.length > 0
        ? buttonNameList.map((button,index) => <Button name={button} key={index} />)
        : null}
    </div>
  );
};

export default ButtonList;
