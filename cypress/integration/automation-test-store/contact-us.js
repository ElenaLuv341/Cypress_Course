/// <reference types="cypress" />
describe('Test Contact Us form via Automation test store', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get("a[href$='contact']").click()
        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type('Gor')
        cy.get('#ContactUsFrm_email').type('forgy1425@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discount on bulk orders')
        cy.get("button[title='Submit']").click()
        // cy.get('.col-md-6 > .btn').click();
    });

})