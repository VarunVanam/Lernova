import { useRef, useState, useEffect, useCallback } from 'react';
import './Mentors.css';

const mentors = [
  {
    name: 'Dr. Narasimha Murthy MA',
    title: 'Senior Director',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQGyooHHPM0rCg/profile-displayphoto-crop_800_800/B56ZpnDrlbG0AI-/0/1762665613217?e=1778112000&v=beta&t=aIqpDewtaRx_6QjZLoZ9jWuR5v28ytmTMlsIRP3-ddc',
    desc: 'Active voice in professional forums including IIIE, BSPIN, QCFI, and ISQ.'
  },
  {
    name: 'Renjith S Nair',
    title: 'Senior Director',
    img: 'https://media.licdn.com/dms/image/v2/C5103AQECGuXYDXrJ3w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516337270466?e=1778112000&v=beta&t=tNSTNO4VzhuoX52yd-1knylUDaarL9woGg2AAApKBak',
    desc: 'Spearheaded innovation in Generative AI and Agentic AI'
  },
  {
    name: 'Preedesh M',
    title: 'Director of Strategy & Engineering',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQH--t0guCQIyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716392508904?e=1778112000&v=beta&t=HEMgCdKQYmjYQXWG6V68_4jxTCaG4FpwrH4UArP7h4M',
    desc: 'At the forefront of one of most important transformation initiatives at Natwest group DigitalX'
  },
  {
    name: 'Ameet Chowdhury',
    title: 'Vice President',
    img: 'https://media.licdn.com/dms/image/v2/C4E03AQHhvcZkS49_Zg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517708054470?e=1778112000&v=beta&t=RZfopcA1akUXThBdLfmHWAyYATJfesIUQ0VSGe61ZbQ',
    desc: 'Key influencer, with excellent stakeholder and vendor relationship management skills.'
  },
  {
    name: 'Pamela Kumar',
    title: 'Chief Strategy Advisor(Telecom & Data)',
    img: 'https://media.licdn.com/dms/image/v2/C4E03AQFwvU_mfRy2DQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517670712320?e=1778112000&v=beta&t=jq1TRFoGP46wpk_9FRnN8C3ftI65QsTyXcbn5d_IzII',
    desc: 'FSID-IISC, exDirector General-Telecom STDs Development Society of India.'
  },
  {
    name: 'Siddharth Balachandran',
    title: 'Senior Technology and Strategy executive',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQEi8y1J69yUIw/profile-displayphoto-shrink_800_800/B56ZSK3yGnGoAc-/0/1737496667210?e=1778112000&v=beta&t=kNzDO4mxdAlrBgBC5O7NGpVxpoLo3cSEmnaBH0MkZWI',
    desc: 'Head of Airbus Innovation Center; Key contributor to Airbus`s AI strategy for Engineering & Customer Services '
  },
  {
    name: 'Krishnan Venkateswaran',
    title: 'CTO of Kyndryl India',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQFC3Kdpa1ETrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675853780333?e=1778112000&v=beta&t=AbyWj45TpoYgIK3enh5paMKYbDh50HY167-WzXEfi9s',
    desc: 'Kyndryl Distinguished Engineer, Master Inventor, and Chair of the Kyndryl Patent Board on Network and Edge Computing.'
  }
];

function Mentors() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 270 + 24; // card width + gap

  const scrollLeftHandler = () => {
    setCurrentIndex((prev) => (prev - 1 + mentors.length) % mentors.length);
  };

  const scrollRightHandler = () => {
    setCurrentIndex((prev) => Math.floor((prev + 1) % mentors.length));
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, cardWidth]);

  return (
    <main className="mentors-page">
      <section className="mentors-section">
        <div className="mentors-header">
          <div>
            <span className="section-eyebrow">The Network</span>
            <h2>Learn from the Best.</h2>
          </div>
          <a href="/" className="outline-btn">Join Waitlist</a>
        </div>
        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-btn-left" onClick={scrollLeftHandler}>
            &#8249;
          </button>
          <div className="carousel-container" ref={carouselRef}>
            <div className="mentors-carousel-grid" style={{ width: `${mentors.length * cardWidth}px` }}>
              {mentors.map((mentor, index) => (
                <article key={index} className="mentor-card">
                  <div className="mentor-avatar">
                    <img src={mentor.img} alt={mentor.name} />
                  </div>
                  <strong>{mentor.name}</strong>
                  <span>{mentor.title}</span>
                  <p>{mentor.desc}</p>
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

export default Mentors;

