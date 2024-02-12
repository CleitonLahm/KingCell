import React from 'react'
import { Description } from './styles'

const Product = () => {
  const descricao = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi eius, consequuntur aut eum eveniet inventore excepturi possimus? Voluptate minima perspiciatis laborum deserunt ab perferendis adipisci provident omnis, dolor aut ipsa."
  const textoExibido = descricao.length > 100 ? `${descricao.slice(0, 100)}...` : descricao

  return (
    <div>
      <h3>Nome do produto</h3>
      <img src="https://placeholder.com/250x250" alt="Imagem do produto" />
      <Description>
        {textoExibido}
      </Description>
      <span>R$ 700,00</span>
    </div>
  );
};

export default Product;
