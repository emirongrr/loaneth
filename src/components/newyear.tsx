import React from 'react'

interface IProps {
  message: string;
}

const newyear: React.FC<IProps> = ({ message }) => {
  return (
    <div>
      <h1> {message} </h1>
    </div>
  )
}

export default newyear