import 'cypress-iframe';  

describe("handling iframes",()=>
{
    it("frames using custom commands",()=>
    {
        cy.visit("https://demo.automationtesting.in/Frames.html")
              cy.getIframe('#singleframe') 
                .find("input[type='text']") 
                .type('Hello, world!')
            
            })
            it("frames using cypress plugin",()=>
            {
                cy.visit("https://demo.automationtesting.in/Frames.html")

                cy.frameLoaded("#singleframe")
                cy.iframe("#singleframe")
                .find("input[type='text']") 
                .type('Hello, world!')
            })
           
            
                it("should type into the input field inside a nested iframe", () => {
                  cy.visit("https://demo.automationtesting.in/Frames.html");
              
                cy.xpath("//a[normalize-space()='Iframe with in an Iframe']").click();
              
                
                  cy.get("iframe[src='MultipleFrames.html']").should('be.visible');
                  cy.frameLoaded("iframe[src='MultipleFrames.html']");
                  cy.iframe("iframe[src='MultipleFrames.html']")
                 .find("iframe[src='SingleFrame.html']")  
                .should('be.visible'); 
                   cy.frameLoaded("iframe[src='SingleFrame.html']");
                    cy.iframe("iframe[src='SingleFrame.html']")
                    .find("input[type='text']") 
                    .type("Hello from Nested Iframe!")
                    .should('have.value', 'Hello from Nested Iframe!')
                });
                it("iframes",()=>
                {
                    cy.visit("https://www.w3schools.com/html/html_iframe.asp")
                    cy.wait(5000)
                    cy.frameLoaded("iframe[title='W3Schools HTML Tutorial']")
                    cy.iframe("iframe[title='W3Schools HTML Tutorial']")
                    .xpath("//body/div[@id='belowtopnav']/div[@class='w3-row w3-white']/div[@id='main']/div[2]/a[2]")
                     .should('be.visible')
                     .click({ force: true })
                     cy.get("div[id='subtopnav'] a[title='CSS Tutorial']")
                     .should('be.visible')
                     .click()

                     cy.frameLoaded("//iframe[@id='google_ads_iframe_/22152718,16833175/sws-hb//w3schools.com//right_bottom_medium_rectangle_0']");

                     
                     cy.iframe("//iframe[@id='google_ads_iframe_/22152718,16833175/sws-hb//w3schools.com//right_bottom_medium_rectangle_0']")
                       .xpath("//div[@id='cbb']//svg")
                       .should('be.visible')
                       .click();
                    })
              });
              
              
              
              
        
          
    
