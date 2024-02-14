import React, { useState, useEffect } from 'react'

import {BASE_URL_API} from '../../../Api'
import { useParams } from 'react-router-dom'

const ProductsId = () => {
  const [itemId, setItemId] = useState([])
  const { id } = useParams()

  const getItemId = async () => {
    const res = await fetch(`${BASE_URL_API}/products/${id}`)
    const response = await res.json()
    setItemId(response)
  }

  useEffect(() => {
    getItemId()
  }, [])

  return (
    <>
      <div>
        <img src={itemId.image} alt="imagem do produto" width={200}/>
        <h2>{itemId.title}</h2>
        <strong>R$: ${itemId.price}</strong>
        <p>{itemId.description}</p>
        <h3>{itemId.category}</h3>
      </div>
    </>
  )
}

export default ProductsId