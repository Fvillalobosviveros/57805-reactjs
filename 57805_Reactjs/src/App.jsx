import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { NavBar } from "./Components/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer"; 

function App() {
  return (
  <><BrowserRouter />
  <NavBar />
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
  <ItemListContainer greeting="hola" />
  </Routes>
  <BrowserRouter /></>
  );

  
}

export default App
