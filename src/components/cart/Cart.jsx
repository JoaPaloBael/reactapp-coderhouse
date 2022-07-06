import React from 'react'
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <>
    <h1>Carrito de compras</h1>
    <button><Link to="/">Seguir comprando</Link></button>
    </>
  )
}
