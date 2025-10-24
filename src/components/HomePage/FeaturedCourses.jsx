import React from 'react';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Creating Design Skills with AI Tools',
      instructor: 'User-1',
      duration: '2 Weeks',
      level: 'Intermediate',
      status: 'Available',
      statusColor: '#55BE24',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=410&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Resume and Interview for Career Advancement',
      instructor: 'User-2',
      duration: '1 Week',
      level: 'Beginner-Intermediate',
      status: 'Available',
      statusColor: '#55BE24',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=410&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Modern Tools using MS Office',
      instructor: 'User-3',
      duration: '1 Week',
      level: 'Beginner',
      status: 'Available',
      statusColor: '#55BE24',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=410&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Basic Audio & Video Production for Film Students',
      instructor: 'User-4',
      duration: '3 Weeks',
      level: 'Beginner-Intermediate',
      status: 'Not Available',
      statusColor: '#BE2424',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=410&h=250&fit=crop'
    },
    {
      id: 5,
      title: '3D Rendering for Printing and Fabrication',
      instructor: 'User-5',
      duration: '1 Week',
      level: 'Advanced',
      status: 'Available',
      statusColor: '#55BE24',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=410&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Making a 3D VTuber Model for Content Creators',
      instructor: 'User-6',
      duration: '2-3 Weeks',
      level: 'Beginner-Advanced',
      status: 'Available',
      statusColor: '#55BE24',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=410&h=250&fit=crop'
    }
  ];

  return (
    <section className="featured-courses">
      <div className="courses-container">
        <div className="courses-header">
          <div className="courses-title-section">
            <h2 className="courses-title">Featured Skill Courses</h2>
            <p className="courses-subtitle">Explore our Popular Skill Courses</p>
          </div>
          <button className="all-courses-btn">All courses</button>
        </div>
        
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-content">
                <div className="course-header">
                  <p className="course-instructor">by {course.instructor}</p>
                  <h3 className="course-title">{course.title}</h3>
                </div>
                <div className="course-meta">
                  <div className="course-meta-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z" fill="#555555"/>
                      <path d="M8.5 4H7.5V9L11.5 11L12 10L8.5 8.5V4Z" fill="#555555"/>
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="course-meta-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="#555555"/>
                      <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="#555555"/>
                    </svg>
                    <span>{course.level}</span>
                  </div>
                </div>
                <div className="course-divider"></div>
                <div className="course-footer">
                  <div className="course-status">
                    <span className="status-text" style={{ color: course.statusColor }}>
                      {course.status}
                    </span>
                  </div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
