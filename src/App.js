import { useContext, useState } from "react";
import DataContext from "./components/Context.js";
import Table from "./components/Table.js";
import "./style/app.scss";
import headerlogo from "./assets/70067-small.png";

function App() {
  const data = useContext(DataContext);
  const [compType, setCompType] = useState("nutrition");
  const [versus, setVersus] = useState(
    data.find((x) => x.name === "Burger King")
  );
  const mainData = data.find((x) => x.name === "In-N-Out");

  const handleChange = (e) => {
    setVersus(data.find((x) => x.name === e.target.value));
  };

  const changeType = (e) => {
    const string = e.target.value;
    console.log(string);
    setCompType(string.toLowerCase());
  };

  return (
    <>
      <header>
        <h1 aria-label="In and out versus">
          <img src={headerlogo} alt="IN-N-OUT" />
          <span>Versus</span>
        </h1>
      </header>
      <div id="versus-select">
        <h3>Compare In-N-Out with other popular fast food restaurant chains</h3>
        <p>Select popular products on nutrition and value for money</p>
        <label htmlFor="select-restaurant">
          Choose a restaurant to compare
        </label>
        <select
          id="select-restaurant"
          onChange={handleChange}
          value={versus.name}
        >
          {data.map((x, i) =>
            x.name === "In-N-Out" ? null : <option key={i}>{x.name}</option>
          )}
        </select>
        <label htmlFor="select-option">Select a category</label>
        <select id="select-option" onChange={changeType}>
          <option>Nutrition</option>
          <option>Cost</option>
        </select>
      </div>
      {versus && mainData && (
        <main>
          <Table versus={mainData} option={compType} />
          <Table versus={versus} option={compType} />
        </main>
      )}
    </>
  );
}

export default App;
