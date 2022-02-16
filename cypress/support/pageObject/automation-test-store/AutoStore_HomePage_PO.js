

class AutoStore_Home_Page_PO {
   accessHomePage(){
       cy.visit('https://automationteststore.com/')
   }
   clickOn_HairCare_link(){
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
   }

}
export default AutoStore_Home_Page_PO;