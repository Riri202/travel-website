import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/Pages/HomePage';
import Services from './components/Pages/Services'
import Products from './components/Pages/Products'
import SignUp from './components/Pages/SignUp'

function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/>
    
       <Routes>
         <Route path='/' element={<HomePage/>}>Home</Route>
         <Route  path='/services' element={<Services/>}>Services</Route>
         <Route  path='/products' element={<Products/>}>Product</Route>
         <Route  path='/sign-up' element={<SignUp/>}>Sign Up</Route>
         
       </Routes>
     </Router>
    </div>
  );
}

export default App;
