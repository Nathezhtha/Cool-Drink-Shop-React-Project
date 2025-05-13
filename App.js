// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import 'animate.css';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Testimonials from './Components/Testimonials';
function App(){
  return(
    <>
    <div>
        <header> 
            <h1 style={{color:'white'}}className="header-title">Pastel Perks</h1>
      <nav>
      <Link style={{color:'white',textDecoration:'none',padding:'5px'}} to ='/'>Home</Link>
      <Link style={{color:'white',textDecoration:'none',padding:'5px'}} to='/about'>About</Link>
      <Link style={{color:'white',textDecoration:'none',padding:'5px'}} to ='/contact'>Contact</Link>
      <Link style={{color:'white',textDecoration:'none',padding:'5px'}} to ='/testimonials'>Testimonials</Link>
      <Link style={{color:'white',textDecoration:'none',padding:'5px'}} to ='/signup'>Signup</Link>
      </nav>
      </header>

      <Routes>
        <Route path ='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/Testimonials' element={<Testimonials/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </div>
     </>
  )
}
export default App;
 