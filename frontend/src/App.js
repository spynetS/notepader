import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
 
function App() {

  axios.defaults.headers.common['Content-Type'] = 'application/json';

  axios.defaults.baseURL = 'http://localhost:8000';


  return (
      <BrowserRouter className="w-screen h-screen">
        <Routes className="w-full h-full">
          <Route  className="w-full h-full" path='/login' element={<Login></Login>} ></Route>
          <Route  className="w-full h-full" path='/signup' element={<Signup></Signup>} ></Route>
          <Route  className="w-full h-full" path='/home' element={<Home></Home>} ></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
