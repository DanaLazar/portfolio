import React, { useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components'

import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Experience from "./pages/Experience";
import Personal from "./pages/Personal";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
 
  const top = useRef();
  return (
      <BrowserRouter>  
        <Wrapper>
          <HomePage />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="experience" element={<Experience ref={top}/>} />
            <Route path="personal" element={<Personal ref={top}/>} />
            <Route path="projects" element={<Projects ref={top}/>} />
            <Route path="skills" element={<Skills ref={top}/>} />
          </Routes>
          <Footer top={top} />
         </Wrapper>
      </BrowserRouter>
  );
}

const Wrapper = styled.main`
  background: #FF9000;
  color: #fff;
  min-height:calc(100vh);
`;

export default App;
