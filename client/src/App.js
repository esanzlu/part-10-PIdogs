import './App.css';
import Home from './Components/Home/Home.jsx';
import Landing from './Components/Landing/Landing.jsx';
import NavBar from './Components/NavBar/NavBar';
import Detail from './Components/Detail/Detail.jsx';
import Createdform from './Components/Form/Createdform';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();


  return (
    <div className="App">
    <header className='header' >
      {location.pathname !=='/create' &&  <NavBar />}
    </header>
      <Routes>
      
        <Route exact path ='/' element={ <Landing />} />
        <Route path ='/Home' element={ <Home /> } />
        <Route path ='/create' element ={ <Createdform />} />
        <Route path ='/home/:id' element={ <Detail /> } />
        
      </Routes>
     
     
      
    </div>
  );
}

export default App;
