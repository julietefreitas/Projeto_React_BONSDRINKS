export async function response () {
  const responseDrink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`);
  const resultados = await responseDrink.json();
  return resultados.drinks;
}