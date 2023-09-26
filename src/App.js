import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/add' element={<AddUser/>}/>
           <Route path='/edit/:id' element={<EditUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
