import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import "../styles/Navbar.css";

import logo from "../assets/euro-kids-logo-removebg-preview.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="euro-navbar">
      <div className="euro-navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="euro-navbar-logo"
          onClick={closeMenu}
        >
          <img src={logo} alt="Euro Kids Pre-School" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="euro-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`euro-navbar-menu ${
            menuOpen ? "euro-menu-open" : ""
          }`}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About Us
          </Link>

          <div className="euro-nav-dropdown">
            <Link
              to="/programmes"
              className="euro-dropdown-link"
              onClick={closeMenu}
            >
              Programmes
              <ChevronDown size={14} />
            </Link>
          </div>

          <Link to="/activities" onClick={closeMenu}>
            Activities
          </Link>

          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact Us
          </Link>

          {/* Admission Button */}
<Link
  to="/contact#admission-enquiry"
  className="euro-admission-button"
  onClick={closeMenu}
>
  Enquire Now
</Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;