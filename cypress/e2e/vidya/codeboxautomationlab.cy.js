describe("Automate CodenBox AutomationLab", () =>{

    beforeEach( () =>{
        cy.visit("https://codenboxautomationlab.com/practice/")
    })

    it("Verify Radio button", () =>{
        cy.get('[for="radio1"]').should("be.visible")
        cy.get('[for="radio2"]').should("be.visible")
        cy.get('[for="radio3"]').should("be.visible")

       cy.get('input[value="radio1"]').check().should("be.checked")
       cy.get('input[value="radio2"]').should("not.be.checked")
       cy.get('input[value="radio3"]').should("not.be.checked")

       cy.get('input[value="radio2"]').check().should("be.checked")
       cy.get('input[value="radio1"]').should("not.be.checked")
       cy.get('input[value="radio3"]').should("not.be.checked")

       cy.get('input[value="radio3"]').check().should("be.checked")
       cy.get('input[value="radio1"]').should("not.be.checked")
       cy.get('input[value="radio2"]').should("not.be.checked")
    })

    it("Verify Dynamic dropdown button", () =>{

        cy.get('#autocomplete').type("Austra")
        cy.get('.ui-menu-item div').contains("Australia").click()
        cy.get('#autocomplete').should("have.value", "Australia")
    })

    it("Verify static dropdown list", () => {
        cy.get('select[id="dropdown-class-example"]')
          .select("Selenium")
          .should("have.value", "option1")
    })

    it("Verify Checkbox Selection", () => {
        cy.get('#checkBoxOption1').check().should("be.checked");
        cy.get('#checkBoxOption2').check().should("be.checked");
        cy.get('#checkBoxOption1').uncheck().should("not.be.checked");
        cy.get('#checkBoxOption2').uncheck().should("not.be.checked");
    })

    it("Verify Switch window", () =>{

        cy.get('#openwindow').invoke('removeAttr', 'target').click(); 
        cy.url().should('contain', 'codenboxautomationlab'); 
        cy.go('back')
        
    })

    it("Verify Switch Tab Example", () =>{

        cy.get('a[href="https://www.youtube.com/@CodenboxAutomationLab"]').first()
        .invoke("removeAttr", "target")
        .click()

        cy.url().should("include", "/@CodenboxAutomationLab")
        cy.go('back')
    })

    it("Verify Switch to Alert Window", () =>{
        cy.get("#name").type("Cypress Test")
        cy.get("#alertbtn").click()

        cy.on("window:confirm", (t) => {
            expect(t).to.contain("Hello Cypress Test, share this practice page who love to learn automation");
          })
    })

    it("Verify Switch to Confirm button", () => {

        cy.get("#name").type("Cypress")
        cy.get("#confirmbtn").click( {force:true})
        cy.on("window:confirm", (t) => {
            expect(t).to.contain("Hello Cypress, Are you sure you want to confirm?");
          });
      
          //This will click the cancel button
          cy.on("window:confirm", () => false)

    })

    it("Read all the rows & columns data of Web table example", () => {
        cy.get("table.table-display > tbody > tr")
      .should("have.length.greaterThan", 0)
      .each(($row, rowIndex) => {
        cy.wrap($row).within(() => {
            cy.get("td, th").each(($col, colIndex) => {
                const cellText = $col.text().trim();
                cy.log(`Row ${rowIndex + 1}, Column ${colIndex + 1}: ${cellText}`);
            });
        });
    })
    })  
    
    it("Verify elements display examples", () =>{

        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")
    })

   it("Verify Enabled/Disabled Example", () =>{

    cy.get("#disabled-button").click()
    cy.get("#enabled-example-input").should("be.disabled")

    cy.get("#enabled-button").click()
    cy.get("#enabled-example-input").should("not.be.disabled").type("test")
   })

   it("Mouse Hover Example", () =>{

    cy.get("#mousehover").trigger("mouseover")
    cy.contains("Top").click({force: true})

    cy.url().should("include", "#top")

    cy.go("back")

    cy.get("#mousehover").trigger("mouseover")
    cy.contains("Reload").click({force: true})

    cy.url().should("include", "practice")
   })

   it("Verify iFrame Example", () => {

    cy.frameLoaded("#courses-iframe")
    cy.iframe("#courses-iframe").invoke('attr', 'contenteditable', 'true')
    cy.iframe("#courses-iframe").find("a").contains("Contact Us").click()
   })
   it.only("Verify Download file to test", () => {
    // Corrected URL and file name
    const downloadUrl = "http://codenboxautomationlab.com/wp-content/uploads/2022/12/APKFiles-1.zip";
    const downloadPath = "cypress/mydownloads"; // Path where the file will be saved
    const fileName = "APKFiles-1.zip"; // Correct file name

    // Trigger the download
    cy.get(".wp-block-button__link").invoke("attr", "href").then((href) => {
        expect(href).to.include(fileName); // Validate the download URL
        cy.downloadFile(href, downloadPath, fileName); // Download the file
    });

    // Verify the file exists
    cy.readFile(`${downloadPath}/${fileName}`).should("exist");
});


    
})