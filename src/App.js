import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from './routes/Home'
import Contact from './routes/Contact'
import Ideas from './routes/Ideas'
import PageNotFound from './routes/PageNotFound'

import Navbar from "./components/Navbar/Navbar";
import Spacer from './components/Spacer/Spacer'

function App() {

  let [navState, setNavState] = useState(false)

  return (
    <BrowserRouter> 
      <Navbar
        navState={navState}
        setNavState={setNavState}
      />
      <Spacer
        style={{
          height:'50px',
        }}
      />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/ideas' element={<Ideas/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
