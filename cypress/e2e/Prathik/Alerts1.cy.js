describe('Alerts',()=>{
    it('Js Alert',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.get("button[onclick='jsConfirm()']").click();

            cy.on('window:confirm',(t)=>{
                expect(t).to.contains('I am a JS Confirm');
            })
            cy.get("#result").should('have.text','You successfully clicked: Ok');
        }
    )
}
)