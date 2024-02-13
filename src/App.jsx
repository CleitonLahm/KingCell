import {BrowserRouter, Routes, Route} from 'react-router-dom'

import CategoriesBar from "./components/CategoriesBar"
import Header from "./components/Header"
import ProductsList from './components/Pages/ProductsList'
import ProductsId from './components/Pages/ProductsId'

function App() {
  return (
    <>
    <Header />
    <CategoriesBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<ProductsList />}/>
          <Route path='/ProductsId' element={<ProductsId />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
