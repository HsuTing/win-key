import React, { useId } from 'react'
import Lable from './Lable'

interface InputProps {
  type?: string
  name: string
  label: string
  required?: boolean
  placeholder?: string
}
const Input = ({ type, name, label, required, placeholder }: InputProps) => {
  const id = useId()

  return (
    <div>
      <Lable htmlFor={id}>
        {label}
        {required && '*'}
      </Lable>
      {type === 'file' ? (
        <input
          type='file'
          id={id}
          name={name}
          className='w-full text-sm cursor-pointer'
          required={required}
        />
      ) : (
        <input
          type={type ?? 'text'}
          id={id}
          name={name}
          className='w-full text-sm'
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}

export default React.memo(Input)
