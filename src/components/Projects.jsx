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

const BentoCard = ({src,title,description,containerClass})=>{
    return(
     <div className='relative size-full '>
        <img src={src} alt={title} className='w-full  absolute z-10'/>
        <div className={`relative z-10 flex size-full flex-col text-blue-50 justify-between ${containerClass}`}>
            <div className='p-3 md:p-6 absolute z-10'>
                <h1 className='bento-title special-font '>{title}</h1>
                    <p className='mt-3 max-w-64 text-xs'>{description}</p>
                    
            </div>
        </div>
     </div>   
    )
}

const Projects = () => {
  return (
    <section id='projects' className='bg-black '>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
            <h1 className='bento-title special-font text-blue-50 '>My <b>Pr</b>ojects</h1>
    
        <BentoTilt className='border-hsla relative mb-7 mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard 
            src='img/Project-1.jpeg'
            title = {
                <>
                    AI I<b>N</b>TEGRATED WEBSITE
                </>
            }
            description="A Website consisting of Real-Time Object Detection ,Text Recognition & Image Recognition Features."
            />
        </BentoTilt>
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-2'>
            <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                <BentoCard
                src='img/Project-2.jpeg'
                title={<>Nike Clone</>}
                description='A FULL ON NIKE CLONE WITH RESPONSIVE UI AND FUCNTIONALITY!'
                />
            </BentoTilt>
        <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard
            src='img/Project-3.jpeg'
            title={<><b>F</b>ast Food Website</>}
            description='A FAST FOOD WEBAPP FOR ONLINE FOOD ORDERING!'
            />
        </BentoTilt>
        <div className='bento_tilt_2'>
            <div className='flex size-full justify-center flex-col bg-yellow-300 p-5 rounded'>
                <h1 className='bento-title special-font text-black max-w-64'><b>M</b>ore Co<b>m</b>ing So<b>o</b>n!</h1>
                <TiLocationArrow className='m-5 scale-[5] self-end'/>
            </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
