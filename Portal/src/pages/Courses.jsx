import { useRef, useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import './Courses.css';

const courses = [
  {
    title: 'Machine Learning Mastery',
    instructor: 'Dr. Priya Sharma',
    desc: 'Build production-ready ML systems. From neural networks to deployment pipelines.',
    duration: '12 weeks',
    level: 'Advanced',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Data Science Pro',
    instructor: 'Renjith S Nair',
    desc: 'End-to-end data pipelines, advanced stats, and storytelling with insights.',
    duration: '10 weeks',
    level: 'Intermediate',
    img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Leadership Lab',
    instructor: 'Ameet Chowdhury',
    desc: 'Executive presence, team dynamics, and strategic decision-making frameworks.',
    duration: '8 weeks',
    level: 'Advanced',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cloud Architect Certification',
    instructor: 'Krishnan Venkateswaran',
    desc: 'Design scalable, secure cloud infrastructures. AWS, Azure, multi-cloud strategies.',
    duration: '14 weeks',
    level: 'Intermediate',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cyber Defense Essentials',
    instructor: 'Siddharth Balachandran',
    desc: 'Threat hunting, incident response, zero-trust architectures.',
    duration: '9 weeks',
    level: 'Intermediate',
    img: 'https://images.unsplash.com/photo-1614697317286-3a8f74ab6c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Product Mastery',
    instructor: 'Preedesh M',
    desc: 'From ideation to scaling. User research, growth hacks, monetization.',
    duration: '11 weeks',
    level: 'Advanced',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Generative AI Specialist Cert',
    instructor: 'Dr. Narasimha Murthy',
    desc: 'Prompt engineering, fine-tuning, ethical AI deployment.',
    duration: '6 weeks',
    level: 'Beginner',
    img: 'https://images.unsplash.com/photo-1689363301623-768351a4c2b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Strategic Innovation',
    instructor: 'Pamela Kumar',
    desc: 'Disruptive thinking, business model canvas, venture scaling.',
    duration: '7 weeks',
    level: 'Advanced',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

function Courses() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 320 + 24; // card + gap

  const scrollLeftHandler = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  }, [courses.length]);

  const scrollRightHandler = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  }, [courses.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, cardWidth]);

  return (
    <main className="courses-page">
      <section className="courses-section">
        <div className="courses-header">
          <div>
            <span className="section-eyebrow">Premium Learning</span>
            <h2>Courses & Certifications</h2>
            <p>Taught by industry professionals who live and breathe these domains.</p>
          </div>
          <NavLink to="/" className="outline-btn">Join Waitlist</NavLink>
        </div>
        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-btn-left" onClick={scrollLeftHandler}>
            &#8249;
          </button>
          <div className="carousel-container" ref={carouselRef}>
            <div className="courses-carousel-grid" style={{ width: `${courses.length * cardWidth}px` }}>
              {courses.map((course, index) => (
                <article key={index} className="course-card">
                  <div className="course-image">
                    <img src={course.img} alt={course.title} />
                  </div>
                  <h3>{course.title}</h3>
                  <span className="instructor">{course.instructor}</span>
                  <p>{course.desc}</p>
                  <div className="course-meta">
                    <span className="duration">{course.duration}</span>
                    <span className="level level-advanced">{course.level}</span>
                  </div>
                  <NavLink to="/login" className="primary-btn">Enroll Now</NavLink>
                </article>
              ))}
            </div>
          </div>
          <button className="carousel-btn carousel-btn-right" onClick={scrollRightHandler}>
            &#8250;
          </button>
        </div>
      </section>
    </main>
  );
}

export default Courses;
