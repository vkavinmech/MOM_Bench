import login from "./orangehrm_pom";
let data;
describe("Should automate login page using page object model", ()=>{
    before(()=>{
        cy.fixture('orangehrm').then( (userdata)=>{
            data=userdata;
        })
    })

    it("Should login the orangehrm", ()=> {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      const loginpage = new login();

      loginpage.Email.type(data.username);
      loginpage.Password.type(data.password);
      loginpage.SubmitButton.click();
      cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
      .should('have.text',data.expected);
    });
});