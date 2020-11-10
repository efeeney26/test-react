import React from 'react'
import { shallow } from 'enzyme'

import Title from '../Title'

describe('Title', () => {
  const component = shallow(<Title />)

  it('should render with default title', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('Title', () => {
  const props = {
    title: 'hello'
  }

  const component = shallow(<Title {...props}/>)

  it('should render with title', () => {
    expect(component).toMatchSnapshot()
  })
})
