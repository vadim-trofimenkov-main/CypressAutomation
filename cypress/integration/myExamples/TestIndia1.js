/// <reference types = "Cypress"/>
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe'

describe('Test Suite for tests from Udemy course', () => {

    // it('Add product to cart', () => {
    //     cy
    //         .visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //         .get('.search-keyword').type('ca')
    //         .wait(2000)
    //         .get('.products').find('.product')
    //         .each((el) => {
    //             const vegText = el.find('h4.product-name').text();
    //             if (vegText.includes('Carrot')) {
    //                 cy.wrap(el).find('button').click();
    //             }
    //         })
    //         .get('.cart-icon > img').click();
    //     cy.contains('PROCEED TO CHECKOUT').click();
    //     cy.contains('Place Order').click();
    // });

    // it('Operations with Web elements', () => {
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //---------------------------------------------------------------------
    //Checkbox
    // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
    // cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1');
    // cy.get('input[type = "checkbox"]').check(['option2', 'option3'])
    //     .should('be.checked');
    // cy.get('input[type = "checkbox"]').uncheck(['option3'])
    //     .should('not.be.checked');
    //---------------------------------------------------------------------
    //Static dropdown 
    // cy.get('select').select('option2').should('have.value', 'option2');
    //---------------------------------------------------------------------
    //Dynamic dropdown 
    // cy.get('#autocomplete').type('ind');

    // cy.get('.ui-menu-item div').each(($el) => {
    //     if ($el.text() === 'India') {
    //         cy.wrap($el).click();
    //     }
    // });
    // cy.get('#autocomplete').should('have.value', 'India');
    //---------------------------------------------------------------------
    //Hiden and Displayed elements
    // cy.get('#displayed-text').should('be.visible');
    // cy.get('#hide-textbox').click();
    // cy.get('#displayed-text').should('not.be.visible');
    // cy.get('#show-textbox').click();
    // cy.get('#displayed-text').should('be.visible');
    //---------------------------------------------------------------------
    //Radiobuttons
    // cy.get('input[value="radio1"]').click().should('be.checked');
    // });
    //---------------------------------------------------------------------
    // it('Handling Alerts, Popups, Child window', () => {
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //---------------------------------------------------------------------
    // //Allerts
    // cy.get('#alertbtn').click();
    // cy.get('#confirmbtn').click();
    // //window: alert
    // cy.on('window:alert', (str) => {
    //     //Mocha
    //     expect(str).to.equal('Hello , share this practice page and share your knowledge');
    // });
    // cy.on('window:confirm', (str) => {
    //     //Mocha
    //     expect(str).to.equal('Hello , Are you sure you want to confirm?');
    // });
    //---------------------------------------------------------------------
    //Child tab 1 method
    //  cy.get('#opentab').click();
    // cy.get('#opentab').invoke('removeAttr', 'target').click();
    // cy.url().should('include', 'rahulshettyacademy');
    // cy.go('back');
    // cy.get('body h1').should('have.text', 'Practice Page');
    //
    //  ---
    //Handling child windows 2 method
    // cy.get('#opentab').then((el) => {
    //     const url = el.prop('href');
    //     cy.visit('https://jsonformatter.curiousconcept.com/');
    // });---------------------------------------------------------------------
    // Web table
    // cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index) => {
    //     const text = $el.text();
    //     if (text.includes('Python')) {
    //         cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next()
    //             .then(function (price) {
    //                 const priceText = price.text();
    //                 expect(priceText).to.equal('25');
    //             });
    //     };
    // });
    //---------------------------------------------------------------------
    // //Mouse hover
    // cy.get('div.mouse-hover-content').invoke('show');
    // cy.contains('Top').click();
    // //   cy.contains('Top').click({ force: true });  - click on invisible element
    // cy.url().should('include', 'top');
    //------------------------------------------------------------------
    // Handling frames
    //install iframe plugin using command npm install -D cypress-iframe
    // import iframe and get reference as it done at 2-3 lines here
    //     cy.frameLoaded('#courses-iframe');
    //     cy.iframe().find('a[href*="mentorship"]').eq(0).click();

    //     cy.iframe().find('h1.pricing-title').should('have.length', 2);
    // });
});