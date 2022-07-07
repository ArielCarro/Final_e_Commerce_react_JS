import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Soy un item list container" />
      </div>
    </>
  );
}

export default App;
