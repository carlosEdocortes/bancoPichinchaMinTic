import './App.css';
import { Header } from './components/header/Header';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Credito } from './components/solicitudCredito/Credito';
import { Login } from './components/login/Login';
import { Registro } from './components/registro/Registro';
import { Contacto } from './components/contacto/Contacto';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/credito" element={<Credito />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/prueba" ></Route>
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
