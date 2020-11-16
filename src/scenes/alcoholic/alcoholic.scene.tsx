import React from "react";
import { Link, generatePath } from "react-router-dom";
import { imgStyles } from "./alcoholic.styles";

interface CocktailEntity {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export const AlcoholicPage: React.FC = () => {
  const [cocktails, setCocktails] = React.useState<CocktailEntity[]>([]);

  React.useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then((response) => response.json())
      .then((json) => setCocktails(json.drinks));
  }, []);

  return (
    <>
      <h2>Alcoholic Cocktails</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>Buy</td>
          </tr>
        </thead>
        <tbody>
          {cocktails.map((cocktail) => (
            <tr key={cocktail.idDrink}>
              <td>{cocktail.strDrink}</td>
              <td>
                <img style={imgStyles} src={cocktail.strDrinkThumb} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
