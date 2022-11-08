import { useState } from "react";
import "../style/table.scss";

const Table = (props) => {
  const versus = props.versus;
  const [option, setOption] = useState("");

  const handleOption = (e) => {
    if (e.target.value === "--Select--") {
      setOption("");
      return;
    }
    setOption(e.target.value);
  };

  return (
    <div className="table">
      <div className="table-logo">
        <img src={versus.logo || ""} alt={versus.name || ""} />
      </div>
      {versus && (
        <>
          <h2>{versus.name}</h2>
          <div className="table-main">
            <span>{versus.info}</span>
            <span>{versus.info}</span>
            <span>{versus.info}</span>
          </div>
          <div className="table-select">
            <select onChange={handleOption}>
              <option>--Select--</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            {option && (
              <div className="table-option">
                <h3>{option}</h3>
                <span>
                  <span>protein</span>
                  <span>{versus["option"].info}</span>
                </span>
                <span>
                  <span>fiber</span>
                  <span>{versus["option"].info}</span>
                </span>
                <span>
                  <span>saturated fats</span>
                  <span>{versus["option"].info}</span>
                </span>
                <span>
                  <span>meta info</span>
                  <span>{versus["option"].info}</span>
                </span>
                <span>
                  <span>meta info</span>
                  <span>{versus["option"].info}</span>
                </span>
              </div>
            )}
          </div>
        </>
      )}
      {/* {props.remove && versus && (
        <button className="table-remove" onClick={props.remove}>
          Remove
        </button>
      )} */}
    </div>
  );
};

export default Table;
