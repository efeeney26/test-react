import React, { useCallback, useState } from 'react'

import { Title, Button, Tooltip } from '../../components'

import style from './Home.module.css'

const Home = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false)

  const onButtonClick = useCallback(() => {
    setTooltipVisible(!isTooltipVisible)
  }, [isTooltipVisible, setTooltipVisible])

  return (
    <div
      className={style.container}
    >
      <Title title='Hello'/>
      <Button title='Button' onClick={onButtonClick}/>
      {isTooltipVisible && <Tooltip/>}
      <br/><br/>
    </div>
  )
}

export default Home
