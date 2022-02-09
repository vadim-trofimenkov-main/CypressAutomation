import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage";
import ProductsPage from "../../../../support/pageObjects/ProductsPage";

let name;
const homePage = new HomePage();
const productsPage = new ProductsPage();
Given("I open Ecommerce page", () => {
  cy.visit(Cypress.env("practiceUdemuCourseUrl"));
});

// When I add items to cart

When("I add items to cart", function () {
  homePage.getShopTab().click(); //moving to shop page

  const products = this.data.productName;
  products.forEach((element) => {
    cy.selectProduct(element);
  });

  productsPage.getCheckoutButton().click();
});

//And Validate the total prices

And("Validate the total prices", () => {
  productsPage.summTotals();
});

// Then Select the country, submit and verify Thank you

Then("Select the country, submit and verify Thank you", () => {
  cy.get("button.btn-success").click();
  Cypress.config("defaultCommandTimeout", 7000); //set up configs only for cuttent test
  cy.get("#country").type("India");
  cy.get(".suggestions > ul > li > a").click();
  cy.get("#checkbox2").check({ force: true });
  cy.get('input[type="submit"]').click();
  cy.get("div.alert-success").then((element) => {
    const text = element.text();
    expect(text.includes("Success")).to.be.true;
  });
});

When("I fill the form details", function (dataTable) {
  //dataTable.rawTable[1] returns the array of  [Alex, Male, qwer12, ann@test.test, false, Student, 2010-04-10, iphone X]
  name = dataTable.rawTable[1][0];
  homePage.getEditBox().type(name);
  homePage.getGender().select(dataTable.rawTable[1][1]);
  homePage.getPassword().type(dataTable.rawTable[1][2]);
  homePage.getEmail().type(dataTable.rawTable[1][3]);
  homePage.setIfYouLoveIcecream(dataTable.rawTable[1][4]);
  homePage.setEmploymentStatus(dataTable.rawTable[1][5]);
  homePage.getDate().type(dataTable.rawTable[1][6]);
});

Then("Validate the form behavior", function (dataTable) {
  homePage
    .getEditBox()
    .should("have.value", name)
    .and("have.attr", "minlength", "2"); //проверка значения и что обязательная длина больше 2
  homePage.getEntrepreneur().should("be.disabled"); //проверка аттрибута
});

And("Select the shop page", function () {
  homePage.getShopTab().click(); //moving to shop page
});
