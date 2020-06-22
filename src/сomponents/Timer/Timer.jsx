import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Timer = ({ timer }) => {
  const [date, setDate] = useState(timer())

  useEffect(() => {
    setInterval(() => setDate(timer), 1000)
  }, [timer])

  return (
    <div>
      <h3>Timer</h3>
      <p>{`It's ${date}`}</p>
    </div>
  )
}

Timer.propTypes = {
  timer: PropTypes.func.isRequired
}

export default Timer
