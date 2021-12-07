import './App.css';
import { Header } from './components/header/Header';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Credito } from './components/solicitudCredito/Credito';
import { Simularcredito } from './components/simularCredito/Simularcredito';
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
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
