it("should read data from a text file for multiple data", () => {
    const filePath = "cypress\\fixtures\\orangehrmFetch.txt"; 

    cy.readFile(filePath).then((data) => {
        const users = data.split('\n'); // Split by new line

        users.forEach((user) => {
            const parts = user.split(','); // Split by comma
            
            // Check if we have exactly 3 parts
            if (parts.length === 3) {
                const username = parts[0].trim();
                const password = parts[1].trim();
                const expected = parts[2].trim();

                cy.visit('https://opensource-demo.orangehrmlive.com/');
                cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username);
                cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
                cy.get(".oxd-button").click();  

                if (username === 'Admin' && password === 'admin123') {
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
                        .should('have.text', expected);
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();

                    // Logout
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();       
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                } else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text', expected);
                }
            } else {
                // Log an error if the format is incorrect
                cy.log(`Invalid user data format: ${user}`);
            }
        });
    });
});
