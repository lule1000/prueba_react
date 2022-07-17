import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
}

export default App;
