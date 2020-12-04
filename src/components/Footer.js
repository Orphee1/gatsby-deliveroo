import React from "react"
import styled from "styled-components"
import { appStore, googleplay } from "../images"
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <Wrapper>
      <div className="card-container">
        <div className="card">
          <h3>Découvrir Deliveroo</h3>
          <p>A propos</p>
          <p>Espace presse</p>
          <p>Blog Foodscene</p>
          <p>Blog Tech</p>
          <p>Blog Design</p>
          <p>Nous rejoindre</p>
          <p>Inscription restaurant</p>
        </div>
        <div className="card">
          <h3>Mentions légales</h3>
          <p>Mentions légales</p>
          <p>Confidentialité</p>
          <p>Cookies</p>
        </div>
        <div className="card">
          <h3>Aider</h3>
          <p>Nous contacter</p>
          <p>FAQ</p>
          <p>Types de cuisine</p>
          <p>Plan du site</p>
        </div>
        <div className="card">
          <h3>Gardez Deliveroo dans votre poche</h3>
          <img src={appStore} alt="appstore" />
          <img src={googleplay} alt="googleplay" />
        </div>
      </div>
      <div className="bottom">
        <div className="icon-wrapper">
          <FaFacebook
            fontSize="1.5rem"
            style={{ color: "white", marginRight: "1rem" }}
          />
          <FaTwitter
            fontSize="1.5rem"
            style={{ color: "white", marginRight: "1rem" }}
          />
          <FaInstagram
            fontSize="1.5rem"
            style={{ color: "white", marginRight: "1rem" }}
          />
        </div>
        <div>
          <span>&copy; {new Date().getFullYear()} Deliveroo</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  width: 100%;
  height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  background: var(--cl-grey-1);
  .card-container {
    width: 95vw;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
  }
  .card {
    width: 20rem;
    height: 17rem;
    flex-shrink: 0;
    background: var(--cl-grey-2);
    border-radius: var(--radius);
    margin: 0 1rem;
    padding: 1rem;
    color: var(--clr-white);
    p {
      color: var(--clr-white);
    }
  }
  .card img {
    width: 10rem;
    margin-bottom: 0.5rem;
  }
  .bottom {
    width: 95vw;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    span {
      color: var(--cl-grey-6);
    }
  }
  .icon-wrapper {
    margin-left: 1rem;
  }
  @media screen and (min-width: 768px) {
  }
`
