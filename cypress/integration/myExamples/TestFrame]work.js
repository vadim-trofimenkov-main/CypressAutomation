/// <reference types = "Cypress"/>
import HomePage from "../../support/pageObjects/HomePage";
import ProductsPage from "../../support/pageObjects/ProductsPage";
describe("My first ever test suite on JS", function () {
  before(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  it("My first ever test case on JS(visit)", function () {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    cy.visit(Cypress.env("practiceUdemuCourseUrl"));
    homePage.getEditBox().type(this.data.name);
    homePage.getEmail().type(this.data.email);
    homePage.getPassword().type(this.data.password);
    homePage.setIfYouLoveIcecream(this.data.ifyouLoveIceCreams);
    homePage.getGender().select(this.data.gender);
    homePage.setEmploymentStatus(this.data.employmentStatus);
    homePage.getDate().type("2010-04-10");
    homePage
      .getEditBox()
      .should("have.value", this.data.name)
      .and("have.attr", "minlength", "2"); //проверка значения и что обязательная длина больше 2
    homePage.getEntrepreneur().should("be.disabled"); //проверка аттрибута
    // cy.pause();
    homePage.getShopTab().click(); //moving to shop page

    const products = this.data.productName;
    products.forEach((element) => {
      cy.selectProduct(element);
    });
    productsPage.getCheckoutButton().click();
    // var sum = 0;
    // cy.get("tr td:nth-child(4) strong")
    //   .each((element) => {
    //     let actualText = element.text().split(" "); //[₹., 50000]
    //     actualText = actualText[1].trim();
    //     sum = Number(sum) + Number(actualText);
    //   })
    //   .then(() => {
    //     cy.log(sum);
    //   });
    productsPage.summTotals();

    cy.get("button.btn-success").click();
    Cypress.config("defaultCommandTimeout", 7000); //set up configs only for cuttent test
    cy.get("#country").type("India");
    cy.get(".suggestions > ul > li > a").click();
    cy.get("#checkbox2").check({ force: true });
    cy.get('input[type="submit"]').click();
    // cy.get("div.alert-success").should(
    //   "have.text",
    //   "Success! Thank you! Your order will be delivered in next few weeks :-)."
    // ); //error
    cy.get("div.alert-success").then((element) => {
      const text = element.text();
      expect(text.includes("Success")).to.be.true;
    });
  });
});
