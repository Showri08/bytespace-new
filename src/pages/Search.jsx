import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Layout, { PageHero } from '../components/Layout.jsx'
import CourseCard from '../components/CourseCard.jsx'
import { courses, searchTags } from '../data/courses.js'
import './Inner.css'

export default function Search() {
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  const [query, setQuery] = useState(q)
  const [tag, setTag] = useState('Featured')
  const [page, setPage] = useState(1)
  const list = useMemo(() => [...courses, ...courses, ...courses], [])

  return (
    <Layout>
      <PageHero>
        <h1>Find Your Next Course</h1>
        <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" />
          </div>
          <select className="search-select" defaultValue="courses" aria-label="Search type">
            <option value="courses">Courses</option>
            <option value="creators">Creators</option>
          </select>
        </form>
      </PageHero>

      <div className="container">
        <div className="filters">
          <div className="filter-pills">
            <button type="button">Filter</button>
            <button type="button">Level</button>
            <button type="button">Category</button>
          </div>
          <button type="button" className="sort-btn">Most relevant</button>
        </div>
        <div className="tag-row">
          {searchTags.map((t) => (
            <button key={t} className={`tag ${t === tag ? 'active' : ''}`} onClick={() => setTag(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="course-grid" style={{ marginTop: 28 }}>
          {list.map((c, i) => (
            <CourseCard key={`${c.slug}-${i}`} {...c} />
          ))}
        </div>
        <div className="pager">
          <button type="button" aria-label="Previous">{'<'}</button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} type="button" className={page === n ? 'active' : ''} onClick={() => setPage(n)}>
              {n}
            </button>
          ))}
          <button type="button" aria-label="Next">{'>'}</button>
        </div>
      </div>
    </Layout>
  )
}
