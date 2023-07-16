import Home from './pages/Home'
import Products from './pages/Products';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='product' element={<Products/>} />
        </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
