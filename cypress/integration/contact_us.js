/// <reference types="cypress" />
describe('Test Contact Us form via WebdriverUni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type('Joe');
        cy.get('[name="last_name"]').type('blogs');
        cy.get('[name="email"]').type('joe_blogs123@gmail.com')
        cy.get('textarea.feedback-input').type('How can I learn Cypress?')
        cy.get('[type="submit"]').click();
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type('Tom');
        cy.get('[name="last_name"]').type('Forgy');
        cy.get('textarea.feedback-input').type('How can I learn Cypress?')
        cy.get('[type="submit"]').click();
    });
})