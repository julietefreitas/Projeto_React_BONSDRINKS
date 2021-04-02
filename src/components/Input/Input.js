import "./Input.css";
import React, { useState } from "react";

const Input = ({ label, input, htmlFor, id, name, type, children }) => {
	const [entrada, setEntrada] = useState("");

	const event = (e) => {
		setEntrada(e.target.value);
		console.log(entrada);
	};

	return (
		<>
			<label htmlFor={htmlFor} className={"LabelForm" + " " + label}>
				{children}
			</label>
			<br></br>
			<input
				type={type}
				id={id}
				name={name}
				className={"InputForm" + " " + input}
				value={entrada}
				onChange={event}
				required
			/>
			<br></br>
		</>
	);
};
export default Input;
