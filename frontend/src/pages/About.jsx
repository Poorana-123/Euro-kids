import { useEffect } from "react";
import {
  ArrowRight,
  Heart,
  Lightbulb,
  ShieldCheck,
  Palette,
  BookOpen,
  Music,
  Puzzle,
  Users,
  Star,
  Sparkles,
  Baby,
  GraduationCap,
  Sun,
  Shapes,
  TreePine,
} from "lucide-react";
import {Link } from "react-router-dom";
import "./About.css";


const learningValues = [
  {
    icon: Heart,
    number: "01",
    title: "Learning with Love",
    description:
      "Every child deserves to feel loved, valued, and understood. We create a warm environment where little learners feel safe to express themselves.",
    color: "pink",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Curiosity First",
    description:
      "We encourage children to ask questions, explore new ideas, experiment, and discover the wonderful world around them.",
    color: "yellow",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Safe & Supportive",
    description:
      "We work to create a welcoming, caring space where children can develop confidence, independence, and meaningful friendships.",
    color: "blue",
  },
  {
    icon: Palette,
    number: "04",
    title: "Creativity Every Day",
    description:
      "From painting and music to storytelling and imaginative play, we give children opportunities to express their unique personalities.",
    color: "green",
  },
];

const learningActivities = [
  {
    icon: BookOpen,
    title: "Early Learning",
    description:
      "Discover letters, numbers, stories, and language through enjoyable, age-appropriate activities.",
    color: "blue",
    tag: "THINK",
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description:
      "Paint, draw, build, and imagine while developing creativity and fine motor skills.",
    color: "pink",
    tag: "CREATE",
  },
  {
    icon: Music,
    title: "Music & Movement",
    description:
      "Enjoy songs, rhythms, dance, and movement that encourage expression and coordination.",
    color: "yellow",
    tag: "EXPRESS",
  },
  {
    icon: TreePine,
    title: "Play & Explore",
    description:
      "Learn about the world through playful discovery, group activities, and outdoor experiences.",
    color: "green",
    tag: "DISCOVER",
  },
];

const facilities = [
  {
    icon: Shapes,
    title: "Play-Based Learning",
    description:
      "Hands-on experiences that make learning meaningful, memorable, and fun.",
  },
  {
    icon: Users,
    title: "Social Development",
    description:
      "Opportunities to share, cooperate, communicate, and build friendships.",
  },
  {
    icon: Puzzle,
    title: "Thinking Skills",
    description:
      "Age-appropriate activities that encourage problem-solving and independent thinking.",
  },
  {
    icon: Baby,
    title: "Individual Attention",
    description:
      "Encouragement that respects each child's interests, abilities, and pace of learning.",
  },
];

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("about-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="euro-about">
      {/* ================= HERO SECTION ================= */}

<section className="about-hero">
  <div className="about-hero-pattern" aria-hidden="true" />

  {/* Hero content */}
  <div className="about-hero-content">
    <div className="about-hero-decoration about-sun">
      <Sun size={58} strokeWidth={1.5} />
    </div>

    <div className="about-hero-decoration about-flower">
      <Shapes size={58} strokeWidth={1.5} />
    </div>
    <h1>
      Growing Little Minds,
      <span>Building Big Dreams.</span>
    </h1>

    <p className="about-hero-description">
      At EuroKids, every little discovery matters. We create joyful
      learning experiences where children explore,
      discover their strengths, and grow with confidence.
    </p>

    <div className="about-hero-buttons">
      <a
        href="#our-story"
        className="about-button about-button-primary"
      >
        Discover Our Story
        <ArrowRight size={19} />
      </a>

      <a
        href="#our-approach"
        className="about-button about-button-outline"
      >
        How We Learn
      </a>
    </div>

    <div className="about-hero-note">
      <Heart size={18} fill="currentColor" />

      <p>
        Every child is unique.
        <strong> Every little step counts.</strong>
      </p>
    </div>
  </div>

  {/* Full-width image with scalloped top edge */}
  <div className="about-hero-image-section">
    <img
      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2000&q=90"
      alt="Children enjoying their early learning experience"
      className="about-hero-image"
    />

    {/* Scalloped curve overlays the image */}
    <div className="about-scallop" aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Yellow border */}
        <path
          className="about-scallop-border"
          d="
            M0 85
            C25 85 30 25 80 25
            C130 25 145 85 190 85
            C220 85 225 55 265 55
            C305 55 320 95 355 95
            C395 95 410 45 455 45
            C500 45 520 90 555 90
            C590 90 600 70 635 70
            C675 70 690 100 725 100
            C770 100 785 45 830 45
            C875 45 895 90 930 90
            C970 90 985 30 1030 30
            C1075 30 1095 85 1135 85
            C1175 85 1190 55 1230 55
            C1270 55 1290 95 1325 95
            C1370 95 1380 55 1440 55
          "
        />

        {/* Cream section covering the area above the curves */}
        <path
          className="about-scallop-fill"
          d="
            M0 0
            H1440
            V55
            C1380 55 1370 95 1325 95
            C1290 95 1270 55 1230 55
            C1190 55 1175 85 1135 85
            C1095 85 1075 30 1030 30
            C985 30 970 90 930 90
            C895 90 875 45 830 45
            C785 45 770 100 725 100
            C690 100 675 70 635 70
            C600 70 590 90 555 90
            C520 90 500 45 455 45
            C410 45 395 95 355 95
            C320 95 305 55 265 55
            C225 55 220 85 190 85
            C145 85 130 25 80 25
            C30 25 25 85 0 85
            Z
          "
        />
      </svg>
    </div>
  </div>
</section>
      {/* ================= OUR STORY ================= */}

      <section className="about-story section-padding" id="our-story">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="about-story-visual about-reveal">
              <div className="about-story-main-image">
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=85"
                  alt="Children exploring and learning through play"
                  loading="lazy"
                />
              </div>

              <div className="about-story-decoration" aria-hidden="true">
                <Shapes size={75} strokeWidth={1.2} />
              </div>

              <div className="about-story-label">
                <span className="about-story-label-icon">
                  <Heart size={23} fill="currentColor" />
                </span>

                <div>
                  <strong>A Place to Belong</strong>
                  <span>A happy start to learning</span>
                </div>
              </div>
            </div>

            <div className="about-story-content about-reveal">
              <span className="about-section-label">
                <span />
                GET TO KNOW US
              </span>

              <h2>
                More Than a Preschool.
                <span> A Place to Grow.</span>
              </h2>

              <p>
                Childhood is full of firsts — the first new friend, the first
                question, the first little achievement, and the first big
                dream. We believe these moments deserve a nurturing space.
              </p>

              <p>
                At EuroKids, our aim is to make early learning enjoyable,
                engaging, and meaningful. Through play, exploration,
                storytelling, creative activities, and supportive guidance,
                we help children develop the skills they need for the journey
                ahead.
              </p>

              <p>
                We celebrate every child's curiosity and encourage them to
                learn at their own pace, express their ideas, and discover
                the joy of trying something new.
              </p>

              <a href="#our-values" className="about-text-link">
                Discover what makes us special
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEARNING APPROACH ================= */}

      <section className="about-approach section-padding" id="our-approach">
        <div className="about-container">
          <div className="about-section-heading about-reveal">
            <span className="about-section-label">
              <span />
              LITTLE LEARNERS, BIG POSSIBILITIES
            </span>

            <h2>
              Learning Should Feel
              <span> Like an Adventure.</span>
            </h2>

            <p>
              Children learn best when they can participate, imagine, explore,
              and have fun. We make room for all of it.
            </p>
          </div>

          <div className="about-activity-grid">
            {learningActivities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <article
                  className={`about-activity-card about-card-${activity.color} about-reveal`}
                  key={activity.title}
                  style={{ "--card-delay": `${index * 100}ms` }}
                >
                  <div className="about-activity-top">
                    <span className="about-activity-icon">
                      <Icon size={29} strokeWidth={1.8} />
                    </span>

                    <span className="about-activity-tag">
                      {activity.tag}
                    </span>
                  </div>

                  <h3>{activity.title}</h3>

                  <p>{activity.description}</p>

                  <span className="about-activity-bottom">
                    <span>Little discoveries every day</span>
                    <ArrowRight size={18} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}

      <section className="about-values section-padding" id="our-values">
        <div className="about-container">
          <div className="about-values-heading about-reveal">
            <span className="about-section-label">
              <span />
              WHAT GUIDES US
            </span>

            <h2>
              Little Hearts.
              <span> Meaningful Values.</span>
            </h2>

            <p>
              The best learning experiences begin with care, curiosity, and the
              freedom to be yourself.
            </p>
          </div>

          <div className="about-values-grid">
            {learningValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  className={`about-value-card about-value-${value.color} about-reveal`}
                  key={value.title}
                  style={{ "--card-delay": `${index * 100}ms` }}
                >
                  <div className="about-value-card-top">
                    <span className="about-value-icon">
                      <Icon size={28} strokeWidth={1.8} />
                    </span>

                    <span className="about-value-number">
                      {value.number}
                    </span>
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>

                  <span className="about-value-decoration" aria-hidden="true">
                    <Star size={25} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= GROWING TOGETHER ================= */}

      <section className="about-growing section-padding">
        <div className="about-container">
          <div className="about-growing-grid">
            <div className="about-growing-content about-reveal">
              <span className="about-section-label">
                <span />
                EVERY SMALL STEP MATTERS
              </span>

              <h2>
                Growing Together,
                <span> One Day at a Time.</span>
              </h2>

              <p>
                Early childhood is about much more than learning letters and
                numbers. It is also about discovering emotions, building
                relationships, becoming independent, and developing confidence.
              </p>

              <p>
                Our learning experiences encourage children to communicate,
                collaborate, explore ideas, and celebrate their achievements
                — from the smallest discovery to the biggest smile.
              </p>

              <div className="about-growth-points">
                <div className="about-growth-point">
                  <span className="about-growth-point-icon">
                    <Heart size={20} />
                  </span>

                  <div>
                    <strong>Emotional Growth</strong>
                    <span>Recognising feelings and building trust.</span>
                  </div>
                </div>

                <div className="about-growth-point">
                  <span className="about-growth-point-icon">
                    <Puzzle size={20} />
                  </span>

                  <div>
                    <strong>Thinking & Discovery</strong>
                    <span>Asking questions and finding solutions.</span>
                  </div>
                </div>

                <div className="about-growth-point">
                  <span className="about-growth-point-icon">
                    <Users size={20} />
                  </span>

                  <div>
                    <strong>Friendships & Confidence</strong>
                    <span>Learning to share, communicate, and cooperate.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-growing-visual about-reveal">
              <div className="about-growing-image">
                <img
                  src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=85"
                  alt="Children sharing a joyful learning experience"
                  loading="lazy"
                />
              </div>

              <div className="about-growing-note">
                <span className="about-growing-note-icon">
                  <Sparkles size={25} />
                </span>

                <div>
                  <strong>Every child can shine.</strong>
                  <span>In their own wonderful way.</span>
                </div>
              </div>

              <div className="about-growing-star" aria-hidden="true">
                <Star size={46} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEARNING ENVIRONMENT ================= */}

      <section className="about-environment section-padding">
        <div className="about-container">
          <div className="about-section-heading about-reveal">
            <span className="about-section-label">
              <span />
              A SPACE TO EXPLORE
            </span>

            <h2>
              A Little World of
              <span> Wonderful Discoveries.</span>
            </h2>

            <p>
              A positive early learning experience gives children room to
              develop new interests, learn together, and discover what they
              love.
            </p>
          </div>

          <div className="about-environment-grid">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <article
                  className="about-environment-card about-reveal"
                  key={facility.title}
                  style={{ "--card-delay": `${index * 90}ms` }}
                >
                  <div className="about-environment-icon">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3>{facility.title}</h3>
                    <p>{facility.description}</p>
                  </div>

                  <ArrowRight
                    className="about-environment-arrow"
                    size={20}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ADMISSIONS CTA ================= */}

      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta about-reveal">
            <div className="about-cta-pattern" aria-hidden="true">
              <Star className="about-cta-star-one" size={43} />
              <Sparkles className="about-cta-star-two" size={35} />
              <Shapes className="about-cta-star-three" size={52} />
            </div>

            <div className="about-cta-content">
              <span className="about-cta-label">
                <Heart size={16} fill="currentColor" />
                LET THE LITTLE JOURNEY BEGIN
              </span>

              <h2>
                Every Big Dream
                <span> Starts Somewhere Little.</span>
              </h2>

              <p>
                Come discover a joyful beginning for your child's learning
                journey. We'd love to help you take the next little step.
              </p>

              <Link to="/contact#enquiry" className="about-cta-button">
                Enquire About Admissions
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="about-cta-illustration" aria-hidden="true">
              <div className="about-cta-circle">
                <GraduationCap size={83} strokeWidth={1.4} />
              </div>

              <span className="about-cta-floating-heart">
                <Heart size={34} fill="currentColor" />
              </span>

              <span className="about-cta-floating-star">
                <Star size={31} fill="currentColor" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;