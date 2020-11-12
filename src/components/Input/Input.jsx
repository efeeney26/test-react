import React, { useState, useCallback } from 'react'

import style from './Input.module.css'

const Input = () => {
  const [value, setValue] = useState()

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [setValue])

  return (
    <input
      type='text'
      value={value}
      onChange={handleChange}
      className={style.input}
      placeholder='type here'
    />
  )
}

export default Input
