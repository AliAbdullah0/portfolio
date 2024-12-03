import React from 'react'

const Button = ({
    id,
    title,
    containerClass,
    rightIcon,
    leftIcon,
}) => {
  return (
    <button id={id} className={`group relative z-10 w0fit cursor-pointer overflow-hidden rounded-full px-7 py-2 text-black ${containerClass} transition-all hover:-translate-y-0.5  `}>
        {leftIcon}
        <span className='relative incline-flex overflow-hidden font-genral text-xs uppercase'>
            <div>
            {title}
            </div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button
