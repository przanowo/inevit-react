import { useEffect, useRef, useState } from 'react'
import './App.css'
import gsap from 'gsap' // <-- import GSAP
import { useGSAP } from '@gsap/react' // <-- import the hook from our React package

function App() {
  const parallaxRef = useRef(null)
  const [activeContent, setActiveContent] = useState('home')
  const h1Ref = useRef(null)
  const aboutTextRef = useRef(null)
  const webdevTextRef = useRef(null)
  const translateTextRef = useRef(null)
  const wholesaleTextRef = useRef(null)
  const homeElasticRef = useRef(null)
  const aboutElasticRef = useRef(null)
  const webdevElasticRef = useRef(null)
  const translateElasticRef = useRef(null)
  const wholesaleElasticRef = useRef(null)
  const contactElasticRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    //middle animation
    const parallaxElements = parallaxRef.current.querySelectorAll('.parallax')

    const onMouseMove = (e) => {
      const xValue = (e.clientX - window.innerWidth / 2) / window.innerWidth
      const yValue = (e.clientY - window.innerHeight / 2) / window.innerHeight

      parallaxElements.forEach((el) => {
        const speedX = el.dataset.speedx
        const speedY = el.dataset.speedy

        gsap.to(el, {
          x: xValue * window.innerWidth * speedX,
          y: yValue * window.innerHeight * speedY,
          ease: 'power3.out',
        })
      })
    }

    if (activeContent === 'home') {
      gsap.from(homeElasticRef.current, {
        scaleX: 1.2,
        scaleY: 1.3,
        duration: 2,
        repeat: 0,
        yoyo: false,
        ease: 'elastic.inOut(1,0.3)',
      })
    } else if (activeContent === 'about') {
      gsap.from(aboutTextRef.current, {
        y: -400,
        scale: 0,
        autoAlpha: 0,
        duration: 2,
      })
      gsap.from(aboutElasticRef.current, {
        scaleX: 1.2,
        scaleY: 1.2,
        duration: 2,
        repeat: 0,
        yoyo: false,
        ease: 'elastic.inOut(1,0.3)',
      })
    } else if (activeContent === 'webdev') {
      gsap.from(webdevTextRef.current, {
        y: -200,
        scale: 0,
        autoAlpha: 0,
        duration: 2,
      })
      gsap.from(webdevElasticRef.current, {
        scaleX: 1.2,
        scaleY: 1.2,
        duration: 2,
        repeat: 0,
        yoyo: false,
        ease: 'elastic.inOut(1,0.3)',
      })
    } else if (activeContent === 'translate') {
      gsap.from(translateTextRef.current, {
        y: -200,
        scale: 0,
        autoAlpha: 0,
        duration: 2,
      })
      gsap.from(translateElasticRef.current, {
        scaleX: 1.2,
        scaleY: 1.2,
        duration: 2,
        repeat: 0,
        yoyo: false,
        ease: 'elastic.inOut(1,0.3)',
      })
    } else if (activeContent === 'wholesale') {
      gsap.from(wholesaleTextRef.current, {
        y: -250,
        scale: 0,
        autoAlpha: 0,
        duration: 2,
      })
      gsap.from(wholesaleElasticRef.current, {
        scaleX: 1.2,
        scaleY: 1.2,
        duration: 2,
        repeat: 0,
        yoyo: false,
        ease: 'elastic.inOut(1,0.3)',
      })
    } else if (activeContent === 'contact') {
      gsap.from(contactElasticRef.current, {
        scaleX: 1.2,
        scaleY: 1.2,
        duration: 2,
        repeat: 0,
        yoyo: false,
        ease: 'elastic.inOut(1,0.3)',
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [activeContent])

  // gsap.from(h1Ref.current, {
  //   opacity: 0,
  //   duration: 3, // Duration of the animation
  //   stagger: 0.3,
  // })

  const handleNavClick = (content) => {
    setActiveContent(content)
  }
  return (
    <div className='App' ref={parallaxRef}>
      <header>
        <nav>
          <img
            onClick={() => handleNavClick('home')}
            src='img/inevit.png'
            alt='inevit'
            className='logo'
            ref={homeElasticRef}
          />
          <ul>
            <li
              className='about'
              onClick={() => handleNavClick('about')}
              ref={aboutElasticRef}
            >
              about
            </li>
            <li
              className='webdev '
              onClick={() => handleNavClick('webdev')}
              ref={webdevElasticRef}
            >
              Software Development
            </li>
            <li
              className='translate '
              onClick={() => handleNavClick('translate')}
              ref={translateElasticRef}
            >
              PL-HU Translating
            </li>
            <li
              className='wholesale '
              onClick={() => handleNavClick('wholesale')}
              ref={wholesaleElasticRef}
            >
              B2B Wholesale
            </li>
            <li
              className='contact'
              onClick={() => handleNavClick('contact')}
              ref={contactElasticRef}
            >
              contact
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
              ref={bgRef}
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
              ref={h1Ref}
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

            <div ref={aboutTextRef} className='about-text'>
              Welcome to Inevit, where the richness of Polish and Hungarian
              cultures is seamlessly integrated with advanced technology and
              astute business practices. Our origins trace back to Poland,
              evolving through the dynamic landscape of Hungary, laying the
              groundwork for a unique cross-cultural enterprise. Our
              foundational experiences stem from hands-on involvement in
              family-run Hungarian businesses, fostering a deep understanding of
              the intricacies involved in the Poland-Hungary import-export
              sector. At Inevit, we transcend traditional language services. Our
              focus is on facilitating effective business communication between
              Polish and Hungarian enterprises. We pride ourselves on attention
              to detail and cultural nuances, ensuring clarity and efficiency in
              every transaction. Moreover, Inevit is at the forefront of web
              development, specializing in MERN stack technologies. Our
              portfolio features a range of bespoke e-commerce platforms and
              engaging websites, each crafted to enhance user interaction and
              digital presence for businesses. Our entrepreneurial journey led
              to the establishment of a specialized wholesale division, aimed at
              providing customized import-export solutions between Poland and
              Hungary. This division embodies our comprehensive understanding of
              cultural dynamics, language proficiency, and business insights,
              all of which are pivotal in ensuring smooth and successful
              cross-border trade. Welcome to my world, where language meets
              technology and business, creating a hub of opportunities for
              success and connection.
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
        {activeContent === 'webdev' && (
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
            <div ref={webdevTextRef} className='webdev-text'>
              <p>
                Inevit's Software Development services offer a comprehensive
                range of solutions for your IT needs. Whether you're looking for
                a fully customized web application built using the MERN stack or
                a budget-friendly website using template providers, we have you
                covered. Our team is adept at managing projects from initial
                branding to final app development, ensuring your digital
                presence is both impactful and user-friendly. We cater to all
                scales of projects from small-scale website setups to extensive
                web applications. With our flexible approach, we can adapt to
                your specific requirements and budget constraints. For more
                information on our software development services and how we can
                help with your next IT project, please don't hesitate to contact
                us.
              </p>
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
        {activeContent === 'translate' && (
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
            <div ref={translateTextRef} className='translate-text'>
              <p>
                Welcome to Inevit's Translation Services, where we specialize in
                bridging communication gaps in the vehicle and general goods
                trade between Poland and Hungary. Our focus is solely on
                providing top-notch translation services, ensuring that your
                conversations with business partners are clear and effective.
                Whether it's through email or over the phone, our skilled
                translators are equipped to handle all your needs. We offer
                flexible pricing options: choose our hourly rate for one-off
                projects or opt for a fixed price for recurring business deals.
                Please note, our services are limited to translation only; we do
                not engage in sourcing goods or contacts. For more detailed
                information or to discuss your specific needs, feel free to
                contact us. Let Inevit be your linguistic bridge in business!
              </p>
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
        {activeContent === 'wholesale' && (
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

            <div ref={wholesaleTextRef} className='wholesale-text'>
              Welcome to Inevit's focused wholesale service. We specialize in
              managing import-export trade specifically in truck-sized
              quantities. Our approach is tailored to facilitate seamless
              transactions without the need for maintaining a stock inventory.
              We handle the intricacies of cross-border trade between Poland and
              Hungary, ensuring that your bulk orders are processed efficiently
              and effectively. If you have specific needs or inquiries about our
              import-export services, please reach out through our contact form.
              Let Inevit streamline your wholesale trading experience.
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
        {activeContent === 'contact' && (
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
            {/* content */}
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
      </main>
    </div>
  )
}

export default App
