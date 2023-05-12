import React from 'react'

const Button = ({isDisabled}) => {
  return (
    <div>
        <button className="btn btn-secondary" type='submit' disabled ={isDisabled}>Add!</button>
    </div>
  )
}

export default Button