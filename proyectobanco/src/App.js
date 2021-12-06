import './App.css';
import { Header } from './components/header/Header';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/listado" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
