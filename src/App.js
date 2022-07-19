import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<h1>ERROR 404 NOT FOUND</h1>} />
          <Route index element={<ItemListContainer />} />
          <Route path='/category/:name' element={<ItemListContainer/>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
