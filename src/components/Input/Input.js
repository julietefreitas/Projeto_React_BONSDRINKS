import "./Input.css";

export default function Input(props) {
	const label = props.infoLabel;
	const input = props.input;
	//console.log(label, input);
	return (
		<>
			<label className={"LabelForm" + " " + label}>{props.children}</label>
			<br></br>
			<input className={"InputForm" + " " + input} />
			<br></br>
		</>
	);
}
/* 
label1;
input1;
label2;
input2;
label3;
input3; */
