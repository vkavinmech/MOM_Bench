

describe("Handling iframe",()=>{
    it("Use plugin to handle the iframe",()=>{
      cy.visit("https://jqueryui.com/droppable/");
      cy.frameLoaded(".demo-frame");
      cy.iframe(".demo-frame").find("#draggable").then((res)=>{
        const name=res.text()
        cy.log(name);
      })
      })
      it("Use another iframe website",()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html");
        cy.frameLoaded("#singleframe");
        cy.iframe("#singleframe").find("input[type='text']").type("demo").should("have.value","demo")
        
        
      })
      it("Nested iframe",()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html");
        cy.xpath("//a[normalize-space()='Iframe with in an Iframe']").click();
        cy.frameLoaded("iframe[src='MultipleFrames.html']").then(()=>{
            cy.frameLoaded("iframe[src='SingleFrame.html']");
            cy.iframe("[src='SingleFrame.html']").find("input[type='text']").type("demo1").should("be.visible").and("have.value","demo1",)

        })
    })
       
            it("Iframe 1",()=>{
                cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
              cy.frameLoaded("iframe[name='globalSqa']");
              cy.iframe("iframe[name='globalSqa']").find("#s").type("automation");
              cy.iframe("iframe[name='globalSqa']").find(".button_search",{force:true}).click();
})
          
           it("Iframe 2",()=>{
            cy.visit("https://vinothqaacademy.com/iframe/");
            cy.frameLoaded("iframe[name='formpage']");
            cy.iframe("iframe[name='formpage']").find("#vfb-5").type("mohan")
            cy.iframe("iframe[name='formpage']").find("#vfb-7").type("raj")
            cy.iframe("iframe[name='formpage']").find("#vfb-31-1").check()
            cy.iframe("iframe[name='formpage']").find("#vfb-13-address").type("erode")
            cy.iframe("iframe[name='formpage']").find("#vfb-13-address-2").type("bhavani")
        
            })
            it("Iframe 3",()=>{
                cy.visit("https://vinothqaacademy.com/iframe/");
                cy.frameLoaded("iframe[name='popuppage']")
                cy.iframe("iframe[name='popuppage']").find(".elementor-heading-title.elementor-size-default").should("be.visible")
                cy.iframe("iframe[name='popuppage']").find("button[name='alertbox']").should("be.visible")
                cy.iframe("iframe[name='popuppage']").find("button[name='confirmalertbox']").should("be.visible")
                cy.iframe("iframe[name='popuppage']").find("button[name='promptalertbox1234']").should("be.visible")
            })
            it("Iframe 4",()=>{
                cy.visit("https://vinothqaacademy.com/iframe/");
                cy.frameLoaded("iframe[name='homepage']");
                cy.iframe("iframe[name='homepage']").find("div[class='elementor-element elementor-element-80baf56 elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']").should("be.visible")
            })
            it.skip("IFrame in another website",()=>{
                cy.visit("https://iframetester.com/")
                cy.get(".search-bar-container").type("https://jqueryui.com/droppable/")
                cy.get("button[onclick='submit()']").click();
                cy.pause();
                cy.frameLoaded(".demo-frame");
                cy.iframe(".demo-frame",{timeout:50000}).find("#draggable").then((res1)=>{
                  const name=res1.text()
                  cy.log(name);
                })
                })
           
           it.skip("Iframe",()=>{
            cy.visit("https://www.hyrtutorials.com/p/frames-practice.html");
            cy.wait(5000)
            cy.frameLoaded("#frm2");
            cy.iframe("#frm2").find("#firstName").type("Mohan")

           })
           
           })
        
        
        
