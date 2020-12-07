import React, { useContext } from "react"
import styled from "styled-components"
import {
  AiOutlineExclamationCircle,
  FiMinusCircle,
  FiPlusCircle,
  MdClose,
} from "react-icons/all"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyContext } from "../context/context"

const query = graphql`
  {
    file(relativePath: { eq: "image_missing.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Modal = ({ toggleModal }) => {
  const { file } = useStaticQuery(query)
  const {
    childImageSharp: { fluid },
  } = file
  const missing = fluid
  const globalData = useContext(GatsbyContext)
  const [counter, setCounter] = React.useState(1)
  //   console.log(globalData)

  const {
    addProduct,
    product: { id, image, price, recipe, slug, title, type },
    removeProduct,
    //     subTotal,
  } = globalData

  React.useEffect(() => {
    setCounter(1)
  }, [toggleModal])

  return (
    <Wrapper className="">
      <header className="top-title">
        <h3>{title}</h3>
        <button
          className="toggle-btn"
          onClick={() => {
            removeProduct({
              title: title,
              price: price,
              id: id,
            })
            toggleModal()
          }}
        >
          <MdClose fontSize="2rem" style={{ color: "#00ccbb" }} />
        </button>
      </header>
      <section className="modal-content">
        {image ? (
          <div className="img-container">
            <Image fluid={image.fluid} />
          </div>
        ) : (
          <div className="img-container">
            <Image fluid={missing} />
          </div>
        )}

        <div className="info-container">
          {recipe && <p>{recipe.recipe}</p>}
          {type && <p>{type}</p>}
        </div>

        {slug && slug.indexOf("burger") !== -1 && (
          <div className="add-container">
            <div className="alert">
              <AiOutlineExclamationCircle
                fontSize="1rem"
                style={{ color: "#2e3333", marginRight: "0.5rem" }}
              />
              <p>
                Offre valable uniquement sur le plat de base, hors suppléments
              </p>
            </div>
            <div className="sup-title">
              <h3>Suppléments</h3>
              <p>Ajoutez des suppléments à votre burger!</p>
            </div>
            <div className="sup-item">
              <span>Steack de boeuf haché 120g</span>
              <span>(+3,50 €)</span>
            </div>
            <div className="sup-item">
              <span>Bacon fumé</span>
              <span>(+1,50 €)</span>
            </div>
            <div className="sup-item">
              <span>Oeuf</span>
              <span>(+1,50 €)</span>
            </div>
            <div className="sup-item">
              <span>Cheddar</span>
              <span>(+1,50 €)</span>
            </div>
            <div className="sup-item">
              <span>Raclette</span>
              <span>(+1,50 €)</span>
            </div>
            <div className="sup-item">
              <span>Reblochon</span>
              <span>(+1,50 €)</span>
            </div>
            <div className="sup-item">
              <span>Camembert</span>
              <span>(+1,50 €)</span>
            </div>
            <div className="sup-item">
              <span>Chèvre</span>
              <span>(+1,50 €)</span>
            </div>
            <div className="sup-item">
              <span>Rösti de pommes de terre</span>
              <span>(+1,50 €)</span>
            </div>
          </div>
        )}

        <div className="counter">
          <button
            onClick={() => {
              if (counter > 0) {
                setCounter(counter - 1)
                removeProduct({
                  title: title,
                  price: price,
                  id: id,
                })
              }
            }}
          >
            <FiMinusCircle />
          </button>
          <span>{counter}</span>
          <button
            onClick={() => {
              setCounter(counter + 1)
              addProduct({
                title: title,
                price: price,
                id: id,
              })
            }}
          >
            <FiPlusCircle />
          </button>
        </div>
      </section>

      <footer className="bottom">
        <button className="btn" onClick={toggleModal}>
          Total {(price * counter).toFixed(2)} €
        </button>

        <button
          className="btn"
          onClick={() => {
            removeProduct({
              title: title,
              price: price,
              id: id,
            })
            toggleModal()
          }}
        >
          Annuler
        </button>
      </footer>
    </Wrapper>
  )
}

export default Modal

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  .top-title {
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid var(--cl-grey-5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    h3 {
      font-weight: 700;
      color: var(--clr-black);
    }
  }
  .toggle-btn {
    position: absolute;
    top: 10;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: auto;
  }

  .img-container {
    width: 90%;
    margin: 1rem auto;
  }
  .info-container {
    width: 90%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .alert {
    display: flex;
    align-items: baseline;
  }
  .add-container {
    width: 90%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      color: var(--cl-grey-2);
      font-size: 1.2rem;
    }
  }
  .sup-item {
    width: 100%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
  }
  .counter {
    width: 50%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 29vh; // ???? doesn't work on iPhone
    span {
      color: var(--clr-black);
      font-weight: bold;
      font-size: 2.1rem;
    }
    button {
      color: var(--clr-turq);
      font-weight: bold;
      font-size: 2rem;
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
    }
  }

  .bottom {
    /* opacity: 0; */
    position: absolute;
    bottom: 0;
    background: var(--clr-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 24vh;
    border-top: 1px solid var(--cl-grey-5);
    padding: 0.5rem 0 1rem 0;
    /* -webkit-box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.47);
    box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.47); */
    button {
      width: 90%;
      height: 4.6rem;
      color: var(--clr-white);
      background: var(--clr-turq);
      display: flex;
      justify-content: center;
      margin: 0.5rem auto;
    }
    button:nth-child(2) {
      color: var(--clr-turq);
      background: var(--clr-white);
    }
  }

  @media screen and (min-width: 810px) {
  }
`
