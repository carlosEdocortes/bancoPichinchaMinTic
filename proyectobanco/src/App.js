import './App.css';
import { Header } from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { HistPagosClientes } from './components/historialPagosClientes/HistPagosClientes';
import { ConsultaCreditosVigentes } from './components/consultaCreditosVigentes/ConsultaCreditosVigentes';
import { AprobacionCreditos } from './components/aprobacionCreditos/AprobacionCreditos';
import { AprobacionProrroga } from './components/aprobacionProrroga/AprobacionProrroga';
import { Credito } from './components/solicitudCredito/Credito';
import { Login } from './components/login/Login';
import { Registro } from './components/registro/Registro';
import { Contacto } from './components/contacto/Contacto';

import { Simularcredito } from './components/simularCredito/Simularcredito';
import { Historial } from './components/historial/Historal';
import { Prorroga } from './components/prorroga/Prorroga';
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/HistPagosClientes" element={<HistPagosClientes />}></Route>
          <Route path="/ConsultaCreditosVigentes" element={<ConsultaCreditosVigentes />}></Route>
          <Route path="/AprobacionCreditos" element={<AprobacionCreditos />}></Route>
          <Route path="/AprobacionProrroga" element={<AprobacionProrroga />}></Route>
          <Route path="/credito" element={<Credito />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/prueba" ></Route>
          <Route path="/simularcredito" element={<Simularcredito />} ></Route>
          <Route path="/historial" element={<Historial />} ></Route>
          <Route path="/prorroga" element={<Prorroga />}></Route>
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;