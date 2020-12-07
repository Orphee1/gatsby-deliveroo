import React from "react"
import { Layout, SEO } from "../components"
import styled from "styled-components"
import { AiFillLock, AiOutlineClockCircle } from "react-icons/ai"

const Checkout = () => {
  return (
    <Layout>
      <SEO title="Checkout" />
      <Wrapper>
        <section className="top">
          <div className="center">
            <h1>Mister French'is</h1>
            <div className="s-b">
              <AiOutlineClockCircle
                fontSize="2rem"
                style={{ color: "#ffffff", marginRight: "0.5rem" }}
              />
              <p>Livré entre 19:15 et 19:45</p>
            </div>
          </div>
        </section>
        <section className="body">
          <div className="center">
            <article className="contact-form">
              <form action="">
                <div className="form-group">
                  <h3>Adresse de livraison</h3>
                  <p>Etage et numéro d'appartement</p>
                  <input
                    type="text"
                    placeholder="ex: Appartement n°15"
                    className="form-control"
                  />
                  <p>Digicode</p>
                  <input
                    type="text"
                    placeholder="ex: B123"
                    className="form-control"
                  />
                  <p>Adresse</p>
                  <input
                    type="text"
                    placeholder="ex: 100 rue de Rivoli"
                    className="form-control"
                  />
                  <p>Code postal</p>
                  <input
                    type="text"
                    placeholder="ex: 75001"
                    className="form-control"
                  />
                  <p>Numéro de téléphone</p>
                  <input
                    type="text"
                    placeholder="+33 9 77 55 03 30"
                    className="form-control"
                  />

                  {/* <button type="submit" className="btn submit-btn">
                    Envoyer
                  </button> */}
                </div>

                <div className="form-group">
                  <h3>Moyen de paiement</h3>
                  <p>Numéro de carte</p>
                  <input
                    type="text"
                    placeholder="Numéro de carte"
                    className="form-control"
                  />
                  <div className="s-b">
                    <div>
                      <p>Date d'expiration</p>

                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <p>Code de sécurité</p>

                      <input
                        type="text"
                        placeholder="CVV"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn">
                    <AiFillLock
                      fontSize="1.2rem"
                      style={{ color: "white", marginRight: "0.5rem" }}
                    />
                    Commander avec livraison
                  </button>
                </div>
              </form>
            </article>
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

export default Checkout

const Wrapper = styled.main`
  min-height: 100vh;
  height: auto;
  margin: 0;
  background: #006d69;

  .top {
    width: 100%;
    height: 30vh;
    margin: 0 auto;
    display: grid;
    place-items: center;
    padding: 1rem 0;
    h1,
    p {
      color: var(--clr-white);
    }
    .center {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
  .body {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 1rem 0 2rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: var(--clr-white);
  }
  .contact-form {
    text-align: flex-start;
    width: 90vw;
    max-width: 35rem;
  }

  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }
  .form-group {
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--cl-grey-6);
    margin-bottom: 1.25rem;
    border-radius: var(--radius);
  }
  .form-control::placeholder {
    font-weight: 300;
    font-size: 1rem;
    font-weight: lighter;
    color: var(--cl-grey-6);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    border: none;
    color: var(--clr-white);
    background: var(--clr-turq);
  }
`
