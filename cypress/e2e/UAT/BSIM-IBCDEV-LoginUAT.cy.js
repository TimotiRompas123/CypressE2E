describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://10.32.1.77:8080/corpibv2/')

    cy.get('#j_customerCode').type('uat')
    cy.get('#un1').type('uat_maker1')
    cy.get('#j_password').type('d12345678')
    cy.get('#proceed').click()
    cy.contains('Logout').click()
  })
})