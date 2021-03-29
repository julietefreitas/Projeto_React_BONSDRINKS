import React, {useState, useEffect} from 'react';
import { drinks } from '../Drinks/DrinkList';

import Card from "../Card/Card"
import ConteudoDrinks from "../ConteudoDrinks/ConteudoDrinks"
import {response} from "../../url/url"
import style from "./DrinkPopulares.module.css";



export default function Api(props) {
  let [drinksApi, setDrinksApi] = useState("Enviar");
  let [dadosApiConteudo, setDadosApiConteudo] = useState(0);

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
    console.log()
    return render[number];
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
                <Card noClick={valor} url={drinks[index].strDrinkThumb}>
                </Card>
              </li>
            );
          })}
        </div>
        <div className={style.drink_conteudo}>
          {infoDrinks(dadosApiConteudo)}
        </div>
        <div className={style.imagem_drink}>
          <img className={style.imgApi} src={drinks[0].strDrinkThumb} />
        </div>
      </ul>
      </section>      
  );
}

{/* <div className={styles.navtab}>
{drinks.map((key) => {
  const label = key.strDrinkThumb;
  const drink  = {
    nome: key.strDrink
  }
  console.log(key);
  return (
    <div key={key.idDrink} label={label}>
      {/* <DrinksDetail data={key} /> */}
      {/* <p>{key.strDrink}</p> */}
      {/* <img className = {styles.pop_imagens} src={key.strDrinkThumb} alt={label} onClick={() =>{<Card drink={drink}/>}}></img>
    </div>
  );
})}
</div> */}