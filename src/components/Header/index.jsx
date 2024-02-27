import { HeaderContainer, TitleContainer, SpanKing, SpanCell, IconItem, IconList, SearchBar, LoginContainer, StyledLink } from './styles';

import carrinho from '../../assets/carrinho.png';
import contato from '../../assets/contato.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Link to={'/'}>
          <SpanKing className='titleKing'>KING</SpanKing>
          <SpanCell className='titleCell'>STORE</SpanCell>
        </Link>
      </TitleContainer>
        <SearchBar type="text" placeholder='Pesquise o seu produto'/>
        <LoginContainer>
        <p>Faça <StyledLink to={'/login'}>login</StyledLink> ou <StyledLink to={'/Login'}>cadastre-se</StyledLink></p>
        </LoginContainer>
      <div className="icons">
        <IconList>
          <IconItem>
            <a href="#">
              <img src={contato} alt="contato" />
            </a>
          </IconItem>
          <IconItem>
            <a href="#">
            <img src={carrinho} alt="carrinho" />
            </a>
          </IconItem>
        </IconList>
      </div>
    </HeaderContainer>
  );
};

export default Header;
