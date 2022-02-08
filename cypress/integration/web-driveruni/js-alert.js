/// <reference types="cypress" />



describe('Handle js alerts', () => {
    it('Confirm js alerts contains correct text', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        cy.get('#button1').click()

        cy.on('window:alert', (strinG) =>{
            expect(strinG).to.eq('I am an alert box!')
        })
    });

    it('Confirm js alerts box work correctly when clicking OK', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        cy.get('#button4').click()
        cy.on('window:confirm', (strinG) =>{
           return true; 
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')

        
    });

    it('Confirm js alerts box work correctly when clicking Cancel', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        cy.get('#button4').click()
        cy.on('window:confirm', (strinG) =>{
           return false; 
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

        
    });
    it('Confirm js alerts box work correctly using a stub', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then (() =>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() =>{
            return true;
        }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
        
        
    
       

        
    });
  
})