import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'

const Flashing = keyframes`
  0%{
      
      background: white;
      color: black;
      font-weight: normal;
      border: 10px double;
      }
  25%{
     
      background: red;
      color: white;
      font-weight: normal;
      border: 10px double;
      }
  50%{
    
      background: white;
      color: black;
      font-weight: normal;
      border: 10px double;
      }
  75%{
      
      background: red;
      color: white;
      font-weight: normal;
      border: 10px double;
      }
  100%{
     
      background: white;
      color: black;
      font-weight: normal;
      border: 10px double;
      }
}
`;



const Flash = styled.button`
font-size: 5vw;
border-radius: 100%;
padding: 7vw;
background-color: white;
color: black;
border: 10px double;
outline: none;
box-shadow: 5px 5px 5px black;
text-shadow: 2px 2px 5px black;
animation: ${Flashing} 2.5s infinite 0s linear;
`





export default function FlashingButton() {

 function stopFlashing(e) {
  let tripple = e.detail
  console.log(e.detail)
  if (tripple === 3) {
    return alert('stop Flashing')
  }
 }


  return (
    <div>
      
      <Flash onClick={stopFlashing}>Push It</Flash>
    
    </div>
  )
}