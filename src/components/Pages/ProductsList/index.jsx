import React from 'react'
import {BASE_URL_API} from '../../../Api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
        <div className='card'>
          {data.map((item, index) => {
            return (
              <div key={index} className='card_item'>
                <Link className='card_link'>
                  <img className='card_img' src={item.image} alt='imagem do produto' />
                  <h2 className='card_title'>{item.title}</h2>
                  <br />
                  <button className='card_buttom'>Mais informações</button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProductsList