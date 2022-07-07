import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer stock={'Stock (6 disponibles)'} />
    </>
  );
}

export default App;
