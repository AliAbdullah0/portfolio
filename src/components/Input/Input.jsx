import React from 'react'

function Input({
    label,
    placeholder,
    type='text',
    fontSize = 'text-lg',
    className = '',
    ...props

}) {
  return (
    <div className='w-full gap-1 flex flex-col'>
        {
            label && <label className={`font-${fontSize}`}>
                {label}
            </label>
        }
        <input type={type} className={`p-2 shadow-lg border-2 rounded outline-none ${className}`} {...props} />
    </div>
  )
}

export default Input
