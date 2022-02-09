/// <reference types = "Cypress"/>

describe("Test Suite for tests from Udemy course", () => {
  it("My test", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    // cy.get('.products').as('productLocator'); //// создание новой переменной
    // get() == driver.findElement() == $()
    // cy.get('.search-keyword').type('ca');
    // .should('have.value', 'ca');
    // cy.wait(2000);
    // cy
    // .get('.product:visible').should('have.length', 4);
    // .should(test => {
    //     expect(test).to.have.length(4);
    // })
    // parent -child chaining
    // .get('@productLocator').find('.product').should('have.length', 4);
    // .get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    // .get('.products').find('.product')
    // .each((el, index, list) => {
    //     const vegText = el.find('h4.product-name').text();
    //     if (vegText.includes('Carrot')) {
    //         cy.wrap(el).find('button').click();
    //     }
    // });
    ////---------------------------------------------
    // //const logoText = cy.get('.brand').text() - не будет работать тк, после гета нужно обработать промис, падает на методе text() это просиходит, когда используем ккод, команды не из сайпресса, например здесь const logoText и text() не сайпресс, поэтому не может хендлить

    //assert if logo text correctly displayed
    cy.get(".brand").should("have.text", "GREENKART");
    //print in logs

    cy.get(".brand").then((logo) => {
      cy.log(logo.text());
    });
    // //----------------------------------
  });
});
