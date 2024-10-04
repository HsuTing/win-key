import React from 'react'

interface LabelProps {
  htmlFor?: string
  children: React.ReactNode
}
const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className='block mb-2 text-sm uppercase'>
    {children}
  </label>
)

export default React.memo(Label)
