import React from 'react'
import Button from './Button'

// get the name from an array and map them and add prev and next buttons < >

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All" />
      <Button name="All" />
      <Button name="All" />
      <Button name="All" />
      <Button name="Gamin" />
      <Button name="All" />
      <Button name="All" />
      <Button name="All" />
      <Button name="All" />
    </div>
  )
}

export default ButtonList