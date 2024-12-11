import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Contacto from "./pages/contacto/Contacto";
import Constula from "./pages/preconsulta";
import Rinoplastia from "./pages/preconsulta/Rinoplastia";
import Contorno from "./pages/preconsulta/Contorno";
import Mamas from "./pages/preconsulta/Mamas";
import Fullface from "./pages/preconsulta/Inyectable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles/:id" element={<Post />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pre-consulta" element={<Constula />} />
        <Route path="/pre-consulta/rinoplastia" element={<Rinoplastia />} />
        <Route path="/pre-consulta/contorno-corporal" element={<Contorno />} />
        <Route path="/pre-consulta/cirugia-de-mamas" element={<Mamas />} />
        <Route path="/pre-consulta/fullface" element={<Fullface />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
