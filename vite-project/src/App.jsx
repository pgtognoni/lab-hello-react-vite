import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import computer from './assets/computer.png'
import ironLogo from './assets/ironLogo.png'
import jsxPc from './assets/jsxPc.png'
import lines from './assets/lines.png'
import systemPc from './assets/systemPc.png'
import tools from './assets/tools.png'
import style from '../public/style.css'
import indexCss from './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <div className="seccion1">
      <nav className="navbar">
        <div className="iron-logo nav-items">
          <img src={ironLogo} alt="ironhack logo" />
        </div>
        <div className="lines nav-items">
          <img src={lines} alt="ironhack logo" />
        </div>
      </nav>
      <div className='intro'>
        <h1 className="title">Say hello to ReactJS</h1>
        <p className='intro-text'>You will learn how to use<br></br>the most popular frontend library, <br></br>and become a super Ninja developer.</p>
        <button className='btn' >Awesome!</button>
      </div>
    </div>
    <div className="seccion2">
      <div className='item'>
        <div className='img-container'>
          <img src={tools} alt="ironhack logo" />
        </div>
        <div className="item-text-container">
          <h4 className="item-title">Declarative</h4>
          <p className='item-text'>React makes it painless to create interactive Uls</p>
        </div>
      </div>
      <div className='item'>
        <div className='img-container'>
          <img src={computer} alt="ironhack logo" />
        </div>
        <div className="item-text-container">
          <h4 className="item-title">Components</h4>
          <p className='item-text'>Build encapsulated components that manage their state</p>
        </div>
      </div>
      <div className='item'>
        <div className='img-container'>
          <img src={systemPc} alt="ironhack logo" />
        </div>
        <div className="item-text-container">
          <h4 className="item-title">Single-Way</h4>
          <p className='item-text'>A set of immutable values are passed to the components</p>
        </div>
      </div>
      <div className='item'>
        <div className='img-container'>
         <img src={jsxPc} alt="ironhack logo" />
        </div>
        <div className="item-text-container">
          <h4 className="item-title">JSX</h4>
          <p className='item-text'>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
