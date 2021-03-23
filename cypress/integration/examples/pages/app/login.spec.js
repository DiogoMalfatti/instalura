/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.visit('/app/login/');

    cy.get('#formCadastro input[name="usuario"]').type('diogo05');
    cy.get('#formCadastro input[name="senha"]').type('diogo05');

    cy.get('#formCadastro button[type="submit"]').click();

    cy.url().should('include', '/app/profile');
  });
});
