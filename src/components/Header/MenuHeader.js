import React, { Component } from "react";
import styles from "./MenuHeader.module.css";

export default class MenuHeader extends Component {
	render() {
		return (
			<header className={styles.header}>
				<nav>
					<ul className={styles.listaHeader}>
						<li>
							<a className={styles.ancoraHeader} href="">
								Drinks
							</a>
						</li>
						<li>
							<a className={styles.ancoraHeader} href="">
								Sobre Nós
							</a>
						</li>
						<li>
							<a className={styles.ancoraHeader} href="">
								Bons Drinks
							</a>
						</li>
						<li>
							<a className={styles.ancoraHeader} href="">
								Nosso Time
							</a>
						</li>
						<li>
							<a className={styles.ancoraHeader} href="">
								Contato
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
