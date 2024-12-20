
import Login from "../pageObject/loginpage.js";

describe("POM", () => {
  const ln = new Login(); 

  it("login page object", () => {
    ln.visit();
    ln.setUsername("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    ln.verifyLogin();
  });

  
  it("page object model using fixture", () => {
    ln.visit();


    cy.fixture("pageobjectmodel.json").then((data) => {
      ln.setUsername(data.username);  
      ln.setPassword(data.password);
      ln.clickSubmit();
      ln.verifyLogin();
    });
  });
});
