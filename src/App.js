import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const parallaxRef = useRef(null)
  let animationFrameId = useRef(null)
  const [activeContent, setActiveContent] = useState('home')

  useEffect(() => {
    const parallaxElements = parallaxRef.current.querySelectorAll('.parallax')

    const handleMouseMove = (e) => {
      const xValue = e.clientX - window.innerWidth / 2
      const yValue = e.clientY - window.innerHeight / 2

      parallaxElements.forEach((el) => {
        const speedX = el.dataset.speedx
        const speedY = el.dataset.speedy
        el.style.transform = `translateX(calc(-50% + ${
          -xValue * speedX
        }px)) translateY(calc(-50% + ${yValue * speedY}px))`
      })
    }

    const onMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId.current)
      animationFrameId.current = requestAnimationFrame(() => handleMouseMove(e))
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  const handleNavClick = (content) => {
    setActiveContent(content)
  }
  return (
    <div className='App' ref={parallaxRef}>
      <header>
        <nav>
          <a href='index.html'>
            <img src='img/inevit.png' alt='inevit' className='logo' />
          </a>
          <ul>
            <li className='about' onClick={() => handleNavClick('about')}>
              about
            </li>
            <li className='webdev' onClick={() => handleNavClick('webdev')}>
              Software Development
            </li>
            <li
              className='translate'
              onClick={() => handleNavClick('translate')}
            >
              PL-HU Translating
            </li>
            <li
              className='wholesale'
              onClick={() => handleNavClick('wholesale')}
            >
              B2B Wholesale
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {activeContent === 'home' && (
          <>
            <img
              src='img/bg.png'
              alt='background'
              className='parallax bg'
              data-speedx='0.15'
              data-speedy='0.15'
            />
            <img
              src='img/middle.png'
              alt='middle'
              className='parallax middle'
              data-speedx='0.08'
              data-speedy='0.08'
            />
            <img
              src='img/rightup.png'
              alt='rightup'
              className='parallax rightup-img'
              data-speedx='0.08'
              data-speedy='0.08'
            />
            <div
              className='text parallax'
              data-speedx='0.05'
              data-speedy='0.05'
            >
              <h1>inevit</h1>
            </div>
            <img
              src='img/left.png'
              alt='left'
              className='parallax left-img'
              data-speedx='0.03'
              data-speedy='0.03'
            />
            <img
              src='img/right.png'
              alt='right'
              className='parallax right-img'
              data-speedx='0.03'
              data-speedy='0.03'
            />
            <img
              src='img/blurbottom.png'
              alt='blurbottom'
              className='blurbottom-img'
            />
          </>
        )}
        {activeContent === 'about' && (
          <>
            <img
              src='img/bg.png'
              alt='background'
              className='parallax bg'
              data-speedx='0.15'
              data-speedy='0.15'
            />
            <img
              src='img/middle.png'
              alt='middle'
              className='parallax middle-1'
              data-speedx='0.08'
              data-speedy='0.08'
            />
            <p className='about-text'>
              Born in Poland and raised in Hungary, my journey is a blend of
              these two rich heritages. My early years were shaped by assisting
              my parents in their Hungarian shops, importing goods from Poland.{' '}
              <br></br>This experience not only made me fluent in Polish and
              Hungarian but also ignited my passion for commercial translation
              and business. <br></br>I specialize in non-document commercial
              translations between Polish and Hungarian, understanding the
              nuances of business communication. <br></br>Alongside my
              linguistic skills, I've developed expertise in web development
              with a focus on MERN stack technology, crafting e-commerce
              webshops and engaging landing pages. <br></br>My entrepreneurial
              spirit led me to establish a wholesale company facilitating
              tailored import-export services between Poland and Hungary. This
              venture combines my cultural understanding, language proficiency,
              and business acumen to support seamless cross-border trade.
              <br></br>
              Welcome to my world, where language meets technology and business,
              creating a hub of opportunities for success and connection.
            </p>
            <img
              src='img/rightup.png'
              alt='rightup'
              className='parallax rightup-img-1'
              data-speedx='0.08'
              data-speedy='0.08'
            />

            <img
              src='img/left.png'
              alt='left'
              className='parallax left-img-1'
              data-speedx='0.03'
              data-speedy='0.03'
            />
            <img
              src='img/right.png'
              alt='right'
              className='parallax right-img-1'
              data-speedx='0.03'
              data-speedy='0.03'
            />
            <img
              src='img/blurbottom.png'
              alt='blurbottom'
              className='blurbottom-img'
            />
          </>
        )}
      </main>
    </div>
  )
}

export default App
