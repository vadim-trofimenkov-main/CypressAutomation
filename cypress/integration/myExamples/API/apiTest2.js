/// <reference types = "Cypress"/>

describe("API tests", function () {
  it("Without front API test", function () {
    cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
      name: "Learn Appium Automation with Java",
      isbn: "bcdwq",
      aisle: "227",
      author: "John foe",
    }).then((response) => {
      expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.eq(200);
    });
  });
});
