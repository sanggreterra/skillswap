import React, { useState, useEffect } from 'react';
import Header from './components/HomePage/Header';
import HeroSection from './components/HomePage/HeroSection';
import CategoriesSection from './components/HomePage/CategoriesSection';
import FeaturedCourses from './components/HomePage/FeaturedCourses';
import TopMentors from './components/HomePage/TopMentors';
import StatisticsSection from './components/HomePage/StatisticsSection';
import AboutSection from './components/HomePage/AboutSection';
import TestimonialsSection from './components/HomePage/TestimonialsSection';
import LatestBlogs from './components/HomePage/LatestBlogs';
import Footer from './components/HomePage/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'login' || hash === 'signup') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      default:
        return (
          <>
            <Header />
            <HeroSection />
            <CategoriesSection />
            <FeaturedCourses />
            <TopMentors />
            <StatisticsSection />
            <AboutSection />
            <TestimonialsSection />
            <LatestBlogs />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
