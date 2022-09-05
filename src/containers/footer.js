import React from "react"
import { Footer } from "../components"
import { appAndGoogle, appStore, googleplay } from "../images"

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Row>
        <Footer.Column>
          <Footer.Title>Découvrir Deliveroo</Footer.Title>
          <Footer.Link href="#">Investisseurs</Footer.Link>
          <Footer.Link href="#">À propos</Footer.Link>
          <Footer.Link href="#">Vente à emporter</Footer.Link>
          <Footer.Link href="#">Voir plus</Footer.Link>
          <Footer.Link href="#">Espace presse</Footer.Link>
          <Footer.Link href="#">Blog Foodscene</Footer.Link>
          <Footer.Link href="#">Blog Tech</Footer.Link>
          <Footer.Link href="#">Blog Design</Footer.Link>
          <Footer.Link href="#">Nous rejoindre</Footer.Link>
          <Footer.Link href="#">Inscription restaurant</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Mentions légales</Footer.Title>
          <Footer.Link href="#">Mentions légales</Footer.Link>
          <Footer.Link href="#">Confidentialité</Footer.Link>
          <Footer.Link href="#">Cookies</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Aide</Footer.Title>
          <Footer.Link href="#">Nous contacter</Footer.Link>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Types de cuisine</Footer.Link>
          <Footer.Link href="#">Plan du site</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Gardez Deliveroo dans votre poche</Footer.Title>
          <Footer.Link href="#">
            <Footer.Image src={appAndGoogle} alt="App Store and Google Play" />
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>

      <Footer.Bottom />
    </Footer>
  )
}
