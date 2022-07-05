import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer saludo="Soy un item list container" />
      </div>
    </>
  );
}

export default App;
