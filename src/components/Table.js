import { useEffect, useState } from "react";
import "../style/table.scss";

const Table = (props) => {
  const versus = props.versus;
  // console.log(versus);
  const compType = props.option;
  const [item, setItem] = useState(versus.option[compType][0]);
  // console.log(item);

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
        <img src={versus && versus.logo} alt={versus && versus.name} />
      </div>
      {versus && (
        <>
          <h2>{versus.name}</h2>
          <div className="table-main">
            <span>{versus.description}</span>
            <span>{versus.menuLink}</span>
          </div>
          <div className="table-select">
            <select onChange={handleItem}>
              {compType &&
                versus.option[compType].map((x, i) => (
                  <option key={i}>{x.name}</option>
                ))}
            </select>
            {item && compType === "nutrition" ? (
              <div className="table-option">
                <h3>Comparing Nutrition</h3>
                <span>
                  <span>Serving Size</span>
                  <span>{item.serving}g</span>
                </span>
                <span>
                  <span>Calories</span>
                  <span>{item.cal}kcal</span>
                </span>
                <span>
                  <span>Fats</span>
                  <span>{item.fat}g</span>
                </span>
                <span>
                  <span>Cholesterol</span>
                  <span>{item.cholesterol}mg</span>
                </span>
                <span>
                  <span>Sodium</span>
                  <span>{item.sodium}mg</span>
                </span>
                <span>
                  <span>Carbohydrates</span>
                  <span>{item.carbs}g</span>
                </span>
                <span>
                  <span>Sugars</span>
                  <span>{item.sugars}g</span>
                </span>
                <span>
                  <span>Protein</span>
                  <span>{item.protein}g</span>
                </span>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
