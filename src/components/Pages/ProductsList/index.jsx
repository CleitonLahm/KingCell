import { BASE_URL_API } from '../../../Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardSection, CardContainer, CardItem, CardImg, CardTitle, CardButton, Evaluations } from './styles';
import { BiStar } from 'react-icons/bi'

const ProductsList = () => {
  const star = []

  for(let i = 0; i < 5; i++) {
    star.push(i)
  }

  const [data, setData] = useState([]);

  const productsListData = async () => {
    const res = await fetch(`${BASE_URL_API}/products`);
    const response = await res.json();
    setData(response);
  };

  useEffect(() => {
    productsListData();
  }, []);

  return (
    <div className='container'>
      <CardSection>
        {data.map((item, index) => {
          return (
            <CardContainer key={index}>
              <CardItem>
                <Link to={`/ProductsId/${item.id}`}>
                <Evaluations>
                      {star.map((index) => (<BiStar key={index}/>))}
                      <h3>{item.rating.rate}</h3>
                  </Evaluations>
                  <CardImg src={item.image} alt='imagem do produto' />
                  <CardTitle>{item.title}</CardTitle>
                </Link>
              </CardItem>
              <Link to={`/ProductsId/${item.id}`}>
                <CardButton>Mais informações</CardButton>
              </Link>
            </CardContainer>
          );
        })}
      </CardSection>
    </div>
  );
};

export default ProductsList;
