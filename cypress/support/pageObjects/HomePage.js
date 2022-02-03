class HomePage {

    getEditBox() {
        return cy.get('.form-group input[name="name"]');
    };
    getTwoWayDataBinding() {
        return cy.get('h4 input[name="name"]');
    };
    getEmail() {
        return cy.get('.form-group input[name="email"]');
    };
    getPassword() {
        return cy.get('#exampleInputPassword1');
    };
    getGender() {
        return cy.get('#exampleFormControlSelect1');
    };
    getDate() {
        return cy.get('input[name="bday"]');
    };
    getEntrepreneur() {
        return cy.get('#inlineRadio3').should('be.disabled');
    };
    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link');
    };

    setEmploymentStatus(imployementStatus) {
        if (imployementStatus === 'Student') {
            cy.get('#inlineRadio1').check();
        } else if (imployementStatus === 'Employed') {
            cy.get('#inlineRadio2').check();
        } else cy.get('#inlineRadio3').check();  //currently disabled
    }

    setIfYouLoveIcecream(ifYouLoveIcecream) {
        if (ifYouLoveIcecream) cy.get('#exampleCheck1').check();
    };

}
export default HomePage;