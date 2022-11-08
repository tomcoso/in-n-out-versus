import { useContext, useState } from "react";
import DataContext from "./components/Context.js";
import Table from "./components/Table.js";
import "./style/app.scss";

function App() {
  const data = useContext(DataContext);
  const [versus, setVersus] = useState(
    data.find((x) => x.name === "Burger King")
  );
  const mainData = data.find((x) => x.name === "IN-N-OUT");

  const handleChange = (e) => {
    setVersus(data.find((x) => x.name === e.target.value));
  };

  const handleRemove = () => {
    setVersus("");
  };

  return (
    <>
      <header>
        <h1 aria-label="In and out versus">
          <span>IN-N-OUT</span>
          <span>Versus</span>
        </h1>
      </header>
      <div id="versus-select">
        <select onChange={handleChange} value={versus.name}>
          <option>Burger King</option>
          <option>Mc Donald's</option>
        </select>
      </div>
      <main>
        <Table versus={mainData} />
        <Table versus={versus} remove={handleRemove} />
      </main>
    </>
  );
}

export default App;
