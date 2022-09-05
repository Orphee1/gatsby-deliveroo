import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  IoIosInformationCircleOutline,
  MdPeopleOutline,
  FaStar,
  FaChevronRight,
} from "react-icons/all"
import { Hero } from "../components"
import delivery from "../images/delivery.png"

export const HeroContainer = ({ restau }) => {
  const {
    foodNationality,
    image,
    info,
    location,
    meal,
    rate,
    schedule,
    sector,
    title,
  } = restau

  console.log(restau)

  return (
    <Hero>
      <Hero.Row>
        <Hero.ImageContainer>
          <GatsbyImage image={image.gatsbyImageData} alt="burger" />
        </Hero.ImageContainer>
        <Hero.InfoContainer>
          <Hero.Article>
            <Hero.Title>{title}</Hero.Title>
            <Hero.Text>25 - 40 mn • {meal}</Hero.Text>
            <Hero.TextBox>
              <Hero.Icon mr="10px" color="#01747e">
                <FaStar />
              </Hero.Icon>
              <Hero.Text color="#01747e">{rate} Bien</Hero.Text>
              <Hero.Text>(500+) •</Hero.Text>
              <Hero.Text>À 1.01km •</Hero.Text>
              <Hero.Text>Livraison offerte •</Hero.Text>
              <Hero.Text>10,00€ minimum</Hero.Text>
            </Hero.TextBox>
            <Hero.Button width="225px">
              <Hero.Icon width="26px" height="26px" mr="10px" color="#aaacac">
                <IoIosInformationCircleOutline />
              </Hero.Icon>
              <Hero.TextBox layout="column">
                <Hero.Text>Informations</Hero.Text>
                <Hero.Text color="#424848" fs="0.87rem">
                  Allergènes et plus
                </Hero.Text>
              </Hero.TextBox>
              <Hero.Icon width="18px" height="18px" ml="10px" color="#00ccbb">
                <FaChevronRight />
              </Hero.Icon>
            </Hero.Button>
          </Hero.Article>
          <Hero.Aside>
            <Hero.Button width="350px">
              <Hero.Image
                width="25px"
                mr="10px"
                src={delivery}
                alt="delivery icon"
              />
              <Hero.Text mr="10px">Livrée dans 25 - 40 min</Hero.Text>
              <Hero.Text color="#00ccbb">Modifier</Hero.Text>
            </Hero.Button>

            <Hero.ButtonFixed width="350px" btn>
              <Hero.Icon color="#00ccbb" width="18px" height="18px" mr="10px">
                <MdPeopleOutline />
              </Hero.Icon>
              <Hero.Text>Démarrer une commande groupée</Hero.Text>
            </Hero.ButtonFixed>
          </Hero.Aside>
        </Hero.InfoContainer>
      </Hero.Row>
    </Hero>
  )
}
