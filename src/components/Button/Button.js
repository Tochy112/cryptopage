import React from 'react'
import "./Button.css"

const Button = ({content, icon}) => {
  return (
    <div>
        <button className='btn'>
            {content}
            {icon}
        </button>
    </div>
  )
}

export default Button