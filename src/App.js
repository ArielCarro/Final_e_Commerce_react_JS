import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import './Components/itemListContainer/itemListContainer.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer/>
      </div>
    </>
  );
}

export default App;
