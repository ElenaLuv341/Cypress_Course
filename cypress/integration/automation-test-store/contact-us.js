/// <reference types="cypress" />
describe('Test Contact Us form via Automation test store', () => {
    it.only('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get("a[href$='contact']").click().then(function(linkedText){
            cy.log('Clicked on link using text: ' + linkedText.text());
        })

        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type('Gor')
        cy.get('#ContactUsFrm_email').type('forgy1425@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discount on bulk orders')
        cy.get("button[title='Submit']").click()
        // cy.get('.col-md-6 > .btn').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });

})