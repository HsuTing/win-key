import React, { useId } from 'react'
import Lable from './Lable'

interface TextareaProps {
  name: string
  label: string
  required?: boolean
  placeholder?: string
}
const Textarea = ({ name, label, required, placeholder }: TextareaProps) => {
  const id = useId()
  return (
    <div>
      <Lable htmlFor={id}>
        {label}
        {required && <span className='text-red-500'>*</span>}
      </Lable>
      <textarea
        id={id}
        name={name}
        className='w-full text-sm'
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default React.memo(Textarea)
