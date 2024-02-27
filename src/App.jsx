import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoriesBar from './components/CategoriesBar';
import Header from './components/Header';
import ProductsList from './components/Pages/ProductsList';
import ProductsId from './components/Pages/ProductsId';
import Login from './components/Pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<>
          <CategoriesBar />
          <ProductsList /> 
          </>} />
          <Route path='/login' element={<Login />} />
          <Route path='/ProductsId/:id' element={<ProductsId />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
