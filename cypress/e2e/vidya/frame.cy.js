describe("Handling the iFrames", () => {

    it("Test script for iFrame 1", () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.get('.tox-button.tox-button--naked.tox-button--icon').click()

            const iframe= cy.get("#mce_0_ifr")
            .its("0.contentDocument.body")
                .should("be.visible")
                .then(cy.wrap)
                .invoke('attr', 'contenteditable', 'true')

                iframe.clear().type("Welcome to iFrame {ctrl+a}")
                cy.get("[aria-label='Bold']").click()
            
    })

    it("Test script for iFrame 2 - using custom commands", () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.get('.tox-button.tox-button--naked.tox-button--icon').click()

           cy.getIframe("#mce_0_ifr")
                .invoke('attr', 'contenteditable', 'true')

                .clear().type("Welcome to iFrame {ctrl+a}")
                cy.get("[aria-label='Bold']").click()
            
    })

    it("Test script for iFrame 3 - using cypressiframe plugin", () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.get('.tox-button.tox-button--naked.tox-button--icon').click()

           cy.frameLoaded("#mce_0_ifr") //load the frame
           cy.iframe("#mce_0_ifr")
           .invoke('attr', 'contenteditable', 'true')
                .clear().type("Welcome to iFrame {ctrl+a}")
                cy.get("[aria-label='Bold']").click()
            
    })
})