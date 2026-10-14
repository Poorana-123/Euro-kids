import { Link } from "react-router-dom";
import "../styles/ProgramsSection.css";

function ProgramsSection() {
  return (
    <section className="ek-programs-section" id="programs">
      {/* Decorative elements */}
      <span className="ek-programs-decoration ek-programs-sun">
        ✳
      </span>

      <span className="ek-programs-decoration ek-programs-star">
        ✦
      </span>

      <span className="ek-programs-decoration ek-programs-circle">
        ✧
      </span>

      {/* Section heading */}
      <div className="ek-programs-heading">
        <span className="ek-programs-eyebrow">
          LITTLE STEPS, BIG FUTURES
        </span>

        <h2>
          Discover a world of
          <br />
          <span>learning & wonder.</span>
        </h2>

        <p>
          Every child is unique. Our programmes help little learners
          discover their talents, build confidence, and enjoy every
          step of growing up.
        </p>
      </div>

      {/* Programme card */}
      <div className="ek-program-card">
        {/* Image */}
        <div className="ek-program-image-wrap">
          <img
            className="ek-program-image"
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85"
            alt="Young children enjoying an early learning activity"
            loading="lazy"
          />

          <span className="ek-program-age">
            Ages 2–6 years
          </span>

          <span className="ek-program-image-decoration">
            ✦
          </span>
        </div>

        {/* Card content */}
        <div className="ek-program-content">
          <span className="ek-program-label">
            OUR SIGNATURE PROGRAMME
          </span>

          <h3>
            Little Learners,
            <br />
            Big Discoveries.
          </h3>

          <p>
            A joyful early-learning experience where curiosity leads
            the way. Through creative play, storytelling, movement,
            and hands-on activities, children build the foundations
            they need for a bright future.
          </p>

          {/* Highlights */}
          <div className="ek-program-highlights">
            <div className="ek-program-highlight">
              <span className="ek-highlight-icon">✿</span>
              <span>Creative Play</span>
            </div>

            <div className="ek-program-highlight">
              <span className="ek-highlight-icon">★</span>
              <span>Learning by Doing</span>
            </div>

            <div className="ek-program-highlight">
              <span className="ek-highlight-icon">♡</span>
              <span>Caring Guidance</span>
            </div>
          </div>

          <Link
            to="/contact#admission-enquiry"
            className="ek-program-button"
          >
            Explore This Programme
            <span className="ek-program-button-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* Bottom message */}
      <div className="ek-programs-footer-note">
        <span>✦</span>
        Every little step is a wonderful beginning.
        <span>✦</span>
      </div>
    </section>
  );
}

export default ProgramsSection;