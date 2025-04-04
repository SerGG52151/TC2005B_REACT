import React from 'react'


const Boton = ({ texto, onClick}) => {
  return (
    <button onClick={onClick}>
        {texto}
    </button>
  )
}

/*
// Can also be written as:

const Boton = (args) => {
  return (
    <button>
        {args.texto}
    </button>
  )
}
*/

export default Boton
