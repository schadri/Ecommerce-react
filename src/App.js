import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar";
import {ItemCount} from './components/ItemCount/ItemCount';
import {Poke} from './components/Poke/Poke';
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom"



function App() {


  return (
      // <>
      // <div>
      // <NavBar/>
      // <ItemListContainer greating="Hola Mundo"/>
      // <ItemCount/>
      // <hr />
      // {/* <Pika/> */}
      // <hr />
      // </div>
      // </>

    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/counter' element={<ItemCount/>}/>
          <Route path='/poke' element={<Poke/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
