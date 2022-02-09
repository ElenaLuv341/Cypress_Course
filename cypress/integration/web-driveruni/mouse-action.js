/// <reference types="cypress" />

describe('Test mouse action', () => {
    it('Scroll elements into view', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
    })
    it('Process of drag and drop draggable item', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        
        cy.get('#draggable').trigger('mousedown', {which:1})
        cy.get('#droppable').trigger('mouseover').trigger('mouseup',{forse:true})
    })
    it('Process of double click on the item', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        
       cy.get('#double-click').dblclick();
    })
    it.only('Process of holding down the left mouse click on the given element', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        
       cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
           expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
       })
    })
})