/// <reference types="cypress" />
describe('Verifying variables, cypress commands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
      const makeUpLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
      const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
      makeUpLink.click();
      skinCareLink.click();
    })

})