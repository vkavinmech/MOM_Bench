describe("Read data for Multiple types",()=>{
    it("Read data using task",()=>{
        cy.task('log', 'Hello mohan').then((msg)=>{
            cy.log(msg)
        })
        })
   it.only("Count no of files in downloads folder", () => {
    let path="cypress/downloads"
          cy.task('countFiles',path).then((count) => {
            expect(count).to.equal(2)
          });
        });
   it("Count no of files in  e2e folder", () => {
    let path="cypress/e2e"
            cy.task('countFiles', path).then((count) => {
              expect(count).to.equal(61)
            });
          });
    
    it("Count no of files in  Page object folder", () => {
        cy.task('countFiles', 'cypress/Page object').then((count) => {
          expect(count).to.equal(11)
        });
      });
    
     it("Read data from Excel in sheet1", () => {
        let filePath = 'cypress/fixtures/data1.xlsx'; 
        const sheetName = 'Sheet1'; 
        cy.task('readExcel', { filePath, sheetName }).then((data) => {
       cy.log(data)
        cy.log(JSON.stringify(data));
        expect(data[0].Username).to.equal('Admin'); 
          });
        });
    
    it("Read data from Excel in sheet2 using loop", () => {
        let filePath = 'cypress/fixtures/data1.xlsx'; 
        let sheetName = 'Sheet2'; 
        cy.task('readExcel', { filePath, sheetName }).then((data) => {
        let count=3
        for(let i=0;i<count;i++){
            cy.log(data[i].Username)
        }
          });
        });
        it('Read data from Excel to orange hrm website', () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            let filePath = 'cypress/fixtures/data1.xlsx'; 
            let sheetName = 'Sheet1'; 
            cy.task('readExcel', { filePath, sheetName }).then((data) => {
            let count=3
            for(let i=0;i<count;i++){
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(data[i].Username)
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(data[i].Password)
                cy.get('.oxd-button').click()
                //cy.pause()

                if(data[i].Username=="Admin" && data[i].Password=="admin123"){
                    cy.log("Welcome");
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                }
                else{
                    cy.log("Invalid username and password")
                    cy.get('.oxd-alert-content > .oxd-text').should("have.text","Invalid credentials")
                }
                
            }
              });
            });
             it("Read data from excel to automation website", () => {
                cy.visit("https://practicetestautomation.com/practice-test-login/")
                let filePath = 'cypress/fixtures/data1.xlsx'; 
                let sheetName = 'Sheet2'; 
                cy.task('readExcel', { filePath, sheetName }).then((data) => {
                let count=3
                for(let i=0;i<count;i++){
                    cy.get('#username').clear().type(data[i].Username);
                    cy.get('#password').clear().type(data[i].Password);
                    cy.get('#submit').click();
                    //cy.pause();

                    if(data[i].Username=="student"  && data[i].Password=="Password123"){
                        cy.log("Welcome");
                        cy.get('.post-title').should("have.text","Logged In Successfully");
                        cy.get('.wp-block-button__link').click();

                    }
                    else{
                        cy.log("Invalid credentials");
                        cy.get('#error').should("have.text","Your username is invalid!")

                    }
                }

                })
            })
            it("Read data from excel file for login the instagram",()=>{
                cy.visit("https://www.instagram.com/accounts/login/?hl=en")
                cy.get('.x1lliihq > .x1i10hfl').click()
                let filePath = 'cypress/fixtures/Book1.xlsx'; 
                let sheetName = 'Sheet1'; 
                cy.task('readExcel', { filePath, sheetName }).then((data) => {
                    let count=data.length;
                    cy.log(count)
                    expect(count).to.equal(5)
                for(let i=0;i<count;i++){
                        cy.get(':nth-child(1) > .xnz67gz > ._aa48 > ._aa4b').clear().type(data[i].Email);
                        cy.get(':nth-child(2) > .xnz67gz > ._aa48 > ._aa4b').clear().type(data[i].Password)

                    }
                
                })
            })
        
        it("Read data in csv file",()=>{
            let filepath1="cypress/fixtures/new.csv";
            cy.task("readCsv", { filePath: filepath1 }).then((data)=>{
                //cy.log(JSON.stringify(data))
                const count=data.length
                cy.log(count)
                for(let i=0;i<data.length;i++){
                  //  console.log("Row " + (i + 1) + ": " + JSON.stringify(data[i]));
                 cy.log(`Row ${i+1}: ${JSON.stringify(data[i])}`);
                  

                }

          })
          })
          it("Read the data in excel for reg page",()=>{
            cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
            let filePath = 'cypress/fixtures/Book1.xlsx'; 
            const sheetName = 'Sheet2'; 
            cy.task("readExcel",{filePath,sheetName}).then((reg)=>{
              const value=reg.length;
              cy.log(value);
              for(let i=0;i<value;i++){
    
              cy.get('[width="200"] > input').clear().type(reg[i].name);
        
              cy.get('[valign="bottom"] > [type="text"]').clear().type(reg[i].id);
      
              cy.get('#newpasswd').clear().type(reg[i].password);
              }

            })
          })
          })
      