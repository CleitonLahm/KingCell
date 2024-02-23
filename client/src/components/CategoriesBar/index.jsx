import React from 'react'
import { List, ListLink, CategoriesContainer } from './styles'

import iconOffer from '../../assets/icon-offer.gif'
import iconPc from '../../assets/icon-pc.png'
import iconSmartphone from '../../assets/icon-smartphone.png'
import iconSound from '../../assets/icon-sound.png'

const CategoriesBar = () => {
  return (
    <CategoriesContainer>
      <div className='container'>
      <List>
        <li>
          <ListLink href="#">
            <img src={iconOffer} alt="icone de oferta" />
            Ofertas
          </ListLink>
        </li>
        <li>
          <ListLink href="#">
            <img src={iconPc} alt="icone de computador" />
            Computadores
          </ListLink>
        </li>
        <li>
          <ListLink href="#">
            <img src={iconSmartphone} alt="icone de oferta" />
            Celulares
          </ListLink>
        </li>
        <li>
          <ListLink href="#">
            <img src={iconSound} alt="icone de oferta" />
            Aparelhos de som
          </ListLink>
        </li>
      </List>
      </div>
    </CategoriesContainer>
  )
}

export default CategoriesBar