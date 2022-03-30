import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from "reactstrap";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand className="me-auto" href="/">
          My TV Shows
        </NavbarBrand>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      ;
    </div>
  );
};

export default Header;
