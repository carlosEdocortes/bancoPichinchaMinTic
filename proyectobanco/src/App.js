import './App.css';
import { Header } from './components/Header';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/listado" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
