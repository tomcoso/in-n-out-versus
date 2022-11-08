import { useState } from "react";
import Table from "./components/Table.js";
import mainlogo from "./assets/70067.png";
import "./style/app.scss";

function App() {
  const [versus, setVersus] = useState("");

  const handleChange = (e) => {
    setVersus(e.target.value);
  };

  return (
    <>
      <header>
        <img src={mainlogo} alt="IN-N-OUT" />
        <h1 aria-label="In and out versus">Versus</h1>
      </header>
      <main>
        <Table versus={versus} change={handleChange} />
      </main>
    </>
  );
}

export default App;
