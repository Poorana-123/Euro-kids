import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "../styles/App.css";
import Kids1 from "../assets/Kids1.jpg";
import Kids2 from "../assets/ukg.webp";
import team from "../assets/team.webp";

const learningPaths = [
  {
    number: "01",
    title: "Playgroup",
    age: "1.5 – 2.5 years",
    description:
      "A joyful first step into learning through play, movement and exploration.",
    icon: "🧸",
  },
  {
    number: "02",
    title: "Nursery",
    age: "2.5 – 3.5 years",
    description:
      "Discover language, creativity and friendships through playful activities.",
    icon: "🎨",
  },
  {
    number: "03",
    title: "LKG",
    age: "3.5 – 4.5 years",
    description:
      "Build early literacy, numeracy and confidence through hands-on learning.",
    icon: "📚",
  },
  {
    number: "04",
    title: "UKG",
    age: "4.5 – 5.5 years",
    description:
      "Develop school readiness, independence and essential learning skills.",
    icon: "🎒",
  },
];

const activities = [
  {
    category: "Creative",
    title: "Little Artists",
    description:
      "Painting, drawing and colourful creations that bring imagination to life.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=85",
    time: "MONDAY",
  },
  {
    category: "Learning",
    title: "Little Explorers",
    description:
      "Discover new things through experiments, puzzles and playful activities.",
    image:team,
    time: "TUESDAY",
  },
  {
    category: "Music",
    title: "Music & Movement",
    description:
      "Sing, dance and develop rhythm, coordination and self-expression.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85",
    time: "WEDNESDAY",
  },
  {
    category: "Outdoor",
    title: "Outdoor Adventures",
    description:
      "Run, play and discover the world through active outdoor experiences.",
    image:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=800&q=85",
    time: "THURSDAY",
  },
];

const testimonials = [
  {
    name: "A Happy Parent",
    role: "Parent of a Nursery Student",
    quote:
      "My child looks forward to school every morning. The teachers make learning enjoyable, and we have noticed a wonderful improvement in confidence.",
    initials: "HP",
  },
  {
    name: "A Proud Parent",
    role: "Parent of an LKG Student",
    quote:
      "We love the caring environment and the creative activities. Our child is learning new things every day and becoming more independent.",
    initials: "PP",
  },
  {
    name: "A Grateful Parent",
    role: "Parent of a UKG Student",
    quote:
      "The teachers encourage curiosity and make every child feel special. We are happy to see our little one grow with confidence.",
    initials: "GP",
  },
];

const faqs = [
  {
    question: "What age groups can join the playschool?",
    answer:
      "Our learning programmes cater to different early-childhood age groups, including Playgroup, Nursery, LKG and UKG. Please contact the school to confirm the eligibility criteria for your child.",
  },
  {
    question: "How can I enquire about admission?",
    answer:
      "You can complete the enquiry form on this website or contact the school directly. Our team can guide you through the admission process and available programmes.",
  },
  {
    question: "What activities do children participate in?",
    answer:
      "Children can participate in age-appropriate creative activities, music, movement, storytelling, outdoor play and hands-on learning experiences.",
  },
  {
    question: "Can parents visit the school before admission?",
    answer:
      "Yes. You can contact the school to arrange a visit and learn more about the classrooms, facilities, teaching approach and daily routine.",
  },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const categories = [
    "All",
    "Creative",
    "Learning",
    "Music",
    "Outdoor",
  ];

  const filteredActivities =
    activeCategory === "All"
      ? activities
      : activities.filter(
          (activity) => activity.category === activeCategory
        );

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <>
     

      <main>
        {/* ================= HERO SECTION ================= */}

        <section className="ek-hero" id="home">
          <div className="ek-hero-decoration ek-hero-decoration-one"></div>
          <div className="ek-hero-decoration ek-hero-decoration-two"></div>

          <div className="ek-hero-container">
            <div className="ek-hero-content">
              <div className="ek-eyebrow">
                <span className="ek-eyebrow-star">✦</span>
                A LITTLE WORLD OF BIG POSSIBILITIES
              </div>

              <h1>
                Encouraging
                <br />

                <span className="ek-script-text">
                  Exploration,
                </span>

                <br />

                One Step at a Time
              </h1>

              <p className="ek-hero-description">
                Every little mind has a big world waiting to be
                discovered. We make early learning joyful through
                creativity, play, exploration and loving care.
              </p>

              <div className="ek-hero-actions">
                <a href="/programmes" className="ek-button ek-button-primary">
                  Explore Programmes
                  <span>↗</span>
                </a>

                <a
                  href="/contact"
                  className="ek-button ek-button-outline">
                  Enquire for Admission
                </a>
              </div>

              <div className="ek-hero-highlights">
                <div className="ek-hero-highlight">
                  <span className="ek-highlight-icon">♡</span>

                  <div>
                    <strong>Loving Care</strong>
                    <small>Every child matters</small>
                  </div>
                </div>

                <div className="ek-hero-highlight">
                  <span className="ek-highlight-icon">✿</span>

                  <div>
                    <strong>Joyful Learning</strong>
                    <small>Learning through play</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="ek-hero-visual">
              <div className="ek-hero-yellow-shape"></div>

              

              <div className="ek-hero-image-frame">
                <img
                  src={Kids2}
                  alt="A young child enjoying a playful moment"
                />
              </div>

              <div className="ek-hero-doodle ek-doodle-star">
                ✳
              </div>

              <div className="ek-hero-doodle ek-doodle-spark">
                ✦
              </div>

              <div className="ek-floating-note">
                <span className="ek-floating-note-icon">🌟</span>

                <div>
                  <strong>Little Steps</strong>
                  <p>Big Discoveries!</p>
                </div>
              </div>

              <div className="ek-hero-side-note">
                PLAY · LEARN · GROW
              </div>
            </div>
          </div>

          <div className="ek-hero-bottom">
            <span>CURIOUS MINDS</span>
            <span className="ek-bottom-star">✦</span>
            <span>HAPPY HEARTS</span>
            <span className="ek-bottom-star">✦</span>
            <span>BRIGHTER TOMORROWS</span>
          </div>
        </section>

        {/* ================= ANNOUNCEMENT ================= */}

        <section className="ek-announcement">
          <div className="ek-announcement-track">
            {[1, 2].map((item) => (
              <div className="ek-announcement-group" key={item}>
                <span>ADMISSIONS OPEN</span>
                <span className="ek-announcement-star">✦</span>

                <span>A NEW ADVENTURE BEGINS HERE</span>
                <span className="ek-announcement-star">✦</span>

                <span>LET LITTLE MINDS BLOOM</span>
                <span className="ek-announcement-star">✦</span>

                <span>BOOK A SCHOOL VISIT</span>
                <span className="ek-announcement-star">✦</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WELCOME SECTION ================= */}

        <section className="ek-welcome" id="about">
          <div className="ek-welcome-container">
            <div className="ek-welcome-visual">
              <div className="ek-welcome-image-main">
                <img
                  src={Kids1}
                  alt="Children participating in a classroom activity"
                  loading="lazy"
                />
              </div>

              <div className="ek-welcome-image-small">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=85"
                  alt="A happy young child"
                  loading="lazy"
                />
              </div>

              <div className="ek-welcome-sticker">
                <span>♡</span>
                <strong>Growing with love</strong>
              </div>

              <span className="ek-welcome-sparkle">✳</span>
            </div>

            <div className="ek-welcome-content">
              <span className="ek-section-label">
                A HAPPY PLACE TO BEGIN
              </span>

              <h2>
                Welcome to
                <br />
                <span>Euro Kids!</span>
              </h2>

              <p>
                Childhood is a beautiful journey filled with first
                discoveries, new friendships and little achievements.
                We believe every child deserves a warm, welcoming
                environment where curiosity is encouraged and
                individuality is celebrated.
              </p>

              <p>
                Through playful experiences and meaningful
                interactions, we aim to make every day an opportunity
                to explore, imagine and grow.
              </p>

              <div className="ek-welcome-features">
                <div>
                  <span>✓</span>
                  <p>Play-based experiences</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Creative exploration</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Individual encouragement</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Early learning foundations</p>
                </div>
              </div>

              <a
                href="#programmes"
                className="ek-text-link"
              >
                Discover our programmes
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= LEARNING PATHS ================= */}

        <section className="ek-programmes" id="programmes">
          <div className="ek-section-heading">
            <span className="ek-section-label">
              LITTLE STEPS, BIG MILESTONES
            </span>

            <h2>
              Our Learning <span>Paths</span>
            </h2>

            <p>
              Every age brings something wonderful. Find the right
              beginning for your little learner.
            </p>
          </div>

          <div className="ek-programme-grid">
            {learningPaths.map((path) => (
              <article className="ek-programme-card" key={path.number}>
                <div className="ek-programme-card-top">
                  <span className="ek-programme-icon">
                    {path.icon}
                  </span>

                  <span className="ek-programme-number">
                    {path.number}
                  </span>
                </div>

                <span className="ek-programme-age">
                  {path.age}
                </span>

                <h3>{path.title}</h3>

                <p>{path.description}</p>

                <a href="#enquiry" className="ek-programme-link">
                  Enquire now
                  <span>↗</span>
                </a>

                <div className="ek-programme-card-decoration"></div>
              </article>
            ))}
          </div>

          <div className="ek-programme-bottom">
            <span className="ek-programme-bottom-star">✳</span>

            <p>
              Every little learner has their own way of discovering
              the world.
            </p>

            <span className="ek-programme-bottom-star">✳</span>
          </div>
        </section>

        {/* ================= ACTIVITIES ================= */}

        <section className="ek-activities" id="activities">
          <div className="ek-activities-container">
            <div className="ek-section-heading">
              <span className="ek-section-label">
                LEARN BY DOING
              </span>

              <h2>
                Little Hands,
                <br />
                <span>Big Imaginations!</span>
              </h2>

              <p>
                We turn everyday moments into opportunities to
                explore, create, move and discover.
              </p>
            </div>

            <div className="ek-activity-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "ek-filter-button ek-filter-active"
                      : "ek-filter-button"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="ek-activity-grid">
              {filteredActivities.map((activity) => (
                <article
                  className="ek-activity-card"
                  key={activity.title}
                >
                  <div className="ek-activity-image">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      loading="lazy"
                    />

                    <span className="ek-activity-category">
                      {activity.category}
                    </span>
                  </div>

                  <div className="ek-activity-content">
                    <span className="ek-activity-day">
                      {activity.time}
                    </span>

                    <h3>{activity.title}</h3>

                    <p>{activity.description}</p>

                    <a href="#enquiry">
                      Discover more <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}

        <section className="ek-why-us">
          <div className="ek-why-container">
            <div className="ek-why-content">
              <span className="ek-section-label">
                MORE THAN A CLASSROOM
              </span>

              <h2>
                Little learners.
                <br />
                <span>Endless possibilities.</span>
              </h2>

              <p>
                The early years are full of wonder. We want every
                child to feel encouraged to ask questions, try new
                things and celebrate every little achievement.
              </p>

              <a href="/contact" className="ek-button ek-button-primary">
                Get to Know Us
                <span>↗</span>
              </a>
            </div>

            <div className="ek-why-grid">
              <article className="ek-why-card">
                <span className="ek-why-icon ek-why-yellow">
                  ♡
                </span>

                <h3>A Caring Environment</h3>

                <p>
                  A warm atmosphere where children feel welcomed,
                  supported and encouraged.
                </p>
              </article>

              <article className="ek-why-card">
                <span className="ek-why-icon ek-why-coral">
                  ✿
                </span>

                <h3>Learning Through Play</h3>

                <p>
                  Fun, hands-on experiences that spark curiosity and
                  creativity.
                </p>
              </article>

              <article className="ek-why-card">
                <span className="ek-why-icon ek-why-blue">
                  ☆
                </span>

                <h3>Growing Confidence</h3>

                <p>
                  Opportunities to communicate, participate and
                  develop independence.
                </p>
              </article>

              <article className="ek-why-card">
                <span className="ek-why-icon ek-why-green">
                  ☀
                </span>

                <h3>Everyday Discoveries</h3>

                <p>
                  Activities that help children explore the world
                  around them.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}

        <section className="ek-testimonials" id="testimonials">
          <div className="ek-testimonial-container">
            <div className="ek-testimonial-heading">
              <span className="ek-section-label">
                WORDS FROM OUR FAMILIES
              </span>

              <h2>
                Little smiles,
                <br />
                <span>happy parents.</span>
              </h2>

              <p>
                Every family's journey is special. Here is what
                parents appreciate about their children's learning
                experience.
              </p>

              <div className="ek-testimonial-controls">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial(
                      (activeTestimonial - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                  aria-label="Previous testimonial"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial(
                      (activeTestimonial + 1) % testimonials.length
                    )
                  }
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>

            <div className="ek-testimonial-card">
              <span className="ek-quote-mark">“</span>

              <div className="ek-testimonial-stars">
                ★★★★★
              </div>

              <p className="ek-testimonial-quote">
                {currentTestimonial.quote}
              </p>

              <div className="ek-testimonial-person">
                <div className="ek-testimonial-avatar">
                  {currentTestimonial.initials}
                </div>

                <div>
                  <h3>{currentTestimonial.name}</h3>

                  <p>{currentTestimonial.role}</p>
                </div>
              </div>

              <div className="ek-testimonial-decoration">
                ✳
              </div>
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}

        <section className="ek-gallery" id="gallery">
          <div className="ek-section-heading">
            <span className="ek-section-label">
              LITTLE MOMENTS, BIG MEMORIES
            </span>

            <h2>
              A Peek Into Our <span>World</span>
            </h2>

            <p>
              Discover the happy moments, creative activities and
              little adventures that make childhood special.
            </p>
          </div>

          <div className="ek-gallery-grid">
            <div className="ek-gallery-item ek-gallery-large">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
                alt="Children learning together"
                loading="lazy"
              />

              <span>Learning Together</span>
            </div>

            <div className="ek-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=85"
                alt="Colourful art and creativity"
                loading="lazy"
              />

              <span>Creative Little Minds</span>
            </div>

            <div className="ek-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=85"
                alt="A happy childhood moment"
                loading="lazy"
              />

              <span>Happy Moments</span>
            </div>

            <div className="ek-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=700&q=85"
                alt="Green surroundings for exploration"
                loading="lazy"
              />

              <span>Outdoor Discoveries</span>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section className="ek-faq" id="faq">
          <div className="ek-faq-container">
            <div className="ek-faq-intro">
              <span className="ek-section-label">
                HERE TO HELP
              </span>

              <h2>
                Frequently
                <br />
                Asked <span>Questions</span>
              </h2>

              <p>
                Starting school is an important milestone. Find
                answers to some common questions from parents.
              </p>

              <div className="ek-faq-note">
                <span>♡</span>

                <div>
                  <strong>Still have questions?</strong>

                  <p>
                    Our team will be happy to help you.
                  </p>

                  <a href="#enquiry">
                    Contact us →
                  </a>
                </div>
              </div>
            </div>

            <div className="ek-faq-list">
              {faqs.map((faq, index) => (
                <article
                  className={
                    activeFaq === index
                      ? "ek-faq-item ek-faq-item-active"
                      : "ek-faq-item"
                  }
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="ek-faq-question"
                    onClick={() =>
                      setActiveFaq(
                        activeFaq === index ? -1 : index
                      )
                    }
                    aria-expanded={activeFaq === index}
                  >
                    <span>{faq.question}</span>

                    <span className="ek-faq-toggle">
                      {activeFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {activeFaq === index && (
                    <div className="ek-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ADMISSION ENQUIRY ================= */}

        <section className="ek-admission" id="enquiry">
          <div className="ek-admission-decoration ek-admission-decoration-one">
            ✳
          </div>

          <div className="ek-admission-decoration ek-admission-decoration-two">
            ✦
          </div>

          <div className="ek-admission-container">
            <div className="ek-admission-content">
              <span className="ek-admission-label">
                EVERY BIG JOURNEY STARTS SMALL
              </span>

              <h2>
                Let's make their
                <br />
                first steps <span>special.</span>
              </h2>

              <p>
                Give your little learner a joyful beginning. Contact
                us to learn more about our programmes and admission
                process.
              </p>

              <div className="ek-admission-actions">
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Euro%20Kids%20admission."
                  target="_blank"
                  rel="noreferrer"
                  className="ek-button ek-button-white"
                >
                  Enquire on WhatsApp
                  <span>↗</span>
                </a>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="ek-admission-phone"
                >
                  Call us about admission
                </a>
              </div>
            </div>

            <div className="ek-admission-visual">
              <div className="ek-admission-image">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
                  alt="A young child smiling"
                  loading="lazy"
                />
              </div>

              <div className="ek-admission-sticker">
                <span>♡</span>
                <strong>Big dreams begin here!</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="*"
          element={
            <div className="ek-not-found">
              <h1>Page not found</h1>

              <p>The page you're looking for doesn't exist.</p>

              <Link to="/">Return Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;