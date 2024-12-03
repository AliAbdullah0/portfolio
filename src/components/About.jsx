import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import AnimatedTitle from './AnimatedTitle'

const About = () => {

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true
      }
    })

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0
    })
  })

  return (
    <div className='w-screen min-h-screen overflow-y-hidden' id='about'>
      <div className='relative mb-6 mt-36 flex flex-col gap-5'>
        <h2 className='font-genral text-center uppercase text-sm md:text-xl'>Crafting Interactive Web Experiences with React.js

</h2>
        <AnimatedTitle title="Let's <b>C</b>ollaborate to bring<br /><b>Y</b>our ideas to life!" containerClass="mt-5 lg:text-7xl text-6xl" />

        <div className='about-subtext'>
          <p>A Passionate React.js developer with a knack for building responsive, dynamic, and user-friendly web applications.</p>
        </div>
      </div>
      <div className='h-dvh w-screen overflow-y-hidden' id='clip'>
        <div className='mask-clip-path about-image'>
          <img src="img/about-2.jpg" alt="Bg" className='absolute left-0 top-0 size-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default About
