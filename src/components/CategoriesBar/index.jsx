import React from 'react'
import { List } from './styles'

const CategoriesBar = () => {
  return (
    <div className='container'>
      <List>
        <li>
          <a href="#">Todas as categorias</a>
        </li>
        <li>
          <a href="#">Computadores</a>
        </li>
        <li>
          <a href="#">CelListares</a>
        </li>
        <li>
          <a href="#">Aparelhos de som</a>
        </li>
      </List>
    </div>
  )
}

export default CategoriesBar