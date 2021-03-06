import React, { Component } from "react";
import Imagemcontato from "../ImagemContato/ImagemContato";
import style from "./SobreNos.module.css";

export default class SobreNos extends Component {
	render() {
		return (
			<div className={style.main}>
				<h1 className={style.titulo}>Sobre Nós</h1>
				<Imagemcontato foto="https://www.familypower-blog.de/wp-content/uploads/bb-plugin/cache/kaizen-nguy-n-jcLcWL8D7AQ-unsplash-landscape.jpg" />
				<p className={style.texto}>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
					dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
					quia non numquam eius modi tempora incidunt ut labore et dolore magnam
					aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
					ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
					ea voluptate velit esse quam nihil molestiae consequatur, vel illum
					qui dolorem eum fugiat quo voluptas nulla pariatur.
				</p>
			</div>
		);
	}
}
