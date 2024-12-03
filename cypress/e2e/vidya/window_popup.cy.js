describe("Window popup", () => {

    it("window popup ", () =>{

        cy.visit("https://vinothqaacademy.com/multiple-windows/")

        const pop_url = "https://vinothqaacademy.com/webtable/"
    cy.window().then(win => {
        const stub =  cy.stub(win, "open").as("windowopen")
     })

     cy.get(".elementor-element-fc8696a > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > #button1").click()
     cy.get("@windowopen").should("be.calledWith", pop_url)


     cy.window().then(win => {
        win.location.href = pop_url
        cy.get("input#nameInput").type("test")
     })

    })
})