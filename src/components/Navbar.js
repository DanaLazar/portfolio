import { Link } from "react-router-dom";
import Experience from "../pages/Experience";
import Personal from "../pages/Personal";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

function Navbar() {
  return (
    <>
      <Link to="/personal"><Personal /></Link>
      <Link to="/experience"><Experience /></Link>
      <Link to="/skills"><Skills /></Link>
      <Link to="/projects"><Projects /></Link>
    </>
  );
}

export default Navbar;