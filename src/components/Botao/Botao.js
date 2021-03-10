import React, { useState } from "react";
import styles from "./Botao.module.css";

function Botao(props) {
	const [disabled, setDisabled] = useState(false);
	const [nome, setNome] = useState("Enviar");

	const handleClick = (e) => {
		e.preventDefault();
		console.log("oi");
		setDisabled(true);
		setNome("Enviando...");
		setTimeout(() => {
			setDisabled(false);
			setNome("Enviar");
		}, 3000);
	};

	return (
		<button
			type="submit"
			disabled={disabled}
			className={styles.input4}
			onClick={handleClick}
		>
			{nome}
		</button>
	);
}

export default Botao;
