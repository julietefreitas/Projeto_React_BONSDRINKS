import React, { Component } from "react";
import Botao from "../Botao/Botao";
import styles from "./Formulario.module.css";
import ImagemContato from ".././ImagemContato/ImagemContato";
import logoContato from "../../imagens/contact-pic.jpg";

export default class Formulario extends Component {
	render() {
		return (
			<div className={styles.main}>
				<h1 className={styles.titulo}>Contato</h1>
				<ImagemContato foto={logoContato} />
				<form className={styles.AppForm}>
					<label className={styles.LabelForm + " " + styles.label1}>Nome</label>
					<br></br>
					<input className={styles.InputForm + " " + styles.input1} />
					<br></br>
					<label className={styles.LabelForm + " " + styles.label2}>
						Email
					</label>
					<br></br>
					<input className={styles.InputForm + " " + styles.input2} />
					<br></br>
					<label className={styles.LabelForm + " " + styles.label3}>
						Mensagem
					</label>
					<br></br>
					<input className={styles.input3}></input>
					<Botao />
				</form>
			</div>
		);
	}
}
