import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';
import ScrollToTop from './pages/ScrollToTop';
import SingleEvent from './pages/SingleEvent';
import Team from './pages/Team';
 

const App = () => {
   return <>
    <BrowserRouter> 
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/team' element={<Team/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/events' element={<Events/>} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/events/singleevent' element={<SingleEvent/>} /> 
      </Routes> 
      <Footer/>
    </BrowserRouter>
   </>
}

export default App;