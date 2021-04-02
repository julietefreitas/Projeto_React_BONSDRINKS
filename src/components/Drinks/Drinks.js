import React from "react";
import { Link, Route , Switch} from 'react-router-dom';
import DrinksPopulares from  "../DrinksPopulares/DrinksPopulares"
import styles from "./Drinks.module.css"

function Drinks() {

	return (
		<div className = {styles.container_drinks}>,
		<h1 className = {'titulo' + " " + styles.titulo}>Drinks</h1>
		<nav className= {'navBar' + " " + styles.navBar}>
        <ul className={'btnUl' + " "+ styles.btnUl}>
          <li className={'btn' + " "+ styles.btn}>
            <Link to="/drinks/pop">
            Drinks Populares
            </Link>
          </li>
          <li className={'btn1' + " "+ styles.btn1}>
            <Link to="/drinks/buscar">
              Buscar Drinks
            </Link>
          </li>
        </ul>
      </nav>
			<Switch>
          <Route path="/drinks/pop" element={<DrinksPopulares />}>
					</Route>
          <Route path="/drinks/buscar" />
        </Switch>
		</div>
		
	);
}

export default Drinks;

	/* style={{
				display: "flex",
				width: "75%",
				flexWrap: "wrap",
				justifyContent: "space-between",
			}}
		>
			{results.map((drink) => {
				return <Card drink={drink} />;
			})}
			<Botao /> */