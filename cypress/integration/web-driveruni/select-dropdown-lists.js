/// <reference types="cypress" />

describe('Interact with dropdown lists via webdriveruni', () => {
    it('Select specific values in dropdown lists', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});

        cy.get('#radio-buttons').find("[type= 'radio']").first().check()
        cy.get('#radio-buttons').find("[type= 'radio']").eq(1).check()

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery')

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('testng').contains('TestNG')

        
       
    })
})