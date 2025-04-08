import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Boton from '../components/Boton'
import Nav from '../components/Nav'

const Initial = () => {
    const [count, setCount] = useState(0)
    const msg = () => alert("Hola, diste click lol.\nTu count es: " + count);
  
    // let count = 0;
    // const setCount = () => {count++;};
  
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
          <Nav />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          {/* texto y onClick son rest parameters (props) que funcionan como argumentos para la funcion flecha Boton */}
          <Boton texto={"suma"} onClick={() => setCount((count) => count + 1)}/> 
          <Boton texto={"resta"} onClick={() => setCount((count) => count - 1)}/>
          <Boton texto={"mensaje"} onClick={msg}/>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
}

export default Initial
