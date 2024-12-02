context("API script for restful-booker website", () =>{

    it("Create a token using 'POST' method", () => {
        cy.request({
          method: 'POST',
          url: 'https://restful-booker.herokuapp.com/auth',  
          body: {
            "username": "admin",
            "password": "password123"
          },
          headers: {
            "Content-Type": "application/json"
          }
        }).then((response) => {
          expect(response.status).to.eq(200);  
          expect(response.body).to.have.property('token');  
        });
      });

      it("Create a booking id's using 'GET' method", () => {
       
        cy.request({
          method: 'GET',
          url: 'https://restful-booker.herokuapp.com/booking', 
          headers: {
            "Content-Type": "application/json"
          }
        }).then((response) => {
          expect(response.status).to.eq(200);  
          expect(response.body).to.be.an('array');  
          cy.log('Booking IDs:', response.body)
        });
      });

      it("Create a booking id's using 'GET' method and parameters", () => {
        const user = {
            Firstname: "John",
            Lastname: "Robert",
            checkin: "2024-11-07T04:38:40.278Z",
            checkout: "2024-11-07T04:38:40.278Z"  // Corrected typo
        };
    
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking', 
            qs: {
                firstname: user.Firstname,
                lastname: user.Lastname,
                checkin: user.checkin,
                checkout: user.checkout  
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
    
            if (response.body.length > 0) {
                const booking = response.body[0];  
                cy.log('Created Booking ID:', booking.bookingid);
                expect(booking).to.have.property('firstname', user.Firstname);
                expect(booking).to.have.property('lastname', user.Lastname);
            } else {
                cy.log("No bookings found with the specified criteria");
            }
        })
    })

    it("Booking - GetBooking", () => {

        const testusers = {
            
            bookingId : "101",
            firstname : "John",
            lastname: "Smith", 
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"

        }
       
        cy.request({
          method: 'GET',
          url: `https://restful-booker.herokuapp.com/booking/${testusers.bookingId}`, 
          headers: {
            "Accept": "application/json"
          }
        }).then((response) => {
          expect(response.status).to.eq(200);  
          expect(response.body).to.be.an('object');  
          cy.log('Booking details:', response.body)
          expect(response.body.firstname).to.eq(testusers.firstname);
            expect(response.body.lastname).to.eq(testusers.lastname);
            expect(response.body.totalprice).to.eq(testusers.totalprice);
            expect(response.body.depositpaid).to.eq(testusers.depositpaid);
            expect(response.body.bookingdates.checkin).to.eq(testusers.bookingdates.checkin);
            expect(response.body.bookingdates.checkout).to.eq(testusers.bookingdates.checkout);
            expect(response.body.additionalneeds).to.eq(testusers.additionalneeds)
        });
      });

      it.only("Booking - CreateBooking using 'POST' method", () => {

        const createuser = {
            firstname: "John",
            lastname: "Smith", 
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        };
    
        cy.request({
            method: 'POST',
            url: "https://restful-booker.herokuapp.com/booking", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: createuser
        }).then((response) => {
            expect(response.status).to.eq(200);  
            expect(response.body).to.be.an('object');  
            cy.log('Booking details:', response.body);
    
            // Access response.body.booking for the booking details
            const booking = response.body.booking;
            expect(booking.firstname).to.eq(createuser.firstname);
            expect(booking.lastname).to.eq(createuser.lastname);
            expect(booking.totalprice).to.eq(createuser.totalprice);
            expect(booking.depositpaid).to.eq(createuser.depositpaid);
            expect(booking.bookingdates.checkin).to.eq(createuser.bookingdates.checkin);
            expect(booking.bookingdates.checkout).to.eq(createuser.bookingdates.checkout);
            expect(booking.additionalneeds).to.eq(createuser.additionalneeds);
        });
    });
    
    
      
})