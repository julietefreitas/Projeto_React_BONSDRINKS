import React, { useState, useEffect } from "react";

function Drinks() {
	const [results, setResults] = useState([]);

	useEffect(() => {
		fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
			.then((response) => {
				return response.json();
			})
			.then((dados) => {
				dados = dados.drinks;
				setResults(dados);
			});
	}, []);

	return (
		<div>
			{results.map((drink) => {
				return (
					<div>
						<img
							style={{
								width: "100px",
								height: "100px",
								borderRadius: "4px",
							}}
							src={drink.strDrinkThumb}
						></img>
						<p>{drink.strDrink}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Drinks;
