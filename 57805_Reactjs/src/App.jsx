import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from "./Components/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer"; 
import { ItemDetailContainer } from "./Components/ItemDetailContainer"

function App() {
  return (  
    <BrowserRouter> {/* Una sola instancia de BrowserRouter */}
      <NavBar />
      <Routes> {/* Rutas definidas correctamente */}
        <Route path="/" element={<ItemListContainer greeting="hola" />} /> {/* Paso de propiedades */}
        <Route path="/category/:id" element={<ItemListContainer greeting="hola" />} /> {/* Paso de propiedades */}
        <Route path="/item/:id" element={<ItemDetailContainer greeting="item" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
