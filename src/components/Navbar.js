import React from "react"
import { deliveroo } from "../images"
import { GiHamburgerMenu, IoIosBasket, IoIosHome } from "react-icons/all"
import styled from "styled-components"

const Navbar = ({}) => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <img src={deliveroo} alt="deliveroo-icon" />
          <ul className="nav-links">
            <li className="remove-links">
              <button className="btn">
                <IoIosBasket />
                <span>0,00€</span>
              </button>
            </li>
            <li className="remove-links">
              <button className="btn">
                <IoIosHome />
                <span>Connexion</span>
              </button>
            </li>
            <li>
              <button className="btn">
                <GiHamburgerMenu />
                <span>Menu</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  background: var(--clr-white);
  border-bottom: 2px solid var(--cl-grey-5);
  .nav-center {
    width: 95vw;
    /* max-width:  */
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header img {
    width: 150px;
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .remove-links {
    display: none;
  }

  svg {
    color: var(--clr-turq);
    margin-right: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    .remove-links {
      display: block;
    }
  }
`
