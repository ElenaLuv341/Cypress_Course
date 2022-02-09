/// <reference types="cypress" />

describe('Verifying autocomplete in dropdown lists via webdriveruni', () => {
    it('Select specific product with the help of autocomplete in dropdown lists', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true});

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) =>{
            const prod = $el.text(); 
            const prodToSelect = 'Avacado';

            if(prod == prodToSelect) {
                // $el.click()
                $el.trigger('click')

                cy.get('#submit-button').click();
                cy.url().should('include', 'Avacado');
            }

        }).then(()=>{
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) =>{
                const prod = $el.text(); 
                const prodToSelect = 'Grapes';
    
                if(prod ===prodToSelect) {
                    // $el.click()
                    $el.trigger('click')
                    
                    cy.get('#submit-button').click();
                    cy.url().should('include', 'Grapes');
                }
    
            })
        })
    })
    
})