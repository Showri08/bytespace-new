import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import CourseCard from '../components/CourseCard.jsx'
import Footer from '../components/Footer.jsx'
import { courses } from '../data/courses.js'
import './Home.css'

const featuredTags = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
]

const moreTags = [
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
  '+ More',
]

const categories = [
  { name: 'Design', icon: 'design' },
  { name: 'Development', icon: 'dev' },
  { name: 'IT & Software', icon: 'it' },
  { name: 'Business', icon: 'biz' },
  { name: 'Marketing', icon: 'mkt' },
  { name: 'Photography', icon: 'photo' },
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    img: '/assets/avatar-0.jpg',
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    img: '/assets/avatar-1.jpg',
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    img: '/assets/avatar-2.jpg',
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]

function CategoryIcon({ type }) {
  const common = { width: 36, height: 36, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7 }
  switch (type) {
    case 'design':
      return (
        <svg {...common}>
          <path d="M14 4 4 14l3 3 10-10-3-3z" />
          <path d="M12 6l3 3M5 15l2 2" />
        </svg>
      )
    case 'dev':
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
        </svg>
      )
    case 'it':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      )
    case 'biz':
      return (
        <svg {...common}>
          <path d="M4 20V9h5v11M9 20V5h6v15M15 20v-7h5v7" />
        </svg>
      )
    case 'mkt':
      return (
        <svg {...common}>
          <path d="M3 11v2a2 2 0 0 0 2 2h2l6 4V5L7 9H5a2 2 0 0 0-2 2z" />
          <path d="M16 9a4 4 0 0 1 0 6" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M4 8a4 3 0 0 1 8 0v8a4 3 0 0 1-8 0V8z" />
          <circle cx="17" cy="9" r="2" />
          <path d="M15 19c1-3 3-4 5-4" />
        </svg>
      )
  }
}

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="home">
      <section className="hero grid-bg">
        <Navbar variant="hero" />
        <div className="container hero-copy fade-up">
          <h1>
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p>
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          <form
            className="hero-search"
            onSubmit={(e) => {
              e.preventDefault()
              const q = new FormData(e.currentTarget).get('q')
              navigate(q ? `/search?q=${encodeURIComponent(q)}` : '/search')
            }}
          >
            <div className="hero-search-field">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input name="q" placeholder="Course, topic, creator" aria-label="Search courses" />
            </div>
            <button type="submit" className="btn btn-lime hero-search-btn">
              Search
            </button>
          </form>
        </div>

        <div className="hero-stage">
          <img className="shape shape-squiggle-l float" src="/assets/squiggle-lime.png" alt="" />
          <img className="shape shape-torus float-delay" src="/assets/torus-white.png" alt="" />
          <img className="shape shape-pyramid float" src="/assets/pyramid-lime.png" alt="" />
          <img className="shape shape-cylinder float-delay" src="/assets/cylinder-white.png" alt="" />
          <img className="hero-person" src="/assets/hero-visual.jpg" alt="Learner with laptop and course highlights" />
        </div>
      </section>

      <section className="partners">
        <div className="container partners-row">
          {['ipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'].map((label, i) => (
            <div className="partner" key={i} aria-hidden>
              <span className="partner-icon" />
              <span>{label === 'ipsum' ? 'Logoipsum' : label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="discover" id="courses">
        <div className="container">
          <div className="section-head center">
            <h2>
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>
            <p>
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
              different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          <div className="tag-row primary-tags">
            {featuredTags.map((tag, i) => (
              <button key={tag} className={`tag ${i === 0 ? 'active' : ''}`}>
                {tag}
              </button>
            ))}
          </div>
          <div className="tag-row secondary-tags">
            {moreTags.map((tag) => (
              <button key={tag} className={`tag ${tag === 'Web Development' ? 'accent' : ''}`}>
                {tag}
              </button>
            ))}
          </div>

          <div className="course-grid">
            {courses.map((c) => (
              <CourseCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="paths" id="categories">
        <div className="container">
          <div className="section-head center">
            <h2>Explore Diverse Learning Paths at Bytespace</h2>
            <p>
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
              various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully
              curated categories.
            </p>
          </div>
          <div className="category-grid">
            {categories.map((c) => (
              <Link to="/search" className="category-card" key={c.name}>
                <div className="category-orb">
                  <CategoryIcon type={c.icon} />
                </div>
                <h3>{c.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="growth">
        <div className="container growth-grid">
          <div className="growth-copy">
            <h2>
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p>
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <div className="stats">
              <div>
                <strong>12K</strong>
                <span>Students</span>
              </div>
              <div>
                <strong>70+</strong>
                <span>Courses</span>
              </div>
              <div>
                <strong>16</strong>
                <span>Creators</span>
              </div>
            </div>
          </div>
          <div className="growth-visual">
            <img src="/assets/growth-visual.jpg" alt="Professional learner with course progress" />
          </div>
        </div>
      </section>

      <section className="creator" id="creators">
        <div className="container creator-grid">
          <div className="creator-visual">
            <img src="/assets/creator-visual.jpg" alt="Creator managing course revenue" />
          </div>
          <div className="creator-copy">
            <h2>
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p>
              <strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration
              of educational courses.
            </p>
            <ul className="feature-list">
              {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map(
                (item) => (
                  <li key={item}>
                    <span className="check" aria-hidden>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta grid-bg">
        <img className="cta-shape cta-s1 float" src="/assets/squiggle-lime.png" alt="" />
        <img className="cta-shape cta-s2 float-delay" src="/assets/squiggle-white.png" alt="" />
        <img className="cta-shape cta-s3 float" src="/assets/pyramid-lime.png" alt="" />
        <img className="cta-shape cta-s4 float-delay" src="/assets/cylinder-white.png" alt="" />
        <img className="cta-shape cta-s5 float" src="/assets/torus-lime.png" alt="" />
        <img className="cta-shape cta-s6 float-delay" src="/assets/cone-white.png" alt="" />
        <div className="container cta-inner">
          <h2>
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>
          <p>
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
            become a part of a community comprising over 10,000 local and international creators. Utilize our Course
            Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Link to="/register" className="btn btn-lime cta-btn">
            Join as Creator
          </Link>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="testimonials-head">
            <h2>
              Discover What Our
              <br />
              Community Is Saying
            </h2>
            <p>
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
              from those who have experienced the transformative journey of learning and creating on our platform. Explore
              testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <article className="testimonial-card" key={t.name}>
                <img src={t.img} alt={t.name} />
                <h3>{t.name}</h3>
                <span>{t.role}</span>
                <p>&ldquo;{t.quote}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
