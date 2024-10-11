describe('webdriver university Automation', () => {
    let data; 
    before(()=>{
        cy.fixture('webuniv').then( (userdata)=>{
            data=userdata; 
        })
    })

    it("should automate contact us page valid data's", () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get("input[placeholder='First Name']").type(data.firstname);
        cy.get("input[placeholder='Last Name']").type(data.lastname);
        cy.get("input[placeholder='Email Address']").type(data.email);
        cy.get("textarea[placeholder='Comments']").type(data.comments);
        cy.get("input[value='SUBMIT']").click();
        cy.get("div[id='contact_reply'] h1").should('contain','Thank You for your Message!')
    });

    it("should automate contact us page invalid Email", () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get("input[placeholder='First Name']").type(data.firstname);
        cy.get("input[placeholder='Last Name']").type(data.lastname);
        cy.get("input[placeholder='Email Address']").type(data.emailInvalid);
        cy.get("textarea[placeholder='Comments']").type(data.comments);
        cy.get("input[value='SUBMIT']").click();
        cy.get("body").should('contain','Error: Invalid email address')
    });

    it("should automate login page", () => {
        cy.visit('http://webdriveruniversity.com/Login-Portal/index.html');
        cy.get("#text").type(data.username);
        cy.get("#password").type(data.password);
        cy.get("#login-button").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('validation failed');
        })
    });

    it("should automate click action", () => {
        cy.visit(' http://webdriveruniversity.com/Click-Buttons/index.html');
        cy.get("span[id='button1'] p").click();
        cy.get("div[id='myModalClick'] p").should('contain','Well done for successfully');
        cy.get("div[id='myModalClick'] div[class='modal-footer'] button[type='button']").click();

        cy.wait(2000);
        cy.get('#button2').click({ force: true });
        cy.get("div[class='modal-dialog modal-md'] h4[class='modal-title']").should('contain',"It’s that Easy!!  Well I think it is.....")
        cy.get("div[class='modal-dialog modal-md'] div[class='modal-footer'] button[type='button']").click();

        cy.wait(2000);
        cy.get('#button3').click({ force: true });
        cy.get("div[id='myModalMoveClick'] h4[class='modal-title']").should('contain','Well done!')
        cy.get("div[id='myModalMoveClick'] div[class='modal-footer'] button[type='button']").click();
    });

    it('Should interact with dropdowns, checkboxes, and radio buttons', () => {

        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        // Test dropdown
        cy.get('#dropdowm-menu-1').select('SQL')
        cy.get("#dropdowm-menu-1 > option[value='sql']").should('have.text', 'SQL');
        cy.get('#dropdowm-menu-2').select('TestNG')
        cy.get("#dropdowm-menu-2 > option[value='testng']").should('have.text', 'TestNG');
        cy.get('#dropdowm-menu-3').select('CSS')
        cy.get("#dropdowm-menu-3 > option[value='css']").should('have.text', 'CSS');
    
        // Test checkboxes
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-4']);
        cy.get('input[type="checkbox"]').each(($checkbox) => {
          cy.wrap($checkbox).should('be.checked');
        });
        // unselect checkbox and verify
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4']);
        cy.get('input[type="checkbox"]').each(($checkbox) => {
          cy.wrap($checkbox).should('not.be.checked');
        });
    
        // Test radio buttons
        cy.get('input[type="radio"][value="green"]').check().should('be.checked');
        cy.get('input[type="radio"][value="blue"]').check().should('be.checked');
    
        // Test enabled and disabled dropdown
        cy.get("input[value='lettuce']").should('be.visible');
        cy.get("input[value='cabbage']").should('be.disabled');
      });
});