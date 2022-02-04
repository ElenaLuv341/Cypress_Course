/// <reference types="cypress" />

describe('Alias and invoke', () => {
    it('Validate a specific hair care product', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
    })

    it.only('Validate a number of products with the same class name', () => {
        cy.visit('https://automationteststore.com/');
       cy.get('.thumbnail').as('productsHomePage')
        // cy.get('.fixed_wrapper .prdocutname').contains('.thumbnail').its('quantity').should('be', 16)
        cy.get('@productsHomePage').should('have.length', 16)
        cy.get('@productsHomePage').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })
})