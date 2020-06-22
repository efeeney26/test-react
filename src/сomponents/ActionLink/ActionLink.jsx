import React from 'react'

import style from './ActionLink.module.css'

const ActionLink = () => {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('Меня кликнули')
  }

  return (
    <div>
      <h3>Обработка событий</h3>
      <a
        href="something"
        onClick={handleClick}
        className={style.link}
      >
      Нажми на меня
      </a>
    </div>
  )
}

export default ActionLink
