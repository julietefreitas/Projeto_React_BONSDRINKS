import "./App.css";
import Footer from "./components/Footer/Footer";
import MenuHeader from "./components/Header/MenuHeader";
import Formulario from "./components/Formulario/Formulario";
import ImagemContato from "./components/ImagemContato/ImagemContato";
import logoContato from "./imagens/contact-pic.jpg";

function App() {
	return (
		<div className="App">
			<MenuHeader />
			<Formulario />
			<Footer />
			<ImagemContato foto={logoContato} />
		</div>
	);
}

export default App;
