import React, { Component } from "react";
import styles from "./Botao.module.css";

export default class Botao extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false,
			nome: "Enviar",
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		e.preventDefault();
		console.log("oi");
		this.setState(() => ({
			disabled: true,
			nome: "Enviando...",
		}));
		setTimeout(() => {
			this.setState(() => ({
				disabled: false,
				nome: "Enviar",
			}));
		}, 3000);
	}

	render() {
		return (
			<button
				type="submit"
				disabled={this.state.disabled}
				className={styles.input4}
				onClick={this.handleClick}
			>
				{this.state.nome}
			</button>
		);
	}
}
