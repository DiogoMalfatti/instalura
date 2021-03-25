/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      // Pré Teste
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app')
        .as('userLogin');

      // Cenário
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillLoginForm({ user: 'diogo05', password: 'diogo05' })
        .submitLoginForm();

      // Asserções
      cy.url().should('include', '/app/profile');

      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;
          cy.getCookie('APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });
});
