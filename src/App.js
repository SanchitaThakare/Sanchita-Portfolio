import React, { Suspense, lazy ,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
// import Projects from './components/Projects';

const HomePage = lazy(() => import('./components/Home'));
const AboutPage = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'))
const EducationPage = lazy(() => import('./components/Education'))
const ContactPage=lazy(()=>import('./components/Contact'))

function App() {
  return (
    <Router>
      <Sidebar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}


export default App;
