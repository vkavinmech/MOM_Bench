describe("switch to diff web",()=>{
    it("Visit web",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").click();
        const ul=cy.url();
        cy.log(ul)
    })
     it("Handle the child window",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").invoke("removeAttr","target").click();
        cy.url().should("includes","new")
        cy.get('h3').should("be.visible").and("have.text","New Window")
        cy.go("back");
        cy.url().should("eq","https://the-internet.herokuapp.com/windows")


    })
    it("Handle the child window 2",()=>{
        cy.visit("https://ultimateqa.com/dummy-automation-websites/");
        cy.url().should("eq","https://ultimateqa.com/dummy-automation-websites/");
        cy.get("li:nth-child(2) strong:nth-child(1) a:nth-child(1)").invoke("removeAttr","target").click({force:true});
        cy.url().should("eq","https://ultimateqa.com/automation")
        cy.go("back");
        cy.url().should("eq","https://ultimateqa.com/dummy-automation-websites/")
    })

    it("Switch to web",()=>{
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("#opentab").click();
        cy.wait(4000)
        let ul=cy.url();
        cy.log(ul)
    })
    it("Handling child tab",()=>{
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("#opentab").invoke("removeAttr","target").click();
        cy.get('.input-group > #search').type("cypress");
        cy.get('.find-course > .fa').click();
        cy.get('.zen-course-title > .dynamic-heading').should("be.visible").then((res)=>{
            cy.log(res.text())
            cy.go("back")
        })

    })
    it("IFrame",()=>{
        cy.visit("https://www.letskodeit.com/practice");
        cy.frameLoaded("#courses-iframe");
        cy.iframe("#courses-iframe").find("select[name='categories']").select("Cypress");
    })
    it("Checkbox",()=>{
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("input[type='checkbox']").eq(0).check();
    })
    it("Handling alerts",()=>{
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("#alertbtn").click();
        cy.on("window:alert",(al)=>{
            expect(al).to.equals("Hello , share this practice page and share your knowledge")
        })
        cy.xpath("(//input[@id='name'])[1]").type("Mohan");
        cy.get("#confirmbtn").click();
        cy.on("window:confirm",(al1)=>{
            expect(al1).to.equal("Hello Mohan, Are you sure you want to confirm?")
        })
        cy.on("window:confirm",()=>false)
    })
    it("Handle webtable",()=>{
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("div[id='table-example-div'] fieldset").should("be.visible")
        cy.get("#product > tbody > tr:nth-child(1) > th").should("have.length","3")
        cy.get("#product > tbody > tr").should("have.length","4")
        cy.get("#product > tbody > tr:nth-child(2) >td").should("have.length","3")
        cy.get("#product > tbody > tr:nth-child(2) >td:nth-child(1)").should("have.text","Let's Kode It");
        cy.get("#product > tbody > tr:nth-child(2) >td:nth-child(3)").should("have.text","35");
        cy.get("#product > tbody > tr>td:nth-child(2)").each((value,index)=>{
            const name=value.text();
        cy.log(name);
           if(name.includes("Python Programming Language"))
            cy.get("#product > tbody > tr>td:nth-child(3)").eq(index).then((res2)=>{
               const name2=res2.text();
               cy.log(name2)
               expect(name2).to.equal("30")
             
        })

        })

    })
    
})
    
