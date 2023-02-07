import React, { useContext } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { CartContext } from "../context/cart-context"
import { Link } from "gatsby"
import { deliveroo } from "../images"
import { formatPrice } from "../utils/helpers"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaHome } from "react-icons/fa"
import { BiBasket } from "react-icons/bi"
import { Navbar } from "../components"

export function NavBarContainer() {
  const { subTotal } = useContext(CartContext)
  const { isAuthenticated, isLoading, user } = useAuth0()

  !isLoading && isAuthenticated && console.log(user)

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
            {isAuthenticated && (
              <Navbar.Button>
                {/* <Navbar.Text>Devenir partenaire</Navbar.Text> */}
                <Navbar.Text>{user.nickname}</Navbar.Text>
              </Navbar.Button>
            )}
            {!isAuthenticated && (
              <Link to="/signin">
                <Navbar.Button>
                  <FaHome />
                  <Navbar.Text>Inscription ou connexion</Navbar.Text>
                </Navbar.Button>
              </Link>
            )}
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
