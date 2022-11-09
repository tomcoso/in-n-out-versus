import { useEffect, useState } from "react";
import "../style/table.scss";

const Table = (props) => {
  const versus = props.versus;
  const compType = props.option;
  const [item, setItem] = useState(versus.option[compType][0]);

  // ensures a category is always selected on re-render
  useEffect(() => {
    setItem(versus.option[compType || "nutrition"][0]);
  }, [versus, compType]);

  const handleItem = (e) => {
    for (let each of versus.option[compType]) {
      if (each.name === e.target.value) {
        setItem(each);
      }
    }
  };

  return (
    <div className="table">
      <div className="table-logo">
        <a href={versus.website} target="_blank" rel="noreferrer">
          <img src={versus && versus.logo} alt={versus && versus.name} />
        </a>
      </div>
      {versus && (
        <>
          <h2>{versus.name}</h2>
          <div className="table-select">
            <label id="label" htmlFor={"select-" + versus.name}>
              Choose item
            </label>
            <select id={"select-" + versus.name} onChange={handleItem}>
              {compType &&
                versus.option[compType].map((x, i) => (
                  <option key={i}>{x.name}</option>
                ))}
            </select>
            {/* These span elements could be separated into it's own component */}
            {item && compType === "nutrition" ? (
              <div className="table-option nutrition">
                <h3>Comparing Nutrition</h3>
                <span>
                  <span>Serving Size</span>
                  <span className={item.serving === "N/A" ? "na" : ""}>
                    {item.serving}
                    <span className="unit">
                      {item.serving !== "N/A" && "g"}
                    </span>
                  </span>
                </span>
                <span>
                  <span>Calories</span>
                  <span className={item.cal === "N/A" ? "na" : ""}>
                    {item.cal}
                    <span className="unit">{item.cal !== "N/A" && "kcal"}</span>
                  </span>
                </span>
                <span>
                  <span>Fats</span>
                  <span className={item.fat === "N/A" ? "na" : ""}>
                    {item.fat}
                    <span className="unit">{item.fat !== "N/A" && "g"}</span>
                  </span>
                </span>
                <span>
                  <span>Cholesterol</span>
                  <span className={item.cholesterol === "N/A" ? "na" : ""}>
                    {item.cholesterol}
                    <span className="unit">
                      {item.cholesterol !== "N/A" && "mg"}
                    </span>
                  </span>
                </span>
                <span>
                  <span>Sodium</span>
                  <span className={item.sodium === "N/A" ? "na" : ""}>
                    {item.sodium}
                    <span className="unit">
                      {item.sodium !== "N/A" && "mg"}
                    </span>
                  </span>
                </span>
                <span>
                  <span>Carbohydrates</span>
                  <span className={item.carbs === "N/A" ? "na" : ""}>
                    {item.carbs}
                    <span className="unit">{item.carbs !== "N/A" && "g"}</span>
                  </span>
                </span>
                <span>
                  <span>Sugars</span>
                  <span className={item.sugars === "N/A" ? "na" : ""}>
                    {item.sugars}
                    <span className="unit">{item.sugars !== "N/A" && "g"}</span>
                  </span>
                </span>
                <span>
                  <span>Protein</span>
                  <span className={item.protein === "N/A" ? "na" : ""}>
                    {item.protein}
                    <span className="unit">
                      {item.protein !== "N/A" && "g"}
                    </span>
                  </span>
                </span>
              </div>
            ) : (
              <div className="table-option cost">
                <h3>Comparing Value</h3>
                <span>
                  <span>Price</span>
                  <span>${item.price}</span>
                </span>
                <span>
                  <span>Serving Size</span>
                  <span className={item.serving === "N/A" ? "na" : ""}>
                    {item.serving}
                    <span className="unit">
                      {item.serving !== "N/A" && "g/$"}
                    </span>
                  </span>
                </span>
                <span>
                  <span>Calories</span>
                  <span className={item.cal === "N/A" ? "na" : ""}>
                    {item.cal}
                    <span className="unit">
                      {item.cal !== "N/A" && "kcal/$"}
                    </span>
                  </span>
                </span>
                <span>
                  <span>Fats</span>
                  <span className={item.fat === "N/A" ? "na" : ""}>
                    {item.fat}
                    <span className="unit">{item.fat !== "N/A" && "g/$"}</span>
                  </span>
                </span>
                <span>
                  <span>Cholesterol</span>
                  <span className={item.cholesterol === "N/A" ? "na" : ""}>
                    {item.cholesterol}
                    <span className="unit">
                      {item.cholesterol !== "N/A" && "mg/$"}
                    </span>
                  </span>
                </span>
                <span>
                  <span>Sodium</span>
                  <span className={item.sodium === "N/A" ? "na" : ""}>
                    {item.sodium}
                    <span className="unit">
                      {item.sodium !== "N/A" && "mg/$"}
                    </span>
                  </span>
                </span>
                <span>
                  <span>Carbohydrates</span>
                  <span className={item.carbs === "N/A" ? "na" : ""}>
                    {item.carbs}
                    <span className="unit">
                      {item.carbs !== "N/A" && "g/$"}
                    </span>
                  </span>
                </span>
                <span>
                  <span>Sugars</span>
                  <span className={item.sugar === "N/A" ? "na" : ""}>
                    {item.sugars}
                    <span className="unit">
                      {item.sugars !== "N/A" && "g/$"}
                    </span>
                  </span>
                </span>
                <span>
                  <span>Protein</span>
                  <span className={item.protein === "N/A" ? "na" : ""}>
                    {item.protein}
                    <span className="unit">
                      {item.protein !== "N/A" && "g/$"}
                    </span>
                  </span>
                </span>
              </div>
            )}
          </div>
          <div className="table-links">
            <span>
              <a href={versus.website} target="_blank" rel="noreferrer">
                Visit Website
              </a>
            </span>
            <span>
              <a href={versus.nutrition} target="_blank" rel="noreferrer">
                View nutrition source
              </a>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
