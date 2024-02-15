
import {BASE_URL_API} from '../../../Api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {CardSection, CardItem, CardImg, CardTitle, CardButton} from './styles'

const ProductsList = () => {
  const [data, setData] = useState([])
  
  const productsListData = async () => {
    const res = await fetch(`${BASE_URL_API}/products`)
    const response = await res.json()
    setData(response)
  }

  useEffect(() => {
    productsListData()
  }, [])

  return (
    <>
      <div className='container'>
        <CardSection>
          {data.map((item, index) => {
            return (
              <CardItem key={index}>
                <Link to={`/ProductsId/${item.id}`}>
                  <CardImg src={item.image} alt='imagem do produto' />
                  <CardTitle>{item.title}</CardTitle>
                  <br />
                  <CardButton>Mais informações</CardButton>
                </Link>
              </CardItem>
            )
          })}
        </CardSection>
      </div>
    </>
  )
}

export default ProductsList