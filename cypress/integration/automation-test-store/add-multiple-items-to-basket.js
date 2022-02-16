import AutoStore_HomePage_PO from '../../support/pageObject/automation-test-store/AutoStore_HomePage_PO'
import AutoStore_HairCare_PO from '../../support/pageObject/automation-test-store/AutoStore_HairCare_PO'

/// <reference types="cypress" />


describe('Add multiple items to the basket!', () => {
    const autoStore_HomePage_PO = new AutoStore_HomePage_PO
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO
    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;

        })
    })
    beforeEach(function () {
    autoStore_HomePage_PO.accessHomePage();
    autoStore_HomePage_PO.clickOn_HairCare_link();

    })
    it("Add specific items to basket", () => {
        autoStore_HairCare_PO.addHairCareToBasket();
    });
  });
  