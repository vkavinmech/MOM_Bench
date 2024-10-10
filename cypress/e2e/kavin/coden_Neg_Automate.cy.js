import 'cypress-iframe'
describe('Automate codenbox negative scenarios', () => {
    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/practice/');
    });

    it('Radio Button Example', () => {
        cy.get("input[value='radio1']").check(); 
        cy.get("input[value='radio2']").check(); 
        cy.get("input[value='radio1']").should('not.be.checked');
    });

    it('Dynamic Dropdown Example', () => {
        cy.get('#autocomplete').type('Italy').type('{enter}')
        cy.get('#autocomplete').should('not.have.value', 'India'); 
    });

    it('Static Dropdown Example', () => {
        cy.get('#dropdown-class-example').select('Selenium'); 
    });

    it('Checkbox Example', () => {
        cy.get('#checkBoxOption1').uncheck(); 
        cy.get('#checkBoxOption1').should('not.be.checked'); 
        cy.get('#checkBoxOption1').check(); 
        cy.get('#checkBoxOption1').should('be.checked');
    });

    it('Switch Tab Example', () => {
        cy.get('#opentab').invoke('removeAttr', 'target').click(); 
        cy.url().should('not.contain', '/Contact'); 
        cy.go('back'); 
    });
    
    it('Switch To Alert Example', () => {
        cy.get("#name").type("demo");
        cy.get('#alertbtn').click(); 
        cy.on('window:alert',(data)=>{
            expect(data).to.not.contains('Testing');
        })
        cy.get("#name").type("demo");
        cy.get('#confirmbtn').click(); 
        cy.on('window:confirm',(data)=>{
            expect(data).to.not.contains('please cancel');
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

    it('Element Displayed Example', () => {
        cy.get('#hide-textbox').click(); 
        cy.get("#show-textbox").click();
        cy.get('#displayed-text').should('be.visible'); 
        cy.get('#displayed-text').type("kavin").should('not.have.value','demo'); 
        
    });

    it('Enabled/Disabled Example', () => { 
        cy.get('#disabled-button').click();
        cy.get('#enabled-example-input').should('not.be.enabled')
       
    });

    it('iFrame Example', () => {
        cy.frameLoaded('#courses-iframe')
        cy.iframe("#courses-iframe").find("#slider-4-slide-7-layer-1").invoke('removeAttr', 'target').click();
        cy.wait(4000)
        cy.url().should('not.include','/contact');

    });

    it('Calendar Example', () => {
        cy.get('fieldset > p > a').invoke('removeAttr', 'target').click(); 
        cy.url().should('not.contain', '/Home');
        cy.get("#rangetime1").select("1:00 PM - 2:00 PM")
        cy.get("#name1").type("kavin")
        cy.get("#secondname1").type("kumar")
        cy.get("#email1").type("demotest@gmail.com")
        cy.get("#phone1").type("1234567890")
        cy.get("#details1").type("Demo test")
        cy.get("button[type='button']").click();
    });

    it('Download File Example', () => {
        cy.get('.wp-block-button__link.wp-element-button').click()
        .should('not.contain','jpg format')
    });
});