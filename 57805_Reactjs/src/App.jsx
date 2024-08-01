import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from "./Components/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer"; 

function App() {
  return (  
    <BrowserRouter> {/* Una sola instancia de BrowserRouter */}
      <NavBar />
      <Routes> {/* Rutas definidas correctamente */}
        <Route path="/" element={<ItemListContainer greeting="hola" />} /> {/* Paso de propiedades */}
        <Route path="/category/:id" element={<ItemListContainer greeting="hola" />} /> {/* Paso de propiedades */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
