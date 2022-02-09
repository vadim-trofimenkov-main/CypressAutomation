/// <reference types = "Cypress"/>

describe("My test suite API tests", function () {
  it("Change response body API test", function () {
    //When click on the Virtual library button, an API call is send to external server and the list of books is returnned in json format than rendered by angular and displayed as a table on the page
    //Our goal is to Cchange the response body by intercept method and store only 1 book to check the message
    cy.visit("https://rahulshettyacademy.com/angularAppdemo");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301",
          },
        ],
      }
    ).as("bookretrievals");
    cy.get("button.btn-primary").click(); //response is send
    cy.wait("@bookretrievals").should(({ request, response }) => {
      //lenght of the response array = rows of the table
      cy.get("tr").should("have.length", response.body.length + 1); //validation that number of returned items is the same as the number displayed on the page
    });
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });

  it("Change request API test", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";

        req.continue((res) => {
          // expect(res.statusCode).to.equal(403)
        });
      }
    ).as("dummyUrl");

    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@dummyUrl");
  });

  it("Change request API test", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";

        req.continue((res) => {
          // expect(res.statusCode).to.equal(403)
        });
      }
    ).as("dummyUrl");

    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@dummyUrl");
  });
});
