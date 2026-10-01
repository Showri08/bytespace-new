import Layout, { PageHero } from '../components/Layout.jsx'
import CourseCard from '../components/CourseCard.jsx'
import { courses } from '../data/courses.js'
import './Inner.css'

export default function Creator() {
  return (
    <Layout>
      <PageHero>
        <div className="creator-head">
          <div className="creator-id">
            <img src="/assets/creator-avatar.jpg" alt="PurePearl Studio" />
            <div>
              <h1 style={{ textAlign: 'left', margin: 0, fontSize: '2.2rem' }}>
                PurePearl Studio <span className="badge-creator">Creator</span>
              </h1>
              <p style={{ margin: '8px 0 0' }}>Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <p>
            Welcome to the creative world of PurePearl Studio. Here, you’ll discover the passion, expertise, and
            inspiration that drive my creative journey. Let’s explore and learn together!
          </p>
          <p>
            Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to
            multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>
          <div className="creator-stats">
            <div style={{ display: 'flex', gap: 12 }}>
              <span className="stat-chip">3 Products</span>
              <span className="stat-chip">12 Followers</span>
            </div>
            <button type="button" className="follow">
              Follow
            </button>
          </div>
        </div>
      </PageHero>
      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="filters">
          <div className="filter-pills">
            <button type="button">Filter</button>
            <button type="button">Level</button>
            <button type="button">Category</button>
          </div>
          <button type="button" className="sort-btn">
            Most relevant
          </button>
        </div>
        <div className="course-grid">
          {courses.map((c) => (
            <CourseCard key={c.slug} {...c} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
