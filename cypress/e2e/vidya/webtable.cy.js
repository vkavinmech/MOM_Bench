describe("Handle Tables", () => {
    beforeEach("Login", () => {
      cy.visit("https://demo.opencart.com/admin/index.php");
      // login
     // cy.get("#input-username").type("demo");
      //cy.get("#input-password").type("demo");
      cy.get("button[type='submit']").click();
  
      //cy.get(".btn-close").click(); // Close alert popup
  
      // Navigate to Customers -> Customers
      cy.get("#menu-customer>a").click(); // customers main menu
      cy.get("#menu-customer>ul>li:first-child").click(); // customers submenu
    });
  
    it.skip("Check Number Rows & Columns", () => {
      // Check number of rows
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
        "have.length",
        10 // Use number instead of string
      );
  
      // Check number of columns (change selector to include `th` for columns)
      cy.get(
        "table[class='table table-bordered table-hover']>thead>tr>th"
      ).should("have.length", 0); // Use number instead of string
    });
  
    it.skip("Check cell data from specific row & column", () => {
      // Check specific cell content
      cy.get(
        "table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)"
      ).contains("1@1.c");
    });
  
    it("Read all the rows & columns data on the first page", () => {
      // Loop through each row and print each cell's text
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
        ($row, index, $rows) => {
          cy.wrap($row).within(() => {
            cy.get("td").each(($col, index, $cols) => {
              cy.log($col.text());
            });
          });
        }
      );
    });
  
    it.skip("Pagination: Find total number of pages", () => {
      cy.get(".col-sm-6.text-end").then((e) => {
        let mytext = e.text(); // Example: "Showing 1 to 10 of 5581 (559 Pages)"
        let totalPages = mytext.match(/\((\d+)\sPages\)/)[1]; // Extract total pages using regex
        cy.log("Total number of pages in the table: " + totalPages);
      });
    });
  
    it.skip("Pagination: Iterate through pages", () => {
      let totalPages = 5; // Set the number of pages you want to iterate over (dynamically extracted above)
      for (let p = 1; p <= totalPages; p++) {
        if (totalPages > 1) {
          cy.log("Active page is === " + p);
          cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click(); // Click the page number
          cy.wait(3000); // Wait for page load
  
          // Read email from each row on the current page
          cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
            ($row, index, $rows) => {
              cy.wrap($row).within(() => {
                cy.get("td:nth-child(3)").then((e) => {
                  cy.log(e.text()); // Log email
                });
              });
            }
          );
        }
      }
    });
  });
  