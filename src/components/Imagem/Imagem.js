import React from "react";
import style from "./Imagem.module.css";

function Imagem({ foto, classe }) {
	return (
		<img
			className={classe === undefined ? style.imgContato : style.imagemHome}
			src={foto}
		/>
	);
}

export default Imagem;
