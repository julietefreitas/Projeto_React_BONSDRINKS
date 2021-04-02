import styles from "./MenuHeader.module.css";
import { Link } from "react-router-dom";
import React from "react";

const MenuHeader = () => {
	return (
		<div className={styles.header}>
			<nav className={styles.listaHeader}>
				<Link to="/drinks" className={styles.ancoraHeader}>
					Drinks
				</Link>
				<Link to="/sobre" className={styles.ancoraHeader}>
					Sobre Nós
				</Link>
				<Link to="/" className={styles.ancoraHeader + " " + styles.ancoraLogo}>
					Bons Drinks
				</Link>
				<Link to="/nossoTime" className={styles.ancoraHeader}>
					Nosso Time
				</Link>
				<Link to="/contato" className={styles.ancoraHeader}>
					Contato
				</Link>
			</nav>
		</div>
	);
};

export default MenuHeader;
