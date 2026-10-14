import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Contact.css";

function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  // Scroll to the admission enquiry section when arriving
  // at /contact#admission-enquiry
  useEffect(() => {
    if (location.hash === "#admission-enquiry") {
      const timer = setTimeout(() => {
        document
          .getElementById("admission-enquiry")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Send admission enquiry through WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this placeholder with the school's actual WhatsApp number.
    // Include the country code without +, spaces, or dashes.
    const whatsappNumber = "919876543210";

    const message = `
Hello EuroKids Preschool! 🌈

I would like to enquire about admission.

Parent's Name: ${formData.parentName}
Child's Name: ${formData.childName || "Not provided"}
Child's Age: ${formData.childAge}
Phone Number: ${formData.phone}
Email: ${formData.email || "Not provided"}
Interested Program: ${formData.program}
Message: ${formData.message || "No additional message"}

Please share the admission details. Thank you!
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="euro-contact-page">
      {/* ==================== HERO SECTION ==================== */}
      <section className="euro-contact-hero">
        <div className="euro-contact-hero-content">
          <span className="euro-contact-eyebrow">
            <span className="euro-contact-sparkle">✦</span>
            WE'RE HAPPY YOU'RE HERE!
          </span>

          <h1>
            Every little
            <span className="euro-contact-title-highlight">
              {" "}journey begins
            </span>
            <br />
            with a hello!
          </h1>

          <p>
            Looking for a happy place where your little one can
            learn, play, explore, and grow? We'd love to meet you
            and your family!
          </p>

          <div className="euro-contact-hero-buttons">
            <a
              href="#admission-enquiry"
              className="euro-contact-button"
            >
              Let's Talk! <span>♡</span>
            </a>

            <a
              href="#school-details"
              className="euro-contact-text-link"
            >
              Find our details <span>↓</span>
            </a>
          </div>

          <div className="euro-contact-hero-note">
            <span className="euro-contact-note-icon">☀</span>
            Little steps today, wonderful futures tomorrow.
          </div>
        </div>

        <div className="euro-contact-hero-art">
          <div className="euro-contact-image-frame">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85"
              alt="Young child enjoying a happy moment"
            />

            <div className="euro-contact-floating-card euro-contact-card-top">
              <span>🌈</span>

              <div>
                <strong>Learn &amp; Play</strong>
                <small>Every day is an adventure!</small>
              </div>
            </div>

            <div className="euro-contact-floating-card euro-contact-card-bottom">
              <span>💛</span>

              <div>
                <strong>Made for little minds</strong>
                <small>A warm welcome awaits.</small>
              </div>
            </div>
          </div>

          <span className="euro-contact-decor euro-contact-decor-star">
            ✳
          </span>

          <span className="euro-contact-decor euro-contact-decor-heart">
            ♡
          </span>

          <span
            className="euro-contact-decor euro-contact-decor-circle"
            aria-hidden="true"
          />
        </div>

        <div className="euro-contact-hero-bottom">
          <span>BIG DREAMS START SMALL</span>
          <span>PLAY • LEARN • GROW</span>
        </div>
      </section>

      {/* ==================== WELCOME SECTION ==================== */}
      <section
        className="euro-contact-welcome"
        id="school-details"
      >
        <div className="euro-contact-welcome-heading">
          <span className="euro-contact-section-tag">
            A LITTLE HELLO FROM US
          </span>

          <h2>
            Choosing a preschool is
            <span> a big little decision.</span>
          </h2>
        </div>

        <p>
          We understand that your child's first school experience
          is special. Whether you have questions about admissions,
          programs, or school visits, we're here to help you feel
          confident about your little one's next adventure.
        </p>
      </section>

      {/* ==================== CONTACT CARDS ==================== */}
      <section className="euro-contact-details">
        <article className="euro-contact-detail-card euro-detail-peach">
          <div className="euro-contact-detail-icon">☎</div>

          <span className="euro-contact-detail-label">
            GIVE US A CALL
          </span>

          <h3>Let's have a chat!</h3>

          <p>
            Have a question? Our team will be happy to help.
          </p>

          <a href="tel:+919876543210">
            +91 98765 43210 <span>↗</span>
          </a>
        </article>

        <article className="euro-contact-detail-card euro-detail-blue">
          <div className="euro-contact-detail-icon">✉</div>

          <span className="euro-contact-detail-label">
            DROP US A NOTE
          </span>

          <h3>We love hearing from you!</h3>

          <p>
            Send us your questions and admission enquiries.
          </p>

          <a href="mailto:admissions@example.com">
            Email our team <span>↗</span>
          </a>
        </article>

        <article className="euro-contact-detail-card euro-detail-yellow">
          <div className="euro-contact-detail-icon">⌖</div>

          <span className="euro-contact-detail-label">
            COME SAY HELLO
          </span>

          <h3>Visit our preschool</h3>

          <p>
            We'd love to welcome you and your little explorer.
          </p>

          <a href="#admission-enquiry">
            Ask for our location <span>↗</span>
          </a>
        </article>
      </section>

      {/* ==================== ADMISSION ENQUIRY ==================== */}
      <section
        className="euro-contact-enquiry"
        id="admission-enquiry"
      >
        <div className="euro-contact-enquiry-intro">
          <span className="euro-contact-section-tag">
            YOUR LITTLE ONE'S NEXT ADVENTURE
          </span>

          <h2>
            Let's find the
            <span> perfect beginning!</span>
          </h2>

          <p>
            Tell us a little about your family. We'll help you
            discover the right program for your child.
          </p>

          <div className="euro-contact-parent-note">
            <span>🌻</span>

            <div>
              <strong>
                Every child is wonderfully unique.
              </strong>

              <p>
                We're happy to answer your questions and guide you
                through the admission process.
              </p>
            </div>
          </div>

          <div
            className="euro-contact-enquiry-illustration"
            aria-hidden="true"
          >
            <span>🎨</span>
            <span>🧸</span>
            <span>📚</span>
            <span>🪁</span>
          </div>
        </div>

        <div className="euro-contact-form-card">
          <div className="euro-contact-form-heading">
            <span className="euro-contact-form-emoji">👋</span>

            <div>
              <h3>Let's get to know you!</h3>
              <p>Fill in the details below to get started.</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="euro-contact-form"
          >
            {/* Parent and child names */}
            <div className="euro-contact-form-row">
              <div className="euro-contact-field">
                <label htmlFor="parentName">
                  Parent's name <span>*</span>
                </label>

                <input
                  id="parentName"
                  type="text"
                  name="parentName"
                  placeholder="Your name"
                  value={formData.parentName}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="euro-contact-field">
                <label htmlFor="childName">
                  Child's name
                </label>

                <input
                  id="childName"
                  type="text"
                  name="childName"
                  placeholder="Your little one's name"
                  value={formData.childName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Child's age and phone number */}
            <div className="euro-contact-form-row">
              <div className="euro-contact-field">
                <label htmlFor="childAge">
                  Child's age <span>*</span>
                </label>

                <select
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select age</option>
                  <option value="Below 2 years">
                    Below 2 years
                  </option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">3 years</option>
                  <option value="4 years">4 years</option>
                  <option value="5 years">5 years</option>
                  <option value="6 years or above">
                    6 years or above
                  </option>
                </select>
              </div>

              <div className="euro-contact-field">
                <label htmlFor="phone">
                  Phone number <span>*</span>
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your contact number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  pattern="[0-9+() -]{7,20}"
                  title="Please enter a valid phone number"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="euro-contact-field">
              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            {/* Programme selection */}
            <div className="euro-contact-field">
              <label htmlFor="program">
                Which program interests you? <span>*</span>
              </label>

              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
              >
                <option value="">Choose a program</option>
                <option value="Playgroup">Playgroup</option>
                <option value="Nursery">Nursery</option>
                <option value="Junior KG">Junior KG</option>
                <option value="Senior KG">Senior KG</option>
                <option value="Not sure yet">
                  I'm not sure yet
                </option>
              </select>
            </div>

            {/* Additional message */}
            <div className="euro-contact-field">
              <label htmlFor="message">
                Anything you'd like to ask?
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Ask us about admissions, school visits, programs..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="euro-contact-submit"
            >
              Send Admission Enquiry
              <span>♡</span>
            </button>

            <p className="euro-contact-form-disclaimer">
              Your enquiry will open in WhatsApp, where you can
              review and send your message to the preschool.
            </p>
          </form>
        </div>
      </section>

      {/* ==================== VISIT CTA ==================== */}
      <section className="euro-contact-visit">
        <div className="euro-contact-visit-decoration">
          🌈
        </div>

        <div className="euro-contact-visit-content">
          <span className="euro-contact-section-tag">
            COME MAKE MEMORIES
          </span>

          <h2>
            Little feet,
            <span> big possibilities!</span>
          </h2>

          <p>
            Let's make your child's first learning adventure
            joyful, meaningful, and full of wonder.
          </p>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="euro-contact-visit-button"
          >
            Chat with our team <span>↗</span>
          </a>
        </div>

        <div
          className="euro-contact-visit-doodles"
          aria-hidden="true"
        >
          <span>✦</span>
          <span>♡</span>
          <span>☀</span>
          <span>✳</span>
        </div>
      </section>
    </main>
  );
}

export default Contact;