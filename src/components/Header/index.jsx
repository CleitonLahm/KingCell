import { HeaderContainer, Titulo, SpanKing, SpanCell, IconItem, IconList, SearchBar,
Login, LoginContainer } from './styles';

import carrinho from '../../assets/carrinho.png';
import contato from '../../assets/contato.png';

const Header = () => {
  return (
    <HeaderContainer>
      <Titulo>
        <SpanKing className='titleKing'>KING</SpanKing>
        <SpanCell className='titleCell'>STORE</SpanCell>
      </Titulo>
        <SearchBar type="text" placeholder='Pesquise o seu produto'/>
        <LoginContainer>
        <p>Faça <Login href="#">login</Login> ou <Login href="#">cadastre-se</Login></p>
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
