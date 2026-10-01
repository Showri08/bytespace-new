import { Link } from 'react-router-dom'

const avatars = [0, 1, 2, 3].map((i) => `/assets/avatar-${i}.jpg`)

export default function CourseCard({
  slug = 'build-digital-asset',
  title,
  image,
  rating = '4.5',
  price = '$25',
  author = 'by purepearl studio',
}) {
  return (
    <Link to={`/course/${slug}`} className="course-card">
      <div className="course-thumb">
        <img src={image} alt="" />
        <div className="course-meta-pills">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>
      <div className="course-body">
        <div className="course-title-row">
          <h3>{title}</h3>
          <span className="course-rating">
            {rating}
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
              <path fill="#9ca3af" d="M12 17.3 6.2 20.5l1.6-6.6L3 9.5l6.7-.5L12 3l2.3 6 6.7.5-4.8 4.4 1.6 6.6z" />
            </svg>
          </span>
        </div>
        <p className="course-author">{author}</p>
        <div className="course-footer">
          <div className="course-badges">
            <span className="level">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 18V10M10 18V6M16 18v-4M20 18V8" />
              </svg>
              Beginner
            </span>
            <div className="avatar-stack">
              {avatars.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
              <span className="more">26+</span>
            </div>
          </div>
          <p className="course-price">
            <strong>{price}</strong>
            <span>/lifetime</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
