import React from "react";
import { drinks } from "../Drinks/DrinkList";

import Card from "../Card/Card";
import ConteudoDrinks from "../ConteudoDrinks/ConteudoDrinks";

import style from "./DrinkPopulares.module.css";

export default function Api() {
	let render = [
		<ConteudoDrinks
			className="conteudoDrinks"
			nomeDrink={drinks[0].strDrink}
			categoriaDrink={drinks[0].strCategory}
			copoDrink={drinks[0].strGlass}
			ibaDrink={drinks[0].strIBA}
			ingredienteDrink={drinks[0].strIngredient1}
			instrucoesDrink={drinks[0].strInstructions}
		/>,
	];

	function infoDrinks(number) {
		console.log("este eh o numero" + number);
		return render[0];
	}

	return (
		<section className={style.container_drinks}>
			<ul className={style.api_drinks}>
				<div className={style.container_infos}>
					<h1 className={style.tituloDrink}>Drinks</h1>
					<button className={style.button}>Drinks Populares</button>
				</div>
				<div className={style.secao_bebidas}>
					{drinks.map((valor, index) => {
						return (
							<li>
								<Card
									noClick={(valor, index)}
									url={drinks[index].strDrinkThumb}
								></Card>
							</li>
						);
					})}
				</div>
				<div className={style.drink_conteudo}>{infoDrinks()}</div>
				<div className={style.imagem_drink}>
					<img className={style.imgApi} src={drinks[0].strDrinkThumb} />
				</div>
			</ul>
		</section>
	);
}

