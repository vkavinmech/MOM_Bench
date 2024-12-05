describe("Explicit",()=>{
    it("Explicit assertion Url",()=>{
       cy.visit("https://www.google.co.in/");
     cy.url().then((ul)=>{
        expect(ul).to.equal("https://www.google.co.in/");
     })
     cy.get("a[aria-label='Search for Images ']").then((img)=>{
        expect(img).to.visible;
        expect(img).to.have.text("Images");
        expect(img).to.not.be.disabled;
        
     })
     cy.xpath("//a[normalize-space()='Store']").then((str)=>{
        expect(str).to.visible;
        expect(str).to.have.text("Store");
        
     })
    })
    it("Explicit assertion on ticket website",()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.xpath("(//input[@id='travname'])[1]").type("mohan");
        cy.xpath("(//input[@id='travname'])[1]").then((name1)=>{
            expect(name1).to.have.value("mohan");
          })
        })
          it("Radio button",()=>{
            cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
            cy.xpath("(//input[@id='traveltype_1'])[1]").check();            
            cy.xpath("(//input[@id='traveltype_1'])[1]").then((tkt)=>{
                expect(tkt).to.be.checked;
            })
            cy.get("#traveltype_2").check();
            cy.get("#traveltype_2").then((trv)=>{
                expect(trv).to.be.checked;
            })
         cy.get("#select2-reasondummy-container").click();
         cy.get("input[role='combobox']").type("Other").type("{enter}");
         cy.get("#select2-reasondummy-container").then((txt)=>{
            expect(txt).to.have.text("×Other");
            
         })
        })
         /*it("Explicit using orange hrm website",()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("input[placeholder='Username']").type("Admin");
            cy.get("input[placeholder='Password']").type("admin123");
            cy.get("input[placeholder='Username']").then((unm)=>{
                expect(unm).to.have.value("Admin");
                 }) 
                 cy.get("input[placeholder='Password']").then((pwd)=>{
                    expect(pwd).to.have.value("admin123");
                 })
                 cy.get("button[type='submit']").click();
                 let exp="Mike LNCypressTest";
                 cy.xpath("(//p[@class='oxd-userdropdown-name'])[1]").then((nme)=>{
                    const value=nme.text();
                    expect(value).to.equal(exp);
                    assert.equal(value,exp);
                 })*/
    })
