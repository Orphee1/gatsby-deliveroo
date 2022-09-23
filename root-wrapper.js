import React, { Fragment } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { GatsbyProvider } from "./src/context/context"

const theme = {
  tablet: "1279px",
  media2: "959px",
  media3: "615px",
  mobile: "540px",
}

const GlobalStyle = createGlobalStyle`

/*
=============== 
Variables
===============
*/
:root {
  /* colors */
  --clr-turq: hsl(175, 100%, 40%);
  /* #00ccbb  */
  --clr-green: hsl(185, 98%, 25%);
  /* 	#01747e */
  --cl-grey-1: hsl(180, 5%, 19%); /* footer */
  --cl-grey-2: hsl(180, 4%, 27%); /* footer cards*/
  --clr-grey-3: hsl(180, 4%, 89%); /* empty cart btn */
  --clr-grey-4: hsl(180, 5%, 96%); /* background offers */
  --cl-grey-5: hsl(180, 5%, 92%); /* border-btn and header*/
  --cl-grey-6: hsl(180, 1%, 55%); /* text */
  /*  #8b8d8d  */
  --cl-grey-7: hsl(180, 2%, 40%); /* dark text */
  /* 	#646868 */
  --cl-grey-8: hsl(180, 1%, 67%);
  /* #aaacac */
  --clr-white: #ffffff;
  --clr-black: #2e3333;
  --clr-orange: #ff8100;

  /* grey used for paragraphs */

  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 700px;
}

/*
=============== 
Global Styles
===============
*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* font-family: var(--ff-secondary); */
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
  /* margin-top: 5rem; */
}
ul {
  list-style-type: none;
}

li {
  margin-left: 1rem;
}
a {
  text-decoration: none;
  font-size: 0.8rem; 
}

h1 {
  /* font-family: var(--ff-secondary); */
  margin-bottom: 0.7rem;
  font-size: 2.5rem;
  font-family: "Stratos", sans-serif;
  font-weight: 700;
  font-style: normal;
  opacity: 0.8; 
}
h2,
h3,
h4,
p {
  font-family: "IBM Plex Sans", sans-serif;
  margin-bottom: 0.3rem;
}

span,
a {
  font-family: "IBM Plex Sans", sans-serif;
}

p {
  color: var(--cl-grey-6);
}
p,
span {
  font-size: 1rem;
}

h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}

p {
  /* font-size: ; */
}

.btn {
  background: var(--clr-white);
  color: var(--clr-grey-7);
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border: 1px solid var(--cl-grey-5);
  cursor: pointer;
  border-radius: var(--radius);
}

.m-r_10 {
  margin-right: 10px;
}

.s-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.w_25 {
  width: 25px;
}
.w_225 {
  width: 225px;
}
.w_350 {
  width: 350px;
}


/*
=============== 
Debug
===============
*/

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

.orange {
  background-color: #f56b2b;
  color: #f56b2b;
}



`

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GatsbyProvider>{element}</GatsbyProvider>
    </ThemeProvider>
  )
}
