import React, { useState,useRef } from 'react'
import {TiLocationArrow} from 'react-icons/ti'
import { Link } from 'react-router'

const BentoTilt = ({
    children,
    className = ''
})=>{
    const [transformStyle,setTransformStyle] = useState('')

    const itemRef = useRef()
    const handleMouseMove = (e)=>{
        if(!itemRef.current) return;

        const {left,top,width,height} = itemRef.current.getBoundingClientRect()

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / width;

        const tiltX = (relativeY - 0.5) * 7
        const tiltY = (relativeX - 0.5) * 7

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`

        setTransformStyle(newTransform)
    }
    const handleMouseLeave = ()=>{
        setTransformStyle('')    
    }
    return(
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:transformStyle}}>
            {children}
        </div>
    )
}

const BentoCard = ({src,title,description})=>{
    return(
     <div className='relative size-full md:p-6 p-3 '>
        <video src={src}
        loop
        muted
        autoPlay
        className='size-full absolute left-0 top-0 object-cover'
        />
        <div className='relative z-10 flex size-full flex-col text-blue-50 justify-between'>
            <div>
                <h1 className='bento-title special-font'>{title}</h1>
            {
                description && (
                    <p className='mt-3 max-w-64 text-xs'>{description}</p>
                    )
                }
            </div>
        </div>
     </div>   
    )
}

const Features = () => {
  return (
    <section id='what do we offer?' className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
            <p className='font-circular-web text-lg text-blue-50'>Always Improving</p>
            <p className='max-w-md font-circular-web text-blue-50 text-lg opacity-50'>For me, web development is a journey. I’m constantly refining my skills, exploring new technologies, and applying best practices to ensure my work stays ahead of the curve.</p>
    
        <BentoTilt className='border-hsla relative mb-7 mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard 
            src='videos/feature-1.mp4'
            title = {
                <>
                    responsi<b>v</b>e
                </>
            }
            description="Creating websites that look stunning and work flawlessly on any device."
            />
        </BentoTilt>
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-2'>
            <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                <BentoCard
                src='videos/feature-2.mp4'
                title={<>Performance</>}
                description='Enhancing website speed and efficiency for optimal user satisfaction.'
                />
            </BentoTilt>
        <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard
            src='videos/feature-3.mp4'
            title={<><b>d</b>ynamic</>}
            description='Building interactive and engaging UIs for seamless user experiences'
            />
        </BentoTilt>
        <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard
            src='videos/feature-4.mp4'
            title={<>api i<b>n</b>tegration</>}
            description='Connecting applications to robust APIs for real-time data and functionality.'
            />
        </BentoTilt>
        <div className='bento_tilt_2'>
            <div className='flex size-full justify-center flex-col bg-violet-300 p-5 rounded'>
                <h1 className='bento-title special-font text-black max-w-64'><b>M</b>ore Co<b>m</b>ing So<b>o</b>n!</h1>
                <TiLocationArrow className='m-5 scale-[5] self-end'/>
            </div>
        </div>
        <div className='bento-tilt_2'>
            <video
            src='videos/hero-4.mp4'
            autoPlay
            muted
            loop
            className='size-full object-cover object-center'
            />
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Features
