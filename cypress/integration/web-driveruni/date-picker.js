/// <reference types="Cypress" />

describe('Test webpicker via webdriveruni', () => {
    it('Select date from date-picker', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force: true});
        
        // let date = new Date()
        // date.setDate(date.getDate())    // in this way we can get current day; e.g, 10
        // cy.log(date.getDate());
        
        // let date2 = new Date()
        // date2.setDate(date.getDate() + 5)
        // cy.log(date2.getDate()); // here + 5 days = 15

        var date = new Date;
        date.setDate(date.getDate() + 26) 

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString('default', {month:'long'})
        var futureDay = date.getDate();

        cy.log('Future year select: ' + futureYear);
        cy.log('Future month select: ' + futureMonth);
        cy.log('Future day select: ' + futureDay);

        function selectMonthAndYear(){
            cy.get('.input-group-addon').click()
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) =>{
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() =>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) =>{
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })

            })

        }
          function selectFutureDay(){
              cy.get('[class = "day"]').contains(futureDay).click();
          }
        selectMonthAndYear();
        selectFutureDay();
    }) 
})