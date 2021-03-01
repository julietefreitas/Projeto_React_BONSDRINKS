import React, { Component } from "react";
import styles from "./Botao.module.css";

export default class Botao extends Component {
	render() {
		return (
			<button type="submit" className={styles.input4}>
				Enviar
			</button>
		);
	}
}
