import { Link, NavLink, useParams } from 'react-router-dom'
import Layout, { PageHero } from '../components/Layout.jsx'
import { featuredCourse, keyPoints, modules, ratingBars, reviews } from '../data/courses.js'
import './Inner.css'

function Sidebar() {
  return (
    <aside>
      <div className="sidebar-card">
        <h3>112 Lessons (24 hours)</h3>
        <div className="lesson-mini">
          <div>
            <strong>01</strong>
            <span>Introduction to Digital Assets</span>
            <em>12 mins</em>
          </div>
          <div>
            <strong>02</strong>
            <span>Design Principles for Impacts</span>
            <em>21 mins</em>
          </div>
          <div>
            <strong>03</strong>
            <span>Advanced Techniques in Digital Creation</span>
            <em>16 mins</em>
          </div>
        </div>
        <p className="more-videos">99 more videos</p>
        <p className="enroll-copy">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
        <p className="price-lg">
          $25<span>/lifetime</span>
        </p>
        <button type="button" className="btn btn-lime enroll-btn">
          Enroll Now
        </button>
      </div>
      <div className="includes">
        <h4>This course include</h4>
        <ul>
          <li>Learning Resources</li>
          <li>Quality Lesson Videos</li>
          <li>Certificate of Completion</li>
          <li>Private Consultation</li>
        </ul>
        <div className="creator-mini">
          <img src="/assets/creator-avatar.jpg" alt="PurePearl Studio" />
          <div>
            <strong>PurePearl Studio</strong>
            <div style={{ color: '#6b7280', fontSize: 14 }}>Professional Creator</div>
          </div>
        </div>
        <p className="enroll-copy" style={{ marginTop: 14, fontSize: 14 }}>
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>
        <Link to="/creator" className="profile-btn" style={{ display: 'block', textAlign: 'center' }}>
          See Full Profile
        </Link>
      </div>
    </aside>
  )
}

function About() {
  const c = featuredCourse
  return (
    <>
      <h2>Description</h2>
      <p>
        Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build
        Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into
        the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to
        mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for
        navigating the dynamic landscape of digital asset creation.
      </p>
      <p>
        In the initial modules, you’ll establish a solid foundation by immersing yourself in the foundational concepts
        that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling
        digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
      </p>
      <p>
        As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances of
        design principles that drive impactful creations. Uncover the secrets behind effective visual communication,
        exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.
        Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in
        practical scenarios.
      </p>
      <h2 style={{ marginTop: 28 }}>Sneak Peak</h2>
      <div className="sneak">
        {c.sneak.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>
      <h2>Key Points</h2>
      <ul className="keys">
        {keyPoints.map((item) => (
          <li key={item}>
            <span className="check" aria-hidden>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

function Lessons() {
  return (
    <>
      <h2>Explore the Modules</h2>
      <p>
        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing
        practical insights and hands-on experiences.
      </p>
      <h2 style={{ marginTop: 24 }}>Lesson List</h2>
      {modules.map((m) => (
        <article className="module" key={m.title}>
          <div className="mod-icon">▶</div>
          <div>
            <strong>{m.title}</strong>
            <p>{m.body}</p>
          </div>
        </article>
      ))}
      <h2>Lesson Content</h2>
      <p>
        Engage with each lesson through captivating video content, detailed textual explanations, and interactive
        elements. Download resources, complete assignments, and test your understanding with quizzes.
      </p>
      <h2 style={{ marginTop: 24 }}>Lesson Progress Tracking</h2>
      <p>Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
      <div className="progress-box">
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
          <span>Learning Progress</span>
          <span>55%</span>
        </div>
        <div className="bar">
          <i />
        </div>
      </div>
    </>
  )
}

function Reviews() {
  return (
    <>
      <h2>What Learners Are Saying</h2>
      <p>
        Discover what our learners have to say about their experience with ‘Build Digital Assets: A Comprehensive
        Guide.’ Read reviews and ratings from individuals who have embarked on the transformative journey of mastering
        digital asset creation.
      </p>
      <div className="rating-panel">
        <div className="score">
          <div>Ratings</div>
          <strong>4.7</strong>
        </div>
        <div className="bars">
          {ratingBars.map((r) => (
            <div className="bar-row" key={r.stars}>
              <span>{r.stars}</span>
              <div className="track">
                <i style={{ width: r.width }} />
              </div>
              <span>{r.count}</span>
            </div>
          ))}
        </div>
      </div>
      <h3>Individual Reviews:</h3>
      <div className="star-filters">
        <button type="button" className="active">
          All rating
        </button>
        {[5, 4, 3, 2, 1].map((n) => (
          <button type="button" key={n}>
            {n}
          </button>
        ))}
      </div>
      {reviews.map((r) => (
        <article className="review-card" key={r.name}>
          <div className="review-head">
            <div className="review-who">
              <img src={r.avatar} alt="" />
              <div>
                <strong>{r.name}</strong>
                <div style={{ color: '#5b7cff', fontSize: 14 }}>{r.role}</div>
              </div>
            </div>
            <span style={{ color: '#9ca3af' }}>a year ago</span>
          </div>
          <div style={{ marginTop: 8 }}>★★★★★</div>
          <p>{r.quote}</p>
        </article>
      ))}
    </>
  )
}

export default function Course({ tab = 'about' }) {
  const { slug } = useParams()
  const base = `/course/${slug || featuredCourse.slug}`
  const c = featuredCourse

  return (
    <Layout>
      <PageHero>
        <div className="course-hero-copy">
          <div className="course-hero-top">
            <div>
              <h1>{c.title}</h1>
              <p className="sub">{c.subtitle}</p>
              <Link to="/creator" className="course-author-link">
                by {c.author}
              </Link>
              <div className="meta-pills">
                <span>{c.level}</span>
                <span>★ {c.rating} ({c.reviews} reviews)</span>
                <span>{c.students} Students</span>
              </div>
            </div>
            <button type="button" className="share-btn">
              Share
            </button>
          </div>
          <div className="course-media">
            <div className="preview-frame">
              <img src={c.preview} alt="" />
              <button className="play-btn" type="button" aria-label="Play preview">
                <span>▶</span>
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      </PageHero>
      <div className="course-body-wrap">
        <div className="course-main">
          <nav className="tabs">
            <NavLink to={base} end className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
            <NavLink to={`${base}/lessons`} className={({ isActive }) => (isActive ? 'active' : '')}>
              Lessons
            </NavLink>
            <NavLink to={`${base}/reviews`} className={({ isActive }) => (isActive ? 'active' : '')}>
              Reviews
            </NavLink>
          </nav>
          {tab === 'about' && <About />}
          {tab === 'lessons' && <Lessons />}
          {tab === 'reviews' && <Reviews />}
        </div>
      </div>
    </Layout>
  )
}
