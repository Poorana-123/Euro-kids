import "../styles/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="ek-footer">
        <div className="ek-footer-main">
          <div className="ek-footer-brand">
            <Link to="/" className="ek-footer-logo">
              <span className="ek-footer-logo-icon">✿</span>

              <span>
                <strong>Euro Kids</strong>
                <small>PRE-SCHOOL</small>
              </span>
            </Link>

            <p>
              A little place for big discoveries, happy hearts and
              bright beginnings.
            </p>

            <div className="ek-footer-socials">
              <a href="#contact" aria-label="Facebook">
                f
              </a>

              <a href="#contact" aria-label="Instagram">
                ◎
              </a>

              <a href="#contact" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

          <div className="ek-footer-links">
            <h3>Explore</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#programmes">Programmes</a>
            <a href="#activities">Activities</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div className="ek-footer-links">
            <h3>For Parents</h3>

            <a href="#programmes">Learning Paths</a>
            <a href="#testimonials">Parent Reviews</a>
            <a href="#faq">FAQs</a>
            <a href="#enquiry">Admission Enquiry</a>
          </div>

          <div className="ek-footer-contact" id="contact">
            <h3>Say Hello!</h3>

            <p>
              <span>⌖</span>
              Add your school address here
            </p>

            <p>
              <span>☎</span>
              Add your contact number
            </p>

            <p>
              <span>✉</span>
              Add your school email
            </p>

            <a
              href="#enquiry"
              className="ek-footer-button"
            >
              Contact Our Team →
            </a>
          </div>
        </div>

        <div className="ek-footer-bottom">
          <p>
            © {new Date().getFullYear()} Euro Kids. All rights reserved.
          </p>

          <p>Made with love for little learners ♡</p>
        </div>
      </footer>
    );
}
export default Footer;