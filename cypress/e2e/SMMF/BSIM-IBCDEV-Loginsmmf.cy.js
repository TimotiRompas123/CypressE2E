describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://10.32.1.77:8080/corpibv2/')

    cy.get('#j_customerCode').type('smmf')
    cy.get('#un1').type('smmf_mkr1')
    cy.get('#j_password').type('ag12345678')
    cy.get('#proceed').click()
    cy.contains('Logout').click()
  })
})