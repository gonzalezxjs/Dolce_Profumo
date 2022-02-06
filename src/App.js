import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeApp from './routes/HomeApp';
import SignUp from './Components/2. Usuario/2.1. Registro/SignUp';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
              <Route path="/" element={<HomeApp/>} />
              <Route path="/signup" element={<SignUp/>} />
              
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
