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

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="toggleMe" color="orange">
			<Navbar>
				<NavbarBrand href="/">Homme</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink href="/components/">About Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">
								 Locatations
							</NavLink>
						</NavItem>
					</Nav>
					<NavbarText>Order Now </NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavBar;
