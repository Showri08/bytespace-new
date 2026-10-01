import { Link } from 'react-router-dom'

export default function Logo({ light = false, dark = false }) {
  const mark = light || !dark ? 'var(--lime)' : 'var(--lime)'
  const text = light ? '#fff' : 'var(--ink)'
  return (
    <Link to="/" className="logo" style={{ color: text }}>
      <span className="logo-mark" style={{ color: mark }} aria-hidden>
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <path d="M10 4c10 1 18 5 22 14 2 5 2 11-1 16-7-5-14-8-21-8V4z" fill="currentColor" />
          <path d="M10 36c9-1 17-5 21-13 2-4 2-9 0-13-6 6-13 10-21 10v16z" fill="currentColor" opacity=".75" />
        </svg>
      </span>
      <span className="logo-text">ByteSpace</span>
    </Link>
  )
}
