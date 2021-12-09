import './App.css';
import { Header } from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Credito } from './components/solicitudCredito/Credito';
import { Simularcredito } from './components/simularCredito/Simularcredito';
import { Historial } from './components/historial/Historal';
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/credito" element={<Credito />}></Route>
          <Route path="/prueba" ></Route>
          <Route path="/simularcredito" element={<Simularcredito />} ></Route>
          <Route path="/historial" element={<Historial />} ></Route>
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
