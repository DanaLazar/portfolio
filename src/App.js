import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Personal from "./pages/Personal";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  const top = useRef();
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="experience" element={<Experience ref={top} />} />
        <Route path="personal" element={<Personal ref={top} />} />
        <Route path="projects" element={<Projects ref={top} />} />
        <Route path="skills" element={<Skills ref={top} />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer top={top} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background: #ff9000;
  color: #fff;
  min-height: calc(100vh);
`;

export default App;
