import React from 'react'
import {ProductsListContainer} from './styles'
import Product from '../Product'

const ProductsList = () => {
  return (
    <ProductsListContainer className='container'>
      <h1>Produtos em destaque</h1>
      <Product />
    </ProductsListContainer>
  )
}

export default ProductsList