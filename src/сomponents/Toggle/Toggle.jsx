import React, { useState } from 'react'

import style from './Toggle.module.css'

const Toggle = () => {
  const [isToggleOn, setToggle] = useState(true)

  const handleClick = () => {
    setToggle(!isToggleOn)
  }

  return (
    <div>
      <h3>Обработка событий</h3>
      <button
        onClick={handleClick}
        className={style.toggle}
      >
        {isToggleOn ? 'Включено' : 'Выключено'}
      </button>
    </div>
  )
}

export default Toggle
