import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { ProjectDetail } from './pages/ProjectDetail.tsx'
import { ArticleDetail } from './pages/ArticleDetail.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
