import { useState, useEffect } from 'react'

import {BASE_URL_API} from '../../../Api'
import { useParams } from 'react-router-dom'
import { Card } from './styles'

const ProductsId = () => {
  const [loaded, setLoaded] = useState(false)
  const [itemId, setItemId] = useState([])
  const { id } = useParams()

  const getItemId = async () => {
    setLoaded(true)
    const res = await fetch(`${BASE_URL_API}/products/${id}`)
    const response = await res.json()
    setLoaded(false)
    setItemId(response)
  }

  useEffect(() => {
    getItemId()
  }, [])

  return (
    <>
    {loaded && <h3>Carregando...</h3>}
      <Card>
        <img src={itemId.image} alt="imagem do produto" width={200}/>
        <h2>{itemId.title}</h2>
        <strong>R$: ${itemId.price}</strong>
        <p>{itemId.description}</p>
        <h3>{itemId.category}</h3>
      </Card>
    </>
  )
}

export default ProductsId