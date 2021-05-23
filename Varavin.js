// import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import styled from 'styled-components';
import image from '../assets/QUE.jpg';
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import React from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
      <div>
          <p> Счетчик Тильта <dr>
              {count}</dr> </p>
          <button class="button" onClick={() => setCount(count - 1)}>
              Минус
          </button> &nbsp;

          <button class="button" onClick={() => setCount(count + 1)}>
              Плюс
          </button>
      </div>
  );
}
function App() {
  return (
    <PowerCleave>
    <div className="Varavin">
        <Image src={"https://i.giphy.com/media/UqUHuT6y9mK5HfsYFm/giphy.webp"} className="App-logo" alt="logo" />
            
        <Fearless>Варавин Е.А. Б-ИСиТ-41 </Fearless>
      <Example />
    </div>
    </PowerCleave>
  );

}
const Image = styled.img`
    height: 40vmin;
    pointer-events: none;
`;

const Fearless = styled.div`
    text-align: center;
    color: rgb(192, 30, 30);
    font-family: Bookman Old Style, Helvetica, sans-serif;
    font-style: oblique;
`;

const PowerCleave = styled.div`
    background: url(${image}) no-repeat;
    -moz-background-size: 100%;
    -webkit-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    text-align: center;
    color: rgb(25, 93, 182);
    font-family: Bookman Old Style, Helvetica, sans-serif;
    font-style: oblique;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
`;

export default App;