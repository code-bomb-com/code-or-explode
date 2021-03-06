import React from 'react';
import styled from 'styled-components';
import Nuke from '../../Images/Nuke.mp4';
import { Link } from 'react-router-dom';

function Fail() {
  return (
    <FailDiv>
        <div className='text'><h1>MISSION FAILED!</h1> </div>
        
        <video  src={Nuke} autoPlay='true' ></video>
        <div className='btns'>
          <Link to='/'>
            <button> Return Home! </button>
          </Link>
          <Link to='/desk'>
            <button> Try Again! </button>
          </Link>
        </div>
    </FailDiv>
  )
}

export default Fail

const FailDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  background-size: cover;
  background-repeat: none;
  background-position: top center;
  display: flex;
  align-items: center;
  justify-content: center;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    min-height: 90%;
    /* width: auto;
    height: auto; */
    z-index: 1;
  }
  .text {
    position: absolute;
    z-index: 2;
    font-size: 50px;
    color: darkred;
    font-family: "Walter Turncoat", cursive;
    font-weight: bold;
    top: 40%; 
    background: rgb(0, 0, 0, .8) ;
    /* border-radius: 20px; */
    transform:  skewX(-20deg) ;
    h1 {
      text-align: center;
      text-shadow: 2px 2px 60px red;
      background: -webkit-linear-gradient( darkred, darkred);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: flash 2s infinite linear;
      margin: 20px;
    }
  }
  @-webkit-keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
  }

  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }

  .flash {
    -webkit-animation-name: flash;
    animation-name: flash;
  }
  .btns {
    position: absolute;
    z-index: 2;
    bottom: 5%;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    button {
      width: 250px;
      height: 130px;
      border-radius: 10px;
      align-self: center;
      cursor: pointer;
      background: -webkit-radial-gradient( darkred, black);
      color: black;
      font-size: 45px;
      outline: none;
      border: none;
      
      font-family: "Walter Turncoat", cursive;
      font-weight: bold;
      box-shadow: 5px 5px 10px rgb(16, 18, 20);
      &:hover {
       color: whitesmoke;
       border: 2px solid red; 
      }
    }
  }
`;

// const FailDiv = styled.div`
// position: absolute;
// height: 100%;
// width: 100%;
// background-color: #888;
// `