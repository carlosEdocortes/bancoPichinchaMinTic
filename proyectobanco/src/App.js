import './App.css';
import { Header } from './components/header/Header';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { HistPagosClientes } from './components/historialPagosClientes/HistPagosClientes';
import { ConsultaCreditosVigentes } from './components/consultaCreditosVigentes/ConsultaCreditosVigentes';
import { AprobacionCreditos } from './components/aprobacionCreditos/AprobacionCreditos';

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
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;