import React,{useEffect, useRef, useState} from 'react'
import Button from './Button'
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from 'react-use';
import gsap from 'gsap'

const navItems = ['Services','Projects','About','Contact']

const Navbar = () => {

    const [isAudioPlaying,setIsAudioPlaying] = useState(false)
    const [isIndicatorActive,setIndcatorActive] = useState(false)
    const [lastScrollY,setLastScrollY]= useState(0)
    const [isNavVisible,setisNavVisible]= useState(true)

    const navContainerRef = useRef()
    const audioElemetRef = useRef()

    const {y:currentScrollY} = useWindowScroll();
    useEffect(()=>{
        if(currentScrollY === 0){
            setisNavVisible(true)
            navContainerRef.current.classList.remove('floating-nav')
        }else if(currentScrollY > lastScrollY){
            setisNavVisible(false)
            navContainerRef.current.classList.add('floating-nav')
        }
        else if(currentScrollY < lastScrollY){
            setisNavVisible(true)
            navContainerRef.current.classList.add('floating-nav')
        }
        setLastScrollY(currentScrollY)
    },[currentScrollY])

    useEffect(()=>{
        gsap.to(navContainerRef.current,{
            y: isNavVisible?0:-100,
            opacity:isNavVisible?1:0,
            duration:0.2
        })
    },[isNavVisible])

    const toggleAudioIndicator = () =>{
        setIsAudioPlaying((prev)=>!prev)
        setIndcatorActive((prev)=>!prev)
    }

    useEffect(()=>{
       if(isAudioPlaying){
        audioElemetRef.current.play()

       }else{
        audioElemetRef.current.pause()
       } 
    },[isAudioPlaying])
  return (
    <div className='fixed  inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6' ref={navContainerRef}>
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center md:gap-7 gap-5">
                <img src="img/logo.png" alt="" className="w-10"/>
                {
                        navItems.map((item)=>(
                            <a href={`#${item.toLowerCase()}`} key={item} className='text-xs md:hidden text-blue-50'>{item}</a>
                        ))
                    }
            </div>
            <div className='flex h-full items-center'>
                <div className='hidden md:block'>
                    {
                        navItems.map((item)=>(
                            <a href={`#${item.toLowerCase()}`} key={item} className='nav-hover-btn'>{item}</a>
                        ))
                    }
                </div>
                <button  onClick={toggleAudioIndicator} className='ml-10 flex items-center space-x-0.5'>
                    <audio src="/audio/loop.mp3" className='hidden' loop ref={audioElemetRef}/>
                        {
                          [1,2,3,4,5].map((bar)=>(
                            <div key={bar} className={`indicator-line ${isIndicatorActive?'active':''}`} style={{animationDelay:`${bar * 0.1}s`}}/>
                          ))  
                        }
                </button>
            </div>
        </nav>

      </header>
    </div>
  )
}

export default Navbar
