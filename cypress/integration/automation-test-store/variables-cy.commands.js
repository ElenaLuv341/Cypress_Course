/// <reference types="cypress" />
describe('Verifying variables, cypress commands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
      cy.visit('https://automationteststore.com/');
      // This one is recommended  
      cy.get("a[href*='product/category&path=']").contains('Makeup').click();
      cy.get("a[href*='product/category&path=']").contains('Skincare').click(); 
    })
    //  this will work but not recommended 
      // const makeUpLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
      // makeUpLink.click();
      // const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
      // skinCareLink.click();

   //  this won't work 
      // const makeUpLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
      // const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
      // makeUpLink.click();
      // skinCareLink.click();


    it('Navigating to specific product pages', () => {
      cy.visit('https://automationteststore.com/');
      cy.get("a[href*='product/category&path=']").contains('Makeup').click();
      // this approach doesn't work 
      // const header = cy.get('h1 .maintext')
      // cy.log(header.text()); 

      cy.get('h1 .maintext').then(($headerText) =>{
        const headerText = $headerText.text()
        cy.log("Found header text: " + headerText);
        expect(headerText).is.eq('Makeup');
      })
    })
    
    it('Validate properties of contact us page', () => {
      cy.visit('https://automationteststore.com/index.php?rt=content/contact');
      // Using cypress commands and chaining (to validate that this specific field has the name 'First name')
      cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
      // JQuery approach
      cy.contains('#ContactUsFrm', 'Contact Us Form').then(text =>{
        const firstNameText = text.find('#field_11').text()
        expect(firstNameText).to.contain('First name')

        // Embedded commands (Closure)
        cy.get('#field_11').then(fnText =>{
          cy.log(fnText.text())
          cy.log(fnText)
        })
      
      })
      


    })

})

