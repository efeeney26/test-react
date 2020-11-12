describe('Home page', () => {
  it('home visit', () => {
    cy.visit('/')

    cy.get('button').click()

    cy.contains('Tooltip')

    cy.contains('About').click()
    // Should be on a new URL which includes '/about'
    cy.url().should('include', '/about')
  })
})
