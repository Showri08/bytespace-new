import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Search from './pages/Search.jsx'
import Course from './pages/Course.jsx'
import Creator from './pages/Creator.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />
      <Route path="/creator" element={<Creator />} />
      <Route path="/course/:slug" element={<Course tab="about" />} />
      <Route path="/course/:slug/lessons" element={<Course tab="lessons" />} />
      <Route path="/course/:slug/reviews" element={<Course tab="reviews" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
