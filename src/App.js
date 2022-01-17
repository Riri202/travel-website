import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/>
    
       <Routes>
         <Route path='/'>Home</Route>
         <Route path='/services'>Services</Route>
         <Route path='/product'>Product</Route>
         <Route path='/signup'>Sign Up</Route>
         
       </Routes>
     </Router>
    </div>
  );
}

export default App;
