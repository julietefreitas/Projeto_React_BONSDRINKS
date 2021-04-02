import React from "react";
import style from "./Time.module.css";
import perfil from "../../assets/Juliete.jpeg";
import woman1 from "../../assets/woman1.jpg"
import woman2 from "../../assets/woman2.jpg"
import man1 from "../../assets/man1.jpg"

const Time = () => {
	return (
		<section className={style.nosso_time}>
			<h1 className={style.titulo}>Nosso Time</h1>
			<div className= {style.time1}> 
				<img src={perfil} className={style.imagem_perfil1 + " " +  style.imagemPerfis} />
				<p className={style.texto_perfil1 + " " +  style.textoPerfis}>
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
			</div>
			<div className= {style.time2}> 
				<img src={woman1} className={style.imagem_perfil2 + " " +  style.imagemPerfis} />
				<p className={style.texto_perfil2 + " " +  style.textoPerfis}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit.
				</p>
			</div>
			<div className= {style.time3}>
				<img src={woman2} className={style.imagem_perfil3 + " " +  style.imagemPerfis} />
				<p className={style.texto_perfil3 + " " +  style.textoPerfis}>
				Augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo.
				</p>
			</div>
			<div className= {style.time4}>
				<img src={man1} className={style.imagem_perfil4 + " " +  style.imagemPerfis} />
				<p className={style.texto_perfil4 + " " +  style.textoPerfis}>
				Nunc varius arcu tortor, sit amet rutrum urna facilisis id. Mauris mattis in massa et condimentum. Proin dui leo, volutpat sed turpis a, malesuada commodo.
				</p>
			</div>
		</section>
	);
};

export default Time;
