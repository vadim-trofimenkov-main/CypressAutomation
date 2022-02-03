export default class ProductsPage {
  getCheckoutButton() {
    return cy.get("ul.navbar-nav .btn");
  }
  summTotals() {
    let sum = 0;
    cy.get("tr td:nth-child(4) strong").each((element) => {
      let actualText = element.text().split(" "); //[₹., 50000]
      actualText = actualText[1].trim();
      sum = parseInt(sum) + parseInt(actualText);
    });
    cy.get("h3 > strong").then((data) => {
      let actualText = data.text().split(" "); //[₹., 50000]
      const totalSum = actualText[1].trim();
      cy.log(totalSum, sum);
      expect(Number(totalSum)).to.equal(sum);
    });
  }
}
