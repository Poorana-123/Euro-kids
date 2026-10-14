import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Activities.css";

const activities = [
  {
    id: 1,
    title: "Little Artists",
    category: "Creative",
    age: "2–6 years",
    description:
      "Little hands, big imaginations! Children explore colors, painting, drawing, and exciting craft projects.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
    emoji: "🎨",
    color: "peach",
    tag: "CREATE & EXPLORE",
  },
  {
    id: 2,
    title: "Music & Movement",
    category: "Movement",
    age: "2–6 years",
    description:
      "Sing, dance, clap, and move! Children discover rhythm while expressing themselves through music.",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=85",
    emoji: "🎵",
    color: "lavender",
    tag: "MOVE TO THE BEAT",
  },
  {
    id: 3,
    title: "Little Builders",
    category: "Learning",
    age: "2–5 years",
    description:
      "Blocks, puzzles, and playful challenges encourage children to think, experiment, and solve problems.",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=85",
    emoji: "🧩",
    color: "blue",
    tag: "THINK & DISCOVER",
  },
  {
    id: 4,
    title: "Nature Explorers",
    category: "Nature",
    age: "3–6 years",
    description:
      "Discover leaves, flowers, tiny insects, and the wonders of nature through guided exploration.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85",
    emoji: "🌱",
    color: "green",
    tag: "GROW & DISCOVER",
  },
  {
    id: 5,
    title: "Outdoor Adventures",
    category: "Movement",
    age: "2–6 years",
    description:
      "Fun movement games help children practice balance, coordination, teamwork, and confidence.",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=85",
    emoji: "🏃",
    color: "yellow",
    tag: "MOVE & PLAY",
  },
  {
    id: 6,
    title: "Magical Storytime",
    category: "Creative",
    age: "2–6 years",
    description:
      "Wonderful stories open doors to imagination, new words, listening skills, and thoughtful conversations.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    emoji: "📚",
    color: "pink",
    tag: "IMAGINE & LEARN",
  },
  {
    id: 7,
    title: "Tiny Scientists",
    category: "Learning",
    age: "3–6 years",
    description:
      "Simple, supervised experiments inspire curiosity as children observe, ask questions, and explore.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
    emoji: "🔍",
    color: "blue",
    tag: "ASK & EXPLORE",
  },
  {
    id: 8,
    title: "Little Gardeners",
    category: "Nature",
    age: "2–6 years",
    description:
      "Plant seeds, water little plants, and learn how patience and care help living things grow.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85",
    emoji: "🌼",
    color: "green",
    tag: "CARE & GROW",
  },
];

const categories = [
  "All Activities",
  "Creative",
  "Learning",
  "Movement",
  "Nature",
];

function Activities() {
  const [activeCategory, setActiveCategory] = useState("All Activities");

  const filteredActivities =
    activeCategory === "All Activities"
      ? activities
      : activities.filter(
          (activity) => activity.category === activeCategory
        );

  return (
    <main className="euro-activities-page">

      {/* HERO SECTION */}
      <section className="euro-activities-hero">

        <div className="euro-activities-hero-content">
          <span className="euro-activities-eyebrow">
            <span>✦</span> LITTLE HANDS, BIG DREAMS
          </span>

          <h1>
            Every day is a
            <span> new adventure!</span>
          </h1>

          <p>
            From messy masterpieces to magical discoveries,
            every activity gives little minds a new reason
            to wonder, explore, and grow.
          </p>

          <a
            href="#activity-gallery"
            className="euro-activities-hero-button"
          >
            Explore Our Activities <span>↓</span>
          </a>

          <div className="euro-activities-hero-note">
            <span>🌈</span>
            Learning is more fun when we play together!
          </div>
        </div>

        <div className="euro-activities-hero-visual">

          <div className="euro-activities-hero-photo">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85"
              alt="A young child enjoying a playful learning experience"
            />
          </div>

          <div className="euro-activities-float-card euro-activities-float-one">
            <span>🎨</span>
            <div>
              <strong>Create!</strong>
              <small>Make something wonderful</small>
            </div>
          </div>

          <div className="euro-activities-float-card euro-activities-float-two">
            <span>🌱</span>
            <div>
              <strong>Discover!</strong>
              <small>Explore the world around you</small>
            </div>
          </div>

          <span className="euro-activities-decor decor-star">✳</span>
          <span className="euro-activities-decor decor-heart">♡</span>
          <span className="euro-activities-decor decor-sun">☀</span>

        </div>

        <div className="euro-activities-hero-bottom">
          <span>PLAY WITH PURPOSE</span>
          <span>EXPLORE • CREATE • DISCOVER</span>
        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="euro-activities-intro">

        <div>
          <span className="euro-activities-section-tag">
            LITTLE MOMENTS, BIG LEARNING
          </span>

          <h2>
            Growing minds
            <span> through joyful play.</span>
          </h2>
        </div>

        <p>
          Every child learns differently. Our activity ideas bring
          together creativity, movement, discovery, and imagination
          to make early learning enjoyable and meaningful.
        </p>

      </section>


      {/* ACTIVITY GALLERY */}
      <section
        className="euro-activities-gallery"
        id="activity-gallery"
      >

        <div className="euro-activities-gallery-heading">
          <div>
            <span className="euro-activities-section-tag">
              LET THE FUN BEGIN
            </span>

            <h2>
              Find your little one's
              <span> happy place!</span>
            </h2>
          </div>

          <p>
            Little adventures for curious minds and growing hearts.
          </p>
        </div>


        {/* CATEGORY FILTERS */}
        <div className="euro-activities-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "euro-activities-filter active"
                  : "euro-activities-filter"
              }
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category === "All Activities" && "🌈"}
              {category === "Creative" && "🎨"}
              {category === "Learning" && "🧩"}
              {category === "Movement" && "🎵"}
              {category === "Nature" && "🌱"}
              <span>{category}</span>
            </button>
          ))}
        </div>


        {/* ACTIVITY CARDS */}
        <div className="euro-activities-grid">

          {filteredActivities.map((activity) => (
            <article
              className={`euro-activity-card activity-${activity.color}`}
              key={activity.id}
            >

              <div className="euro-activity-image">
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                />

                <span className="euro-activity-image-emoji">
                  {activity.emoji}
                </span>

                <span className="euro-activity-age">
                  {activity.age}
                </span>
              </div>

              <div className="euro-activity-content">

                <span className="euro-activity-tag">
                  {activity.tag}
                </span>

                <h3>{activity.title}</h3>

                <p>{activity.description}</p>

                <a href="#activity-enquiry">
                  Let's explore <span>↗</span>
                </a>

              </div>

            </article>
          ))}

        </div>

        <p className="euro-activities-gallery-note">
          ✨ Activities can be adapted to children's ages,
          interests, and developmental needs.
        </p>

      </section>


      {/* HOW CHILDREN BENEFIT */}
      <section className="euro-activities-benefits">

        <div className="euro-activities-benefits-heading">
          <span className="euro-activities-section-tag">
            MORE THAN JUST FUN
          </span>

          <h2>
            Little activities.
            <span> Lifelong skills.</span>
          </h2>

          <p>
            Play gives children opportunities to practice important
            skills while enjoying every little discovery.
          </p>
        </div>

        <div className="euro-activities-benefits-grid">

          <article className="euro-benefit-item">
            <span className="euro-benefit-icon benefit-peach">💡</span>
            <h3>Curiosity</h3>
            <p>Ask questions, explore ideas, and discover new things.</p>
          </article>

          <article className="euro-benefit-item">
            <span className="euro-benefit-icon benefit-blue">🤝</span>
            <h3>Friendship</h3>
            <p>Practice sharing, teamwork, kindness, and cooperation.</p>
          </article>

          <article className="euro-benefit-item">
            <span className="euro-benefit-icon benefit-yellow">🖍️</span>
            <h3>Creativity</h3>
            <p>Express ideas, experiment, and imagine possibilities.</p>
          </article>

          <article className="euro-benefit-item">
            <span className="euro-benefit-icon benefit-green">🌟</span>
            <h3>Confidence</h3>
            <p>Try new things, celebrate progress, and learn at their pace.</p>
          </article>

        </div>

      </section>


      {/* FINAL CTA */}
      <section
        className="euro-activities-cta"
        id="activity-enquiry"
      >

        <span className="euro-activities-cta-doodle cta-doodle-one">✳</span>
        <span className="euro-activities-cta-doodle cta-doodle-two">♡</span>

        <div className="euro-activities-cta-emoji">🎈</div>

        <span className="euro-activities-section-tag">
          YOUR LITTLE ONE'S NEXT ADVENTURE
        </span>

        <h2>
          Ready for a world
          <span> full of wonder?</span>
        </h2>

        <p>
          Come discover a joyful learning environment where
          little steps lead to wonderful possibilities.
        </p>

        <Link
          to="/contact#admission-enquiry"
          className="euro-activities-cta-button"
        >
          Enquire About Admission <span>♡</span>
        </Link>

      </section>

    </main>
  );
}

export default Activities;