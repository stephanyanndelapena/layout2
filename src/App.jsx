import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function OuterGreen() {
  return (
    <div className="outer-green">
      <BlueBoxtop />
      <div className="middle-row">
        <div className="big-pink"></div>
        <div className="right-col">
          <div className="small-pink"></div>
          <div className="small-pink"></div>
        </div>
      </div>
      <BlueBoxBottom />
    </div>
  )
}
function BlueBoxtop() {
  return (
    <div className="blue-box-top">
      <Row />
    </div>
  )
}
function Row() {
  return (<div className="rowtop">
    <PeachBox />
    <PeachBox1 />
    <PeachBox />
  </div>
  )
}
function PeachBox() {
  return (
    <div className="peach-box">
    </div>
  )
}
function PeachBox1() {
  return (
    <div className="peach-box">
      <RedBox />
    </div>
  )
}
function RedBox() {
  return (
    <div className="red-box">
      <PinkLeft name="Stephany" />
      <PinkRight name="Dela Pena" />
    </div>
  )
}
function PinkLeft(props) {
  return (
    <div className="pink-left">{props.name}
    </div>
  )
}
function PinkRight(props) {
  return (
    <div className="pink-right">{props.name}
    </div>
  )
}
function BlueBoxBottom() {
  return (
    <div className="blue-box-bot">
      <Row1 />
    </div>
  )
}
function Row1() {
  return (<div className="rowbot">
    <PurpleBox />
    <SmallPeach text="C-PCIT9" />
    <SmallPeach text="IT3A" />
    <PurpleBox />
  </div>
  )
}
function PurpleBox() {
  return (
    <div className="purple-box">
    </div>
  )
}
function SmallPeach(props) {
  return (
    <div className="small-peach">{props.text}
    </div>
  )
}
function App() {
  return (
    <OuterGreen />
  );
}

export default App
