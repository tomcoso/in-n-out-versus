import React from "react";
import mainlogo from "../assets/70067.png";
import bklogo from "../assets/85936.png";
import mclogo from "../assets/35939.png";

const data = [
  {
    name: "IN-N-OUT",
    logo: mainlogo,
    info: "info IN-N-OUT",
    option: { info: "option info" },
  },
  {
    name: "Burger King",
    logo: bklogo,
    info: "info Burger King",
    option: { info: "option info" },
  },
  {
    name: "Mc Donald's",
    logo: mclogo,
    info: "info Mc Donald's",
    option: { info: "option info" },
  },
];

const DataContext = React.createContext(data);

export default DataContext;
