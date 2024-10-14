import 'cypress-iframe'
describe('Automation Practice Tests', () => {
    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/practice/');
        cy.wait(2000)
    });

    it('Radio Button Example', () => {
        cy.get("input[value='radio1']").check(); 
        cy.get("input[value='radio2']").check(); 
        cy.get("input[value='radio2']").should('be.checked');
    });

    it('Dynamic Dropdown Example', () => {
        cy.get('#autocomplete').type('Italy').type('{enter}')
        cy.get('#autocomplete').should('have.value', 'Italy'); 
    });

    it('Static Dropdown Example', () => {
        cy.get('#dropdown-class-example').select('Selenium'); 
    });

    it('Checkbox Example', () => {
        cy.get('#checkBoxOption1').check(); 
        cy.get('#checkBoxOption1').should('be.checked'); 
        cy.get('#checkBoxOption1').uncheck(); 
        cy.get('#checkBoxOption1').should('not.be.checked');
    });
    
    it('Switch Tab Example', () => {
        cy.get('#opentab').invoke('removeAttr', 'target').click(); 
        cy.url().should('contain', '/@CodenboxAutomationLab'); 
        cy.go('back'); 
    });

    it('Switch To Alert Example', () => {
        cy.get("#name").type("kavin");
        cy.get('#alertbtn').click(); 
        cy.on('window:alert',(data)=>{
            expect(data).to.contains('Hello kavin, share this practice page');
        })
        cy.get("#name").type("kavin");
        cy.get('#confirmbtn').click(); 
        cy.on('window:confirm',(data)=>{
            expect(data).to.contains('Hello , Are you sure you want to confirm?');
        })
    });

    it('Web Table Example', () => {
        cy.get("#product > tbody").each( ($row, index, $rows)=>{
            cy.wrap($row).within( ()=>{
                cy.wait(2000)
                cy.get("tr").each( ($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
    });

    it('Enabled/Disabled Example', () => { 
        cy.get('#enabled-button').click();
        cy.get('#enabled-example-input').should('not.be.disabled').type('enabled')
       
    });

    it('Mouse Hover Example', () => {
        cy.get('.mouse-hover').trigger('mouseover')
        cy.get('.mouse-hover').should('be.visible'); 
    });

    it('iFrame Example', () => {
        cy.frameLoaded('#courses-iframe')
        cy.iframe("#courses-iframe").find("#slider-4-slide-7-layer-1").invoke('removeAttr', 'target').click();
        cy.wait(4000)
        cy.url().should('include','/practice');

    });

    it('Download File Example', () => {
        cy.get('.wp-block-button__link.wp-element-button').click()
        .should('contain','Download Apk files')
    });
});