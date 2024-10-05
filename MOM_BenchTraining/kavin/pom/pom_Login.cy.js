import Login from "../pom/pageobject.js";

describe('perform Page object model', () => {
    it('Should perform login using pom', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    const login= new Login();
    login.setUsername("Admin");
    login.setPassword("admin123");
    login.clickSubmit();
    login.verifyLogin("Dashboard");
  });
}); 