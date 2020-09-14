import React from "react";
import { Link, generatePath } from "react-router-dom";

interface CocktailEntity {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export const PuppiesPage: React.FC = () => {
  const [cocktails, setCocktails] = React.useState<CocktailEntity[]>([]);

  React.useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then((response) => response.json())
      .then((json) => setCocktails({cocktails: json.drinks}));
  }, []);

  return (
    <>
      <h2>Hello from cocktails page</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>Buy</td>
          </tr>
        </thead>
        <tbody>
          {cocktails.map(cocktail => (
            <tr key={cocktail.idDrink}>
              <td>{cocktail.strDrink}</td>
              <td><img src={cocktail.strDrinkThumb} /></td>
              <td><input type="check">Buy</input></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
