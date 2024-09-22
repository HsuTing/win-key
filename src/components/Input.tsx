import React, { useId } from 'react'

interface InputProps {
  label: string
  placeholder?: string
  type?: 'text' | 'tel' | 'url' | 'number' | 'email' | 'password' | 'file'
  required?: boolean
}
const Input = ({ label, placeholder, type, required }: InputProps) => {
  const id = useId()
  function switchInput(type?: string) {
    switch (type) {
      case 'file':
        return (
          <input
            type='file'
            id={id}
            className='block w-full bg-pm-light/10 text-sm cursor-pointer
              
              focus:outline-none
              file:p-2.5 file:mr-2.5 file:border-0 file:bg-pm file:text-pm-contrast file:hover:cursor-pointer
            '
            required={required}
          />
        )
      default:
        return (
          <input
            type={type ?? 'text'}
            id={id}
            className='block p-2.5 w-full bg-pm-light/10 text-sm
              
              focus:outline-2 focus:outline-sc-light focus:border-sc-light
            '
            placeholder={placeholder}
            required={required}
          />
        )
    }
  }
  return (
    <div>
      <label htmlFor={id} className='block mb-2 text-sm uppercase'>
        {label}
        {required && '*'}
      </label>
      {switchInput(type)}
    </div>
  )
}

export default React.memo(Input)
