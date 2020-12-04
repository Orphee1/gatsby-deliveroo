import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import {
  AiOutlineExclamationCircle,
  MdPeopleOutline,
  FaStar,
} from "react-icons/all"
import delivery from "../images/delivery.png"

const Hero = ({ restau }) => {
  const {
    burger,
    desserts,
    foodNationality,
    freeDelivery,
    image,
    info,
    location,
    meal,
    offers,
    petiteFaim,
    rate,
    schedule,
    sector,
    title,
  } = restau

  return (
    <Wrapper>
      <div className="img-container">
        <Image fluid={image.fluid} />
      </div>
      <p className="l-title-container">
        <span style={{ marginLeft: "0" }}>Accueil</span>/ <span>{sector}</span>/
        <span style={{ color: " #8b8d8d" }}>{title}</span>
      </p>
      <article className="title-container">
        <div>
          <h1>{title}</h1>
          <div className="rate">
            <FaStar fontSize="1.3rem" style={{ color: "#01717C" }} />
            <FaStar fontSize="1.3rem" style={{ color: "#01717C" }} />
            <FaStar fontSize="1.3rem" style={{ color: "#01717C" }} />
            <FaStar fontSize="1.3rem" style={{ color: "#01717C" }} />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              {rate}
            </span>
          </div>
          <p>
            <span style={{ marginLeft: "0" }}>{foodNationality}</span>°
            <span>{meal}</span>°<span>{schedule}</span>°
            <span>{location.location}</span>°
            <span style={{ color: "#00ccbb" }}>Afficher le plan</span>
          </p>
        </div>
        <p>{info.info}</p>
      </article>
      <div className="btn-container">
        <button className="btn">
          <MdPeopleOutline
            fontSize="1.5rem"
            style={{ color: "#00ccbc", marginRight: "0.5rem" }}
          />
          Démarrer une commande groupée
        </button>
      </div>
      <div className="location-container">
        <img src={delivery} alt="scooter-icon" />
        <div className="calculate">
          <p style={{ color: "#2e3333", fontSize: "1.4rem" }}>13:45</p>
          <p style={{ color: "#8b8d8d" }}>
            10 Cours Victor Hugo, 33000 Bordeaux, France
          </p>
        </div>
        <span style={{ color: "#00ccbc", fontSize: "1.2rem" }}>Modifier</span>
      </div>
      <div className="alert-container">
        <AiOutlineExclamationCircle
          fontSize="2rem"
          style={{ color: "#2e3333", marginRight: "1rem" }}
        />
        <div>
          <p style={{ color: "#2e3333", fontSize: "1.4rem" }}>
            Infos restaurant
          </p>
          <p style={{ color: "#00ccbc" }}>Allergènes et plus</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: repeat (6, auto);
  grid-row-gap: 0.2rem;
  .img-container {
    grid-row: 1/2;
  }
  .img-container div {
    height: 200px;
  }
  .l-title-container {
    grid-row: 2/3;
    width: 95vw;
    justify-self: center;
    padding: 0 1rem;
    color: var(--cl-grey-6);
    span {
      color: var(--clr-turq);
      margin: 0 0.5rem;
    }
  }
  .title-container {
    grid-row: 3/4;
    width: 95vw;
    justify-self: center;
    padding: 0 1rem;
    span {
      margin: 0 0.5rem;
    }
  }
  .rate {
    display: inline-block;
  }
  .btn-container {
    grid-row: 4/5;
    width: 95vw;
    justify-self: center;
    padding: 1rem;
    border-bottom: 1px solid var(--cl-grey-5);
    button {
      color: var(--clr-turq);
      width: 100%;
      padding: 1.2rem 1rem;
      display: flex;
      justify-content: center;
    }
  }
  .location-container {
    grid-row: 5/6;
    width: 95vw;
    justify-self: center;
    padding: 1rem;
    border-bottom: 1px solid var(--cl-grey-5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 30px;
    }
  }
  .calculate {
    width: 300px;
  }

  .alert-container {
    grid-row: 6/7;
    width: 95vw;
    justify-self: center;
    padding: 1rem;
    border-bottom: 1px solid var(--cl-grey-5);
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 810px) {
    display: grid;
    grid-template-columns: 5vw 60vw 30vw 5vw;
    grid-column-gap: 0.3rem;
    grid-template-rows: 5vh repeat(4, auto);
    grid-row-gap: 0.3rem;
    .img-container {
      grid-column: 3/4;
      grid-row: 2/5;
      div {
        width: 100%;
      }
    }
    .l-title-container {
      grid-column: 2/3;
      grid-row: 2/3;
      width: 100%;
      padding: 0;
    }
    .title-container {
      grid-column: 2/3;
      grid-row: 3/4;
      justify-self: flex-start;
      width: 100%;
      padding: 0;
    }
    .btn-container {
      grid-column: 3/4;
      grid-row: 5/6;
      width: 100%;
      padding: 1rem 0;
      border: none;
    }
    .location-container {
      grid-column: 3/4;
      grid-row: 4/5;
      width: 100%;
      padding: 1rem 0;
      border: none;
    }
    .alert-container {
      grid-column: 2/3;
      grid-row: 4/6;
      width: 100%;
      padding: 0;
      /* align-self: flex-start; */
    }
  }
`
