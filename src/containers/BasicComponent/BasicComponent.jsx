import React from 'react'

import { Timer, ActionLink, tick, Toggle } from '../../сomponents'

const BasicComponent = () => (
  <>
    <Timer
      timer={tick}
    />
    <ActionLink />
    <Toggle />
  </>
)

export default BasicComponent
