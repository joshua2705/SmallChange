describe('End to End Test', () => {
  it('Login button should redirect to login page ', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Login').click();
    cy.url().should('include', '/login');
    cy.get('.loginEmail')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
      cy.get('.loginPassword')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
    
  })

  it('Navigation bar redirection check', () => {
    cy.visit('http://localhost:4200/portfolio');
    cy.contains('Trade').click();
    
    cy.url().should('include', '/trade');
    cy.contains('Preferences').click();
    cy.url().should('include','/preferences');
    cy.contains('Activity').click();
    cy.url().should('include','/activity');
    
  })

  

  
})