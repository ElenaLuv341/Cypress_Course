class AutoStore_HairCare_PO {
   addHairCareToBasket(){
    globalThis.data.productName.forEach(function(element) { 
        cy.addProductToBasket(element)
          // debugger
       
    })
    cy.get('.dropdown-toggle > .fa').click().debug();
   }
 
 }
 export default AutoStore_HairCare_PO;