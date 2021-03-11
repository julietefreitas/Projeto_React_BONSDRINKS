import React, { Component } from "react";
import Botao from "../Botao/Botao";
import styles from "./Formulario.module.css";
import Imagem from "../Imagem/Imagem";
import logoContato from "../../imagens/contact-pic.jpg";
import Input from "../Input/Input";

const Formulario = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.titulo}>Contato</h1>
			<Imagem foto={logoContato} />
			<form className={styles.AppForm}>
				<Input
					htmlFor="fnome"
					id="fname"
					name="fname"
					type="text"
					label="label1"
					input="input1"
					children="Nome"
				/>
				<Input
					htmlFor="femail"
					id="femail"
					name="femail"
					type="text"
					label="label2"
					input="input2"
					children="Email"
				/>
				<Input
					htmlFor="fmsg"
					id="fmsg"
					name="fmsg"
					type="text"
					label="label3"
					input="input3"
					children="Mensagem"
				/>
				<Botao />
			</form>
		</div>
	);
};
export default Formulario;
