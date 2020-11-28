import React from 'react'
import { mount } from '@cypress/react/dist'
import { Home } from '../../src/pages'

describe('Home', () => {
  it('render link', () => {
    mount(<Home />)
    cy.contains('Hello').should('be.visible')
  })
})
