import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bomb from "../../Images/cool-bomb.png";
import bomb2 from "../../Images/bomb.jpg";
import Carousel from "../Carousel/Carousel";

function Landing() {
  return (
    <Wrapper>
      <img src={bomb2} alt="" style={{ width: "100%", marginTop: "15em" }} />
      <nav>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "50px"
          }}
        >
          <img
            src={bomb}
            alt="bomb"
            style={{
              height: "55px",
              width: "55px",
              border: "3px solid black",
              margin: "10px",
              borderRadius: "3px"
            }}
          />
          <h1>Keep Coding and Nobody Explodes</h1>
        </div>
        <NavLinks>
          <Link to="/info-page">
            <button>How To Play</button>
          </Link>
          <Link to="/info-tech-page">
            <button>Bomb Manual</button>
          </Link>
        </NavLinks>
      </nav>
      <Header>
        <div className="text">
          <h1>Welcome!</h1>
          <p>
            To the game that will test your nerves, your communication skills,
            and your coding ability!
          </p>
        </div>
        <Link to="/desk">
          <Play>Play Now!</Play>
        </Link>
      </Header>
      <div className="carousel">
        <Carousel />
      </div>
      <About>
        <h1>About</h1>
        <p>
          A multiplayer game designed to test your skills at solving coding problems while having fun defusing a bomb.
          Created by students at DevMountain as a group project. The idea came from a game called Keep Talking Or Explode,
          only in this game you have to solve coding problems in order to get the answers needed to defuse the bomb. 
        </p>
      </About>
      <footer>
        <h2>Made In Gods Country! ask Bryan he knows!</h2>
      </footer>
    </Wrapper>
  );
}

export default Landing;

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Walter Turncoat", cursive;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: fill;
  top: 0;

  nav {
    display: flex;
    width: 100%;
    height: 4em;
    position: fixed;
    top: 0px;
    align-items: center;
    justify-content: space-between;
    background: -webkit-linear-gradient(left, #888b91 10%, #d1d2d3, #888b91);
    z-index: 2;
    h1 {
      background: -webkit-linear-gradient(45deg, black, darkred, black, red);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
      padding: 10px;
    }
  }
  footer {
    background:rgb(124, 101, 93);
    width: 100%;
    height: 4em;
    margin-top: 0em;
    display: flex;
    text-align: center;
    align-content: center;
    justify-content: center;
    color: rgb(0, 0, 0, 0.5);
    border: 5px dashed rgb(0, 0, 0, 0.3);
  }
  .carousel {
    position: absolute;
    left: 45%;
  }
`;
const NavLinks = styled.div`
  margin-right: 2em;

  button {
    background: -webkit-linear-gradient(135deg, red, black, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* background: none; */
    margin-right: 2em;
    padding: 10px 10px;
    font-size: 18px;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      animation: pulse 1s linear ;
      
    }
  }
  @-webkit-keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    50% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    50% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  .pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }
`;
const Play = styled.button`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  align-self: center;
  background: -webkit-radial-gradient( darkred, black);
  color: black;
  font-size: 45px;
  outline: none;
  border: none;
  margin-top: 40px;
  font-family: "Walter Turncoat", cursive;
  font-weight: bold;
  box-shadow: 5px 5px 10px rgb(16, 18, 20);
  cursor: pointer;
  &:hover {
    animation: bounce 1s linear;
    color: slategray;
  }
  @-webkit-keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -30px, 0);
      transform: translate3d(0, -30px, 0);
    }

    70% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -15px, 0);
      transform: translate3d(0, -15px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -4px, 0);
      transform: translate3d(0, -4px, 0);
    }
  }

  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -30px, 0);
      transform: translate3d(0, -30px, 0);
    }

    70% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -15px, 0);
      transform: translate3d(0, -15px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -4px, 0);
      transform: translate3d(0, -4px, 0);
    }
  }

  .bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }
  
`;
const Header = styled.header`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: row;
  position: absolute;
  top: 4rem;
  background: -webkit-linear-gradient(135deg, #2d2d2d, #555656, #2d2d2d);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
  z-index: 1;
  font-family: "Walter Turncoat", cursive;
  font-weight: bold;
  h1 {
    font-size: 70px;
    margin: 8px;
    padding: 0;
    margin-left: 30px;
    background: -webkit-linear-gradient(45deg, black, red, #222);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 25px;
    text-shadow: 5px 5px 50px whitesmoke;
    margin: 0px;
  }

  .text {
    width: 40%;
    position: top;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
const About = styled.div`
  width: 100%;
  height: 370px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: -5vw;
  font-family: "Walter Turncoat", cursive;
  background: -webkit-linear-gradient(135deg, #2d2d2d, #555656, #2d2d2d);
  clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 100%);
  p {
    width: 50%;
    background-color: rgb(0, 0, 0, 0.6);
    font-size: 20px;
    color: darkgray;
    padding: 18px;
    border: none;
    text-shadow: 5px 5px 50px whitesmoke;
    transform:  skewX(-15deg) ;
  }
  h1 {
    color: orangered;
    font-size: 50px;
    margin: 5px;
    text-decoration: underline;
    /* text-shadow: 5px 5px 20px black; */
    background: -webkit-linear-gradient(45deg, red, black, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
