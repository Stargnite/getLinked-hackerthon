import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
