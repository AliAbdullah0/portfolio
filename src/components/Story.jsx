import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import RoundedCorners from './RoundedCorners'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'

const Story = () => {

    const frameRef = useRef(null)

    const handleMouseLeave = (e) => {

        const element = frameRef.current

        gsap.to(element, {
            duration: 0.3,
            rotateX:0,
            rotateY:0,
            ease: "power1.inOut"
        })
    }
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left
        const y = clientY - rect.top

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5
        const rotateY = ((x - centerX) / centerX) * 5

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 600,
            ease: "power1.inOut"
        })

    }


    return (
        <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
            <div className='flex flex-col size-full items-center py-10 pb-24'>
                <p className='font-genral uppercase text-center text-xs md:text-[10px] *'>expertise in HTML, TAILWIND CSS,<br/> JavaScript, and React.js,</p>
                <div className='relative size-full'>
                    <AnimatedTitle title="<b>Y</b>our <b>V</b>ision, <b>M</b>y Code – Let’s Create Something Amazing!" containerClass="mt-5 pointer-events-none relative z-10 mix-blend-difference lg:text-8xl md:text-7xl text-6xl" />
                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <img
                                    ref={frameRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    src="img/entrance.webp"
                                    alt="entrance.webp"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <RoundedCorners/>
                    </div>
                </div>
                <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
                    <div className='flex h-full w-full text-xs md:w-1/3 flex-col p-5 items-center md:items-start'>
                        <p className='p-2 md:mt-3 mt-7 max-w-sm font-circular-web text-violet-50 lg:text-lg text-center md:text-left'>
                        I love transforming creative ideas into functional, eye-catching web applications. With a deep understanding of modern development tools and practices, I ensure every project is a blend of innovation and practicality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story
