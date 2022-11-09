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
              <div className="table-option nutrition">
                <h3>Comparing Nutrition</h3>
                <span>
                  <span>Serving Size</span>
                  <span>
                    {item.serving}
                    {item.serving !== "N/A" && "g"}
                  </span>
                </span>
                <span>
                  <span>Calories</span>
                  <span>
                    {item.cal}
                    {item.cal !== "N/A" && "kcal"}
                  </span>
                </span>
                <span>
                  <span>Fats</span>
                  <span>
                    {item.fat}
                    {item.fat !== "N/A" && "g"}
                  </span>
                </span>
                <span>
                  <span>Cholesterol</span>
                  <span>
                    {item.cholesterol}
                    {item.cholesterol !== "N/A" && "mg"}
                  </span>
                </span>
                <span>
                  <span>Sodium</span>
                  <span>
                    {item.sodium}
                    {item.sodium !== "N/A" && "mg"}
                  </span>
                </span>
                <span>
                  <span>Carbohydrates</span>
                  <span>
                    {item.carbs}
                    {item.carbs !== "N/A" && "g"}
                  </span>
                </span>
                <span>
                  <span>Sugars</span>
                  <span>
                    {item.sugars}
                    {item.sugars !== "N/A" && "g"}
                  </span>
                </span>
                <span>
                  <span>Protein</span>
                  <span>
                    {item.protein}
                    {item.protein !== "N/A" && "g"}
                  </span>
                </span>
              </div>
            ) : (
              <div className="table-option cost">
                <h3>Comparing Nutrition</h3>
                <span>
                  <span>Price</span>
                  <span>${item.price}</span>
                </span>
                <span>
                  <span>Serving Size</span>
                  <span>
                    {item.serving}
                    {item.serving !== "N/A" && "g/$"}
                  </span>
                </span>
                <span>
                  <span>Calories</span>
                  <span>
                    {item.cal}
                    {item.cal !== "N/A" && "kcal/$"}
                  </span>
                </span>
                <span>
                  <span>Fats</span>
                  <span>
                    {item.fat}
                    {item.fat !== "N/A" && "g/$"}
                  </span>
                </span>
                <span>
                  <span>Cholesterol</span>
                  <span>
                    {item.cholesterol}
                    {item.cholesterol !== "N/A" && "mg/$"}
                  </span>
                </span>
                <span>
                  <span>Sodium</span>
                  <span>
                    {item.sodium}
                    {item.sodium !== "N/A" && "mg/$"}
                  </span>
                </span>
                <span>
                  <span>Carbohydrates</span>
                  <span>
                    {item.carbs}
                    {item.carbs !== "N/A" && "g/$"}
                  </span>
                </span>
                <span>
                  <span>Sugars</span>
                  <span>
                    {item.sugars}
                    {item.sugars !== "N/A" && "g/$"}
                  </span>
                </span>
                <span>
                  <span>Protein</span>
                  <span>
                    {item.protein}
                    {item.protein !== "N/A" && "g/$"}
                  </span>
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
