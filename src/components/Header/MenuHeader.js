import styles from "./MenuHeader.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from "reactstrap";

const MenuHeader = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className={styles.header}>
			<Navbar className={styles.listaHeader} light expand="lg">
				<NavbarToggler onClick={toggle}></NavbarToggler>
				<Collapse isOpen={isOpen} navbar>
					<Nav className={styles.listaHeader + " " + "ml-auto"} navbar>
						<NavItem>
							<Link
								to="/drinks"
								className={styles.ancoraHeader}
								onClick={toggle}
							>
								Drinks
							</Link>
						</NavItem>
						<NavItem>
							<Link
								to="/sobre"
								className={styles.ancoraHeader}
								onClick={toggle}
							>
								Sobre Nós
							</Link>
						</NavItem>
						<NavItem>
							<Link
								to="/"
								className={styles.ancoraHeader + " " + styles.ancoraLogo}
								onClick={toggle}
							>
								Bons Drinks
							</Link>
						</NavItem>
						<NavItem>
							<Link
								to="/nossoTime"
								className={styles.ancoraHeader}
								onClick={toggle}
							>
								Nosso Time
							</Link>
						</NavItem>
						<NavItem>
							<Link
								to="/contato"
								className={styles.ancoraHeader}
								onClick={toggle}
							>
								Contato
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MenuHeader;
