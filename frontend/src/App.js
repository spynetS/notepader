import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import EriksPage from './Pages/EriksPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
 
function App() {
  return (
      <BrowserRouter className="w-screen h-screen">
        <Routes className="w-full h-full">
          <Route  className="w-full h-full" path='/login' element={<Login></Login>} ></Route>
          <Route  className="w-full h-full" path='/signup' element={<Signup></Signup>} ></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
