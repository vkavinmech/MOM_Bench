describe("Hooks script", ()=>{

    before( () =>{

        cy.log("******* Launch app ******")

    })

    after( () =>{

        cy.log("******* Close app ******")

    })

    beforeEach( () =>{

        cy.log("******* Login ******")

    })

    afterEach( () =>{

        cy.log("******* Logout ******")

    })

    it("Search", ()=>{

        cy.log("***** searching ******")

    })

    it("Advanced search", ()=>{

        cy.log("***** advanced searching ******")

    })

    it("Listing Products", ()=>{

        cy.log("***** listing products ******")

    })
})