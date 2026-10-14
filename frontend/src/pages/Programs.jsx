import { Link } from "react-router-dom";
import "../styles/Programs.css";
import Program from "../assets/copy.jpg";
import Program1 from "../assets/ukg.webp"

const programmes = [
  {
    id: 1,
    number: "01",
    title: "Early Years Programme",
    subtitle: "A wonderful beginning",
    description:
      "A warm, playful environment where little learners explore their surroundings, develop confidence, and discover the joy of learning through everyday experiences.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85",
    age: "2–3 Years",
    button: "Explore Programme",
    color: "blue",
    features: ["Sensory Play", "Social Skills", "Creative Discovery"],
  },
  {
    id: 2,
    number: "02",
    title: "Kindergarten Programme",
    subtitle: "Growing curious minds",
    description:
      "Children build early literacy, numeracy, communication, and problem-solving skills through engaging activities, stories, music, and guided exploration.",
    image:Program,
    age: "3–4 Years",
    button: "Explore Programme",
    color: "yellow",
    features: ["Early Literacy", "Number Play", "Learning Together"],
  },
  {
    id: 3,
    number: "03",
    title: "Senior Kindergarten",
    subtitle: "Ready for the next adventure",
    description:
      "A balanced learning experience that nurtures independence, early academic skills, creative thinking, and the confidence children need for their next educational journey.",
    image:Program1,
    age: "4–6 Years",
    button: "Explore Programme",
    color: "blue",
    features: ["School Readiness", "Critical Thinking", "Independence"],
  },
];

const learningBenefits = [
  {
    icon: "✿",
    title: "Learning Through Play",
    description:
      "Children explore new ideas through hands-on activities, playful challenges, and meaningful experiences.",
  },
  {
    icon: "✦",
    title: "Creativity & Discovery",
    description:
      "Art, music, storytelling, and exploration encourage children to imagine, experiment, and express themselves.",
  },
  {
    icon: "♡",
    title: "Care That Builds Confidence",
    description:
      "A welcoming learning environment helps children develop relationships, independence, and confidence.",
  },
];

const ageGroups = [
  {
    age: "2–3",
    label: "Little Explorers",
    description:
      "Discovering the world through sensory experiences, movement, and play.",
    icon: "☀",
  },
  {
    age: "3–4",
    label: "Curious Learners",
    description:
      "Building language, friendships, creativity, and early learning skills.",
    icon: "✿",
  },
  {
    age: "4–6",
    label: "Confident Thinkers",
    description:
      "Developing independence, foundational knowledge, and school readiness.",
    icon: "✦",
  },
];

function Programs() {
  return (
    <main className="ek-programmes-page">
      {/* =====================================
          HERO SECTION
      ====================================== */}
      <section className="ek-programmes-hero">
        <div className="ek-programmes-hero-copy">
          <span className="ek-programmes-eyebrow">
            <span className="ek-programmes-eyebrow-star">✦</span>
            LITTLE STEPS, BIG FUTURES
          </span>

          <h1>
            Big dreams begin
            <br />
            with <span>little discoveries.</span>
          </h1>

          <p>
            Every child has a unique way of learning. Our programmes
            nurture curiosity, creativity, confidence, and a lifelong
            love of discovery.
          </p>

          <div className="ek-programmes-hero-actions">
            <a
              href="#featured-programmes"
              className="ek-programmes-btn ek-programmes-btn-yellow"
            >
              Discover Our Programmes <span>→</span>
            </a>

            <span className="ek-programmes-hero-note">
              <span>★</span> Growing through joyful learning
            </span>
          </div>
        </div>

        <div className="ek-programmes-hero-visual">
          <div className="ek-programmes-hero-image ek-hero-image-main">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85"
              alt="Children enjoying a learning activity"
            />
          </div>

          <div className="ek-programmes-hero-image ek-hero-image-small">
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=85"
              alt="A joyful early childhood moment"
            />
          </div>

          <div className="ek-programmes-hero-note-card">
            <span className="ek-programmes-note-icon">✿</span>
            <div>
              <strong>Made for little minds</strong>
              <small>Designed for discovery</small>
            </div>
          </div>

          <span className="ek-programmes-hero-star">✦</span>
          <span className="ek-programmes-hero-sun">☀</span>
        </div>

        <span className="ek-programmes-hero-decoration">
          ✧
        </span>
      </section>

      {/* =====================================
          INTRODUCTION
      ====================================== */}
      <section className="ek-programmes-intro">
        <span className="ek-programmes-section-label">
          A JOURNEY OF LITTLE DISCOVERIES
        </span>

        <h2>
          The right beginning
          <br />
          makes <span>a big difference.</span>
        </h2>

        <p>
          Our age-appropriate programmes combine joyful activities
          with purposeful learning, helping children build the skills
          and confidence they need at every stage of early childhood.
        </p>
      </section>

      {/* =====================================
          FEATURED PROGRAMMES
          Inspired by the supplied reference
      ====================================== */}
      <section
        className="ek-featured-programmes"
        id="featured-programmes"
      >
        <span className="ek-featured-decoration ek-featured-sun">
          ☀
        </span>

        <span className="ek-featured-decoration ek-featured-star">
          ✧
        </span>

        <span className="ek-featured-decoration ek-featured-flower">
          ❀
        </span>

        <div className="ek-featured-heading">
          <span className="ek-programmes-section-label">
            FIND THEIR LITTLE SPARK
          </span>

          <h2>
            Every stage has
            <br />
            <span>something wonderful.</span>
          </h2>

          <p>
            Thoughtfully designed experiences that help every child
            explore, connect, and grow at their own pace.
          </p>
        </div>

        {/* Two overlapping cards on desktop */}
        <div className="ek-featured-cards">
          {programmes.slice(0, 2).map((programme, index) => (
            <article
              className={`ek-featured-card ek-featured-card-${programme.color} ${
                index === 0
                  ? "ek-featured-card-first"
                  : "ek-featured-card-second"
              }`}
              key={programme.id}
            >
              <div className="ek-featured-card-image">
                <img
                  src={programme.image}
                  alt={programme.title}
                  loading="lazy"
                />

                <span className="ek-featured-age">
                  {programme.age}
                </span>
              </div>

              <div className="ek-featured-card-content">
                <span className="ek-featured-card-subtitle">
                  {programme.subtitle}
                </span>

                <h3>{programme.title}</h3>

                <p>{programme.description}</p>

                <div className="ek-featured-card-features">
                  {programme.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                <Link
                  to="/contact#admission-enquiry"
                  className="ek-featured-card-button"
                >
                  {programme.button}
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="ek-featured-bottom-note">
          <span>✦</span>
          Different stages. One beautiful journey.
          <span>✦</span>
        </div>
      </section>

      {/* =====================================
          THIRD PROGRAMME
      ====================================== */}
      <section className="ek-senior-programme">
        <div className="ek-senior-programme-image">
          <img
            src={programmes[2].image}
            alt="Children exploring and learning together"
            loading="lazy"
          />

          <span className="ek-senior-image-badge">
            Ages 4–6 years
          </span>
        </div>

        <div className="ek-senior-programme-content">
          <span className="ek-programmes-section-label">
            THE NEXT LITTLE ADVENTURE
          </span>

          <h2>
            Growing confidence,
            <br />
            <span>one day at a time.</span>
          </h2>

          <p>
            Our senior kindergarten programme helps children
            strengthen their early academic foundations while
            discovering their interests, building independence,
            and preparing for the transition to school.
          </p>

          <ul className="ek-senior-checklist">
            <li>
              <span>✓</span> Early reading and number skills
            </li>
            <li>
              <span>✓</span> Communication and collaboration
            </li>
            <li>
              <span>✓</span> Creative thinking and exploration
            </li>
            <li>
              <span>✓</span> Confidence and independence
            </li>
          </ul>

          <Link
            to="/contact#admission-enquiry"
            className="ek-programmes-btn ek-programmes-btn-blue"
          >
            Enquire About Admissions <span>→</span>
          </Link>
        </div>
      </section>

      {/* =====================================
          LEARNING APPROACH
      ====================================== */}
      <section className="ek-learning-approach">
        <div className="ek-learning-approach-heading">
          <span className="ek-programmes-section-label">
            MORE THAN JUST LEARNING
          </span>

          <h2>
            Little learners.
            <br />
            <span>Wonderful possibilities.</span>
          </h2>

          <p>
            We create meaningful opportunities for children to learn
            about themselves, others, and the world around them.
          </p>
        </div>

        <div className="ek-learning-benefits">
          {learningBenefits.map((benefit, index) => (
            <article
              className="ek-learning-benefit"
              key={benefit.title}
            >
              <span
                className={`ek-learning-benefit-icon ek-benefit-icon-${index + 1}`}
              >
                {benefit.icon}
              </span>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>

              <span className="ek-learning-benefit-number">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================
          AGE GROUPS
      ====================================== */}
      <section className="ek-age-groups">
        <div className="ek-age-groups-heading">
          <span className="ek-programmes-section-label">
            EVERY AGE IS A NEW ADVENTURE
          </span>

          <h2>
            Find their <span>next little step.</span>
          </h2>

          <p>
            Every stage brings new questions, new discoveries,
            and exciting opportunities to grow.
          </p>
        </div>

        <div className="ek-age-group-list">
          {ageGroups.map((group, index) => (
            <article
              className="ek-age-group-card"
              key={group.age}
            >
              <div
                className={`ek-age-group-icon ek-age-icon-${index + 1}`}
              >
                {group.icon}
              </div>

              <div className="ek-age-group-info">
                <span className="ek-age-group-label">
                  {group.age} YEARS
                </span>

                <h3>{group.label}</h3>

                <p>{group.description}</p>
              </div>

              <Link
                to="/contact#admission-enquiry"
                className="ek-age-group-arrow"
                aria-label={`Enquire about ${group.label}`}
              >
                ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ====================================== */}
      <section className="ek-programmes-cta">
        <div className="ek-programmes-cta-copy">
          <span className="ek-programmes-cta-label">
            LET THE ADVENTURE BEGIN
          </span>

          <h2>
            Their little story
            <br />
            starts <span>right here.</span>
          </h2>

          <p>
            Come and discover a welcoming environment where your
            child can explore, learn, make friends, and grow.
          </p>

          <Link
            to="/contact#admission-enquiry"
            className="ek-programmes-btn ek-programmes-btn-yellow"
          >
            Book a Visit <span>→</span>
          </Link>
        </div>

        <div className="ek-programmes-cta-art">
          <div className="ek-cta-sun">☀</div>

          <div className="ek-cta-circle">
            <span>Little steps</span>
            <strong>BIG</strong>
            <span>possibilities</span>
          </div>

          <span className="ek-cta-star">✦</span>
          <span className="ek-cta-heart">♡</span>
        </div>
      </section>
    </main>
  );
}

export default Programs;