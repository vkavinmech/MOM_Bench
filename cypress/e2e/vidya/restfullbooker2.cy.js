context("API script for restfull booker part 2", () =>{

    let bookingId;

    it("Generate Authentication Token", () => {

        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
              username: 'admin',
              password: 'password123'
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            Cypress.env('authToken', response.body.token);
            cy.log('Auth Token:', Cypress.env('authToken'))
          })
    })

    it("Get Booking ID", () =>{

        cy.request({
            method: 'GET',
            url: "https://restful-booker.herokuapp.com/booking",
            headers: {
                "Accept": "application/json"
              } 
        }).then((response) =>{

            expect(response.status).to.eq(200)
            bookingId=response.body[0].bookingid
            cy.log("Booking ID:", bookingId)
            
        })
    })

    it("Booking - UpdateBooking", () =>{

        expect(bookingId).to.exist

        cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`, 
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Cookie': `token=${Cypress.env('authToken')}`
            },
            body: {
              firstname: 'John',
              lastname: 'Doe',
              totalprice: 150,
              depositpaid: true,
              bookingdates: {
                checkin: '2024-11-01',
                checkout: '2024-11-05'
              },
              additionalneeds: 'Breakfast'
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.firstname).to.eq('John');
            expect(response.body.lastname).to.eq('Doe');
          })
        
    })
    it("Booking - PartialUpdateBooking using 'PATCH' method", () =>{

        expect(bookingId).to.exist

        cy.request({
            method: 'PATCH',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`, 
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Cookie': `token=${Cypress.env('authToken')}`,
              
            },
            body: {
              firstname: 'Gopal',
              lastname: 'Das',
              
              additionalneeds: 'Lunch'
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.firstname).to.eq('Gopal');
            expect(response.body.lastname).to.eq('Das');
            expect(response.body.additionalneeds).to.eq('Lunch');
            cy.log("Partial update was successful: Firstname, Lastname, and Additional Needs have been updated.");
          })
    })

    it("Booking - DeleteBooking", () =>{

        cy.request({
            method: 'DELETE',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`, 
            headers: {
              
              'Cookie': `token=${Cypress.env('authToken')}`,
              
            },
           
            
          }).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Booking has been successfully deleted.");
          })

    })


    it("Ping - HealthCheck using 'GET' method", () =>{

        cy.request({
            method: 'GET',
            url: "https://restful-booker.herokuapp.com/ping", 
            
            
          }).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Health check passed: Server is responsive.")
          })

    })
})