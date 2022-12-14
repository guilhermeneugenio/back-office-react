describe('Back Office Testing Module', () => {

  it('successfully loads', () => {
    cy.clearLocalStorage()
    cy.visit('/')
  })
  it('detects non matching password', () => {
    cy.get('a').click()
    cy.get('input[name=username]').type('Francisco')
    cy.get('input[name=password]').type(`abc123`)
    cy.get('input[name=confirm_password]').type(`'abc124`)
    cy.get('p')
  })
  it('registers', () => {
    cy.get('input[name=confirm_password]').clear()
    cy.get('input[name=confirm_password]').type(`abc123`)
    cy.get('.bg-slate-900').click()
  })
  it('log ins', () => {
    cy.wait(1000);
    cy.get('input[name=username]').type('Francisco')
    cy.get('input[name=password]').type(`abc123`)
    cy.get('.bg-slate-900').click()
  })
  it('deletes a user', () => {
    cy.get(':nth-child(4) > :nth-child(2)').click()
  })
  it('updates a user', () => {
    cy.get(':nth-child(5) > :nth-child(3)').click()
    cy.get('input[name=firstName]').type('Even')
    cy.get('input[name=lastName]').type(`Halt`)
    cy.get('input[name=email]').type(`newemail@email.com{enter}`)
  })
  it('creates a user', () => {
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()
    cy.get('input[name=firstName]').type('New')
    cy.get('input[name=lastName]').type(`User`)
    cy.get('input[name=email]').type(`NEW_USER@email.com{enter}`)
  })
  it('turns dark and light mode on', () => {
    cy.get('.slider').click()
    cy.get('.slider').click()
  })
})
