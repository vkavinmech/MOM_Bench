describe('Alerts',()=>{
    it('Js Prompt Alert',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.window().then((win)=>{
                cy.stub(win,'prompt').returns('welcome');
            })
            cy.get("button[onclick='jsPrompt()']").click();
            cy.on('window:prompt',()=>false);
            cy.get("#result").should('have.text','You entered welcome');
                
        }
    )
}
)