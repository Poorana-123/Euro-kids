import { useState } from "react";
import "../styles/Gallery.css";
import ProgramsSection from "../components/ProgramsSection";

const galleryImages = [
  {
    id: 1,
    title: "Little Artists",
    category: "Creative",
    description: "Little hands creating colourful masterpieces.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
    size: "gallery-large",
  },
  {
    id: 2,
    title: "Learning Through Play",
    category: "Learning",
    description: "Every little discovery makes a difference.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85",
    size: "",
  },
  {
    id: 3,
    title: "Happy Little Learners",
    category: "Activities",
    description: "Making memories with friends every day.",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=85",
    size: "",
  },
  {
    id: 4,
    title: "Creative Discoveries",
    category: "Creative",
    description: "Exploring colours, shapes and imagination.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=85",
    size: "",
  },
  {
    id: 5,
    title: "Outdoor Adventures",
    category: "Outdoor",
    description: "Growing, exploring and enjoying the outdoors.",
    image:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=900&q=85",
    size: "gallery-tall",
  },
  {
    id: 6,
    title: "Little Explorers",
    category: "Learning",
    description: "Curiosity turns ordinary moments into discoveries.",
    image:
      "https://images.unsplash.com/photo-1472162314594-eca3c3d90c12?auto=format&fit=crop&w=800&q=85",
    size: "",
  },
  {
    id: 7,
    title: "Moments of Joy",
    category: "Activities",
    description: "Small moments, big smiles and happy memories.",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=800&q=85",
    size: "",
  },
  {
    id: 8,
    title: "A World of Imagination",
    category: "Creative",
    description: "A space where every little mind can shine.",
    image:
      "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85",
    size: "gallery-wide",
  },
];

const categories = [
  "All Moments",
  "Creative",
  "Learning",
  "Activities",
  "Outdoor",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Moments");

  const filteredImages =
    activeCategory === "All Moments"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="ek-gallery-page">
      {/* HERO SECTION */}
      <section className="ek-gallery-hero">
        <div className="ek-gallery-hero-content">
          <span className="ek-gallery-eyebrow">
            <span className="ek-gallery-sparkle">✦</span>
            LITTLE MOMENTS, BIG MEMORIES
          </span>

          <h1>
            Every picture tells
            <br />
            a <span>little story.</span>
          </h1>

          <p>
            From creative discoveries to joyful adventures, explore
            the special moments that make every day at EuroKids
            a beautiful journey of learning and growing.
          </p>

          <div className="ek-gallery-hero-actions">
            <a href="#gallery-collection" className="ek-gallery-primary-btn">
              Explore Our Gallery <span>↗</span>
            </a>

            <span className="ek-gallery-caption">
              <span className="ek-gallery-caption-star">★</span>
              Little smiles. Lifelong memories.
            </span>
          </div>
        </div>

        {/* HERO IMAGE COLLAGE */}
        <div className="ek-gallery-collage">
          <div className="ek-gallery-photo ek-gallery-photo-main">
            <img
              src={galleryImages[0].image}
              alt="Children enjoying a creative activity"
            />
            <div className="ek-gallery-photo-label">
              <span>🎨</span>
              Little creators
            </div>
          </div>

          <div className="ek-gallery-photo ek-gallery-photo-top">
            <img
              src={galleryImages[1].image}
              alt="A happy childhood learning moment"
            />
          </div>

          <div className="ek-gallery-photo ek-gallery-photo-bottom">
            <img
              src={galleryImages[3].image}
              alt="Children exploring creative activities"
            />
          </div>

          <div className="ek-gallery-floating-star ek-gallery-star-one">
            ✦
          </div>

          <div className="ek-gallery-floating-star ek-gallery-star-two">
            ✧
          </div>

          <div className="ek-gallery-floating-note">
            <span className="ek-gallery-note-icon">♡</span>
            <div>
              <strong>Little moments</strong>
              <small>Big memories</small>
            </div>
          </div>
        </div>

        <span className="ek-gallery-decoration ek-gallery-decoration-one">
          ✦
        </span>
        <span className="ek-gallery-decoration ek-gallery-decoration-two">
          ●
        </span>
      </section>

      {/* INTRODUCTION */}
      <section className="ek-gallery-intro">
        <div className="ek-gallery-intro-text">
          <span className="ek-gallery-section-label">
            A PEEK INTO OUR WORLD
          </span>

          <h2>
            Little moments.
            <br />
            <span>Wonderful beginnings.</span>
          </h2>
        </div>

        <p>
          Every day brings something new to discover. Take a look
          at the laughter, creativity, friendships and little
          achievements that make our preschool community special.
        </p>
      </section>

      {/* GALLERY COLLECTION */}
      <section
        className="ek-gallery-collection"
        id="gallery-collection"
      >
        <div className="ek-gallery-collection-header">
          <div>
            <span className="ek-gallery-section-label">
              OUR HAPPY PLACE
            </span>
            <h2>Moments worth remembering</h2>
          </div>

          <span className="ek-gallery-count">
            {filteredImages.length} special moments
          </span>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="ek-gallery-filters" aria-label="Filter gallery">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "ek-gallery-filter active"
                  : "ek-gallery-filter"
              }
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div className="ek-gallery-grid">
          {filteredImages.map((item) => (
            <article
              className={`ek-gallery-card ${item.size}`}
              key={item.id}
            >
              <div className="ek-gallery-card-image">
                <img src={item.image} alt={item.title} loading="lazy" />

                <span className="ek-gallery-card-category">
                  {item.category}
                </span>

                <div className="ek-gallery-card-overlay">
                  <span className="ek-gallery-view-icon">↗</span>
                </div>
              </div>

              <div className="ek-gallery-card-content">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="ek-gallery-card-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="ek-gallery-empty">
            No moments found in this category.
          </p>
        )}
      </section>

      {/* CLOSING BANNER */}
      <section className="ek-gallery-cta">
        <div className="ek-gallery-cta-decoration">✦</div>

        <div className="ek-gallery-cta-content">
          <span className="ek-gallery-cta-label">
            YOUR CHILD'S STORY STARTS HERE
          </span>

          <h2>
            Ready to make
            <br />
            <span>beautiful memories?</span>
          </h2>

          <p>
            Come discover a happy place where little minds learn,
            explore and shine every day.
          </p>

          <a
            href="/contact#admission-enquiry"
            className="ek-gallery-cta-btn"
          >
            Book a Visit <span>→</span>
          </a>
        </div>

        <div className="ek-gallery-cta-art" aria-hidden="true">
          <span className="ek-gallery-art-sun">☀</span>
          <span className="ek-gallery-art-star">✦</span>
          <span className="ek-gallery-art-heart">♥</span>
          <div className="ek-gallery-art-circle">
            <span>Little</span>
            <strong>Dreamers</strong>
            <span>Big Futures</span>
          </div>
        </div>
      </section>
      <ProgramsSection />
    </main>
  );
}

export default Gallery;