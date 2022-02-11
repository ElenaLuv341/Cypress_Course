/// <reference types="cypress" />


describe('Add multiple items to the basket', () => {
    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;

        })
    })
    beforeEach(function () {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    })
    it("Add specific items to basket", function(){
        globalThis.data.productName.forEach(element => {
            cy.addProductToBasket(element)
        }) // doesn't work 
        cy.get('.dropdown-toggle > .fa').click();
    });
  });
  