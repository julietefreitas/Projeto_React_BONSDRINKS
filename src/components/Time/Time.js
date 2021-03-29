import React from "react";
import style from "./Time.module.css";
import perfil from "../../assets/Juliete.jpeg";

const Time = () => {
	return (
		<section className={style.nosso_time}>
			<h1 className={style.titulo}>Nosso Time</h1>
			<img src={perfil} className={style.imagem_perfil} />
			<p className={style.texto_perfil}>
				Ao longo de seis meses de intensivo na Resilia, desenvolveu habilidades
				técnicas de front-end, back-end e também habilidades interpessoais. Se
				destacou desenvolvendo o projeto ResiliaFlix, site que fornecia
				informações sobre filmes e séries, e utilizava linguagens como HTML,
				CSS, JavaScript e Bootstrap. Já vivenciou experiência corporativa com
				suporte e atendimento ao cliente e também com a mentoria empresarial da
				empresa M4U, desenvolvendo um site responsivo que atendesse a venda e
				recarga de chip's de operadoras, utilizando-se de Node.js, JS, React.Js
				e Spectre CSS. Atualmente está aprofundando seus conhecimentos sobre
				React.js , gestão do tempo e produtividade.
			</p>
		</section>
	);
};

export default Time;
