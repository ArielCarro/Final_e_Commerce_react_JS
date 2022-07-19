import { lazy, Suspense } from 'react';

import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import './Components/itemListContainer/itemListContainer.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CartContainer from './Components/cartContainer/CartContainer';

const ItemDetailContainer = lazy(() => import('./Components/itemDetailContainer/ItemDetailContainer'))

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:genderId' element={<ItemListContainer />}/>
          <Route path='/categoria/:typeId' element={<ItemListContainer />}/>

          <Route path='/detalle/:productId' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <ItemDetailContainer />
            </Suspense>
          } />
          <Route path='/cart' element={<CartContainer/>}/>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
