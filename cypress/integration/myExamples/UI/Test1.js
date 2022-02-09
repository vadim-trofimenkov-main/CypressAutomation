describe('My first ever test suite on JS', function () {
    // it('My first ever test case on JS(visit)', function () {
    //     //test steps
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    // });
    // // another test in suite 
    // it('Passed simple test!', () => {
    //     expect(true).to.equal(true);
    // });
    // // failed test in suite 
    // it('Failed simple test!', () => {
    //     expect(true).to.equal(false);
    // });
    //-------------------------------------------------------------
    //Visit: https://example.cypress.io
    // Find the element with content: type
    // Click on it
    // Get the URL
    // Assert it includes: /commands/actions
    // Get the input with the .action-email class
    // Type fake@email.com into the input
    // Assert the input reflects the new value
    it('finds the content "type" and click it', () => {
        cy.visit('https://example.cypress.io');
        cy.pause();
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions');
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
    });
    //-----------------------------------------------------------
});