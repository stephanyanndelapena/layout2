import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
<div className="outer-green">
      <div className="blue-box-top">
        <div className="row">
          <div className="peach-box"></div>

          <div className="peach-box">
            <div className="red-box">
              <div className="pink-left"></div>
              <div className="pink-right"></div>
            </div>
          </div>

          <div className="peach-box"></div>
        </div>
      </div>

      <div className="middle-row">
        <div className="big-pink"></div>
        <div className="right-col">
          <div className="small-pink"></div>
          <div className="small-pink"></div>
        </div>
      </div>

      <div className="blue-box-bot">
        <div className="row1">
          <div className="purple-box"></div>
          <div className="small-peach"></div>
          <div className="small-peach"></div>
          <div className="purple-box"></div>
        </div>
      </div>
    </div>
  );
}

export default App
