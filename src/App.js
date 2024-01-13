import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const parallaxRef = useRef(null)
  let animationFrameId = useRef(null)

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
  return (
    <div className='App' ref={parallaxRef}>
      <header>
        <nav>
          <a href='index.html'>
            <img src='img/inevit.png' alt='inevit' className='logo' />
          </a>
          <ul>
            <li className='about'>
              <a href='pages/about'>About</a>
            </li>
            <li className='webdev'>
              <a href='pages/web-dev'>Software Development</a>
            </li>
            <li className='translate'>
              <a href='pages/web-dev'>PL-HU Translating</a>
            </li>
            <li className='wholesale'>
              <a href='pages/web-dev'>B2B Wholesale</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <img
          src='img/bg.png'
          alt='background'
          className='parallax bg'
          data-speedx='0.15'
          data-speedy='0.15'
          data-distane='1001'
        />
        <img
          src='img/middle.png'
          alt='middle'
          className='parallax middle'
          data-speedx='0.08'
          data-speedy='0.08'
          data-distane='1001'
        />
        <img
          src='img/rightup.png'
          alt='rightup'
          className='parallax rightup-img'
          data-speedx='0.08'
          data-speedy='0.08'
        />
        <div className='text parallax' data-speedx='0.05' data-speedy='0.05'>
          <h1>inevit</h1>
        </div>
        <img
          src='img/left.png'
          alt='left'
          className='parallax left-img'
          data-speedx='0.03'
          data-speedy='0.03'
          data-distane='1001'
        />
        <img
          src='img/right.png'
          alt='right'
          className='parallax right-img'
          data-speedx='0.03'
          data-speedy='0.03'
          data-distane='1001'
        />
        <img
          src='img/blurbottom.png'
          alt='blurbottom'
          className='blurbottom-img'
        />
      </main>
    </div>
  )
}

export default App
