describe('About page', () => {
  it('clicking About navigates to About page', () => {
    cy.visit('/about')

    cy.contains('About')

    // Get an input, type into it and verify that the value has been updated
    cy.get('input')
      .type('test')
      .should('have.value', 'test')
  })
})
