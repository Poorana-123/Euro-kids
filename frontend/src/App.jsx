import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact"

import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Programs from "./pages/Programs";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/activities" element={<Activities />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/programmes" element={<Programs />} />

            {/* Fallback */}
            <Route path="*" element={<Home />} />

            <Route path="/contact" element={<Contact />} />


          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;