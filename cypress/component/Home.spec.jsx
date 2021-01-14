import React from 'react'
import { mount } from '@cypress/react/dist'
import { Home } from '../../src/pages'

describe('Home', () => {
  it('render link', () => {
    mount(<Home />)
    cy.contains('Hello').should('be.visible')
    cy.contains('Description').should('be.visible')

    cy.get('button')
      .contains('Button')
      .click()

    cy.contains('Tooltip')
  })
})
