import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './routes/Home'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import PageNotFound from './routes/PageNotFound'

import Navbar from "./components/Navbar";

function App() {

  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
