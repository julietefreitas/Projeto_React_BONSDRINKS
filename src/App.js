import "./App.css";
import Footer from "./components/Footer/Footer";
import MenuHeader from "./components/Header/MenuHeader";
import Formulario from "./components/Formulario/Formulario";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SobreNos from "./components/SobreNos/SobreNos";
import Home from "./components/Home/Home";
import Drinks from "./components/Drinks/Drinks";
import DrinksPopulares from "./components/DrinksPopulares/DrinksPopulares";
import Time from "./components/Time/Time";

const App = () => {
	return (
		<div className="App">
			<Router>
				<MenuHeader />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/contato">
						<Formulario />
					</Route>
					<Route exact path="/sobre">
						<SobreNos />
					</Route>
					<Route exact path="/nossoTime">
						<Time />
					</Route>
					<Route exact path="/drinks/">
						<Drinks />
					</Route>
					<Route exact path="/drinks/pop">
						<DrinksPopulares/>
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
