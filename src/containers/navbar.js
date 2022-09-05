import React, { useContext } from "react"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"
import { deliveroo } from "../images"
import { formatPrice } from "../utils/helpers"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaHome } from "react-icons/fa"
import { BiBasket } from "react-icons/bi"
import { Navbar } from "../components"

export function NavBarContainer() {
  const globalData = useContext(GatsbyContext)
  const { subTotal } = globalData
  return (
    <Navbar>
      <Navbar.Row>
        <Link to="/">
          <Navbar.Image src={deliveroo} alt="Deliveroo" />
        </Link>
        <Navbar.List>
          <Navbar.ListItem>
            <Navbar.Button>
              <BiBasket />
              <Navbar.Text>{formatPrice(subTotal)}</Navbar.Text>
            </Navbar.Button>
          </Navbar.ListItem>
          <Navbar.ListItem>
            <Navbar.Button>
              <FaHome />
              <Navbar.Text>Inscription ou connexion</Navbar.Text>
            </Navbar.Button>
          </Navbar.ListItem>
          <Navbar.ListItem>
            <Navbar.Button>
              <GiHamburgerMenu />
              <Navbar.Text>Menu</Navbar.Text>
            </Navbar.Button>
          </Navbar.ListItem>
        </Navbar.List>
      </Navbar.Row>
    </Navbar>
  )
}
