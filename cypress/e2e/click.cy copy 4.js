/// <reference types = 'cypress' />

describe('Nombre de la suite', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })

    it('Descripción del test', () => {
        cy.visit('https://demoqa.com/text-box')

        cy.get('#userName', { timeout: 700000 }).click()
    });
});