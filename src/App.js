import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Home/Shared/Navbar";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route to="/" element={<Home></Home>}></Route>
        <Route to="/about" element={<About></About>}></Route>
        <Route to="/services" element={<Services></Services>}></Route>
        <Route to="/blogs" element={<Blogs></Blogs>}></Route>
        <Route to="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
