import styled from "styled-components"

export interface IClockProps {
  hour: number;
  minute: number;
  seconds: number;
}

interface IDataProps {
  time: IClockProps
}

export const AppContainer = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
background-color: black;
height: 100%;
width: 100%;
padding: 20px;
`

export const Clock = styled.div`
background-color: white;
border-radius: 50%;
border: red 1px solid;
height: 20rem;
width: 20rem;
margin-bottom:0.5rem;
position: relative;
margin-left: 42%;
margin-right: 42%;
`


export const Hours = styled.div.attrs<IDataProps>(({ time }) => ({
  transform: `rotateZ(${(time.hour % 12) * 30}deg)`,
})) <IDataProps>`
  background-color: black;
  border-radius: 2.5px;
  height: 130px;
  left: calc(50% - 2.5px);
  position: absolute;
  top: 35px;
  width: 5px;
  transform-origin: center calc(100% - 5px);
  

`
export const Minutes = styled(Hours)`
  height: 145px;
  top: 20px;
  width: 3px;

  transform: rotateZ(${({ time }) => (time.minute * 60 + time.seconds) * 0.1}deg);
`

export const Seconds = styled(Hours)`
  background-color: red;
  height: 150px;
  top: 15px;
  width: 1px;
  transform: rotateZ(${({ time }) => time.seconds * 6}deg);

`

export const Semicircle = styled.div`
width: 20rem;
  height: 10rem;
  background-color: blueviolet;
  border-radius: 10rem 10rem 0 0;
  position: relative;
  margin-left: 42%;
  margin-right: 42%;
  margin-top: 25px;
`
