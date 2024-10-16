describe("Mytestsuite",()=>{

    it("dummy ticket site ",()=>{

      cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
      cy.title().should('contain','Verifiable flight reservation for embassy')
      cy.get(".fg-text-dark.ffb-h2-1").should('contain','Dummy ticket booking')
      cy.get('[type="radio"]').check('549')
      cy.get("#travname").type("Thejaswaroopan")
      cy.get("#travlastname").type("subramani")
      cy.get("#order_comments").type("applying for visa ")
      cy.get("#dob").click()
      cy.get(".ui-datepicker-month").select('Jul')
      cy.get(".ui-datepicker-year").select("1999")
      cy.get(".ui-datepicker-calendar tbody tr:nth-child(4) td:nth-child(5) a").click()
      
      cy.get("[type='radio']").check("1",{force:true})
       cy.get("#traveltype_2").check("2",{force:true})
       cy.get("#fromcity").type("chennai")
       cy.get("#tocity").type('kashmir')
       cy.get("#departon").click()
       cy.get(".ui-datepicker-month").select('Oct')
       cy.get(".ui-datepicker-year").select("2024")
       cy.get(".ui-datepicker-calendar tbody tr:nth-child(3) td:nth-child(6) a").click()
       cy.get("#returndate").click()
       cy.get(".ui-datepicker-month").select('Nov')
       cy.get(".ui-datepicker-year").select("2024")
       cy.get(".ui-datepicker-calendar tbody tr:nth-child(3) td:nth-child(6) a").click()
       cy.get("#reasondummy").select("1",{force: true} )
       cy.get("#deliverymethod_3").check("3")
       cy.get("#billname").type("Thejaswaroopan")
       cy.get("#billing_phone").type("987654321")
       cy.get("#billing_email").type("swaroopantej@gmail.com")
       cy.get("#billing_country").select("IN",{force: true} )
       cy.get("#billing_address_1:nth-child(1)").type("No:1/1 Ayyanar Nagar Uthukottai ")
       cy.get("#billing_city:nth-child(1)").type("Thiruvallur ")
       cy.get("#billing_state:nth-child(1)").select("TN",{force: true} )
       cy.get("#billing_postcode:nth-child(1)").type("602026")
       cy.get("#place_order").click()
       cy.origin("https://api.payu.in/public/#/a79a295874aca0764b6ea23d5a976948/paymentoptions",()=>{
          cy.title().should("include","Payment Page")
          cy.get(".arrowIcon:nth-child(2)").click()
       })


    })














})