import React, { Component } from "react";
import styles from "./ImagemContato.module.css";

export default class Imagemcontato extends Component {
	render() {
		return <img className={styles.imgContato} src={this.props.foto} />;
	}
}
