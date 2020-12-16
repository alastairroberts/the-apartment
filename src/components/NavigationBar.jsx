import React, { useState } from "react"
import { Nav, Navbar, Icon } from "rsuite"
import { Link } from "gatsby"

import Search from "./Search"

const styles = {
  navbarBrand: {
    padding: "18px 20px",
    display: "inline-block",
  },
  linkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
}
const MyLink = props => {
  const { iconObj, label, to, as, ...rest } = props

  return (
    <Link to={to} as={as} {...rest}>
      {iconObj} {label}
    </Link>
  )
}

export const NavLink = props => {
  return <Nav.Item {...props} componentClass={MyLink} />
}
const NavigationBar = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <Navbar appearance="subtle">
      <Navbar.Header>
        <Link to="/" style={styles.navbarBrand} className="logo">
          The Apartment
        </Link>
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight>
          <NavLink
            label="About"
            iconObj={<Icon icon="question2" />}
            to="/about"
          />
          <NavLink
            label="Contact"
            iconObj={<Icon icon="user-o" />}
            to="/contact"
          />

          <Nav.Item
            onClick={() => setShowSearch(true)}
            icon={<Icon icon="search" />}
          >
            {" "}
            Search
          </Nav.Item>
          <Search showSearch={showSearch} setShowSearch={setShowSearch} />
        </Nav>
      </Navbar.Body>
    </Navbar>
  )
}

export default NavigationBar
