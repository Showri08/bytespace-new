import { Link } from 'react-router-dom'
import Layout, { PageHero } from '../components/Layout.jsx'
import './Inner.css'

export default function NotFound() {
  return (
    <Layout>
      <PageHero>
        <div className="notfound">
          <p className="code">404</p>
          <h1>
            The page you are looking
            <br />
            for doesn’t exist
          </h1>
          <p>Try to use a correct url or go back to homepage to start again</p>
          <Link to="/" className="btn btn-lime">
            Back to Home
          </Link>
        </div>
      </PageHero>
    </Layout>
  )
}
