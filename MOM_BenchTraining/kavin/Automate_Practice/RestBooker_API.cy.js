describe('REST-Booker API Tests', () => {
    let authToken;
    let bookingId;
    before('Should Create the Auth Token', () => {
      const credentials = {
        username: "admin",
        password: "password123"
      };
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/auth',
        body: credentials,
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          authToken = response.body.token;
          cy.log('Auth Token:', authToken);
        });
    });
    it('Get Booking IDs', () => {
      cy.request({
        method: 'GET',
        url: 'https://restful-booker.herokuapp.com/booking',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Booking IDs:', response.body);
      });
    });
  
    it('Should Create the Booking', () => {
      const newBooking = {
        firstname: "John",
        lastname: "Doe",
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: "2024-09-01",
          checkout: "2024-09-10"
        },
        additionalneeds: "Breakfast"
      };
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: newBooking,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        bookingId = response.body.bookingid;
        cy.log('Created Booking ID:', bookingId);
      });
    });
  
    it('Get Created Booking by Booking ID', () => {
      cy.request({
        method: 'GET',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.additionalneeds).to.eq("Breakfast");
        cy.log('Retrieved Booking:', response.body);
      });
    });
    it('Should Update the Created Booking', () => {
      const updatedBookingData = {
          "firstname": "Jane",
          "lastname": "Smith",
          "totalprice": 200,
          "depositpaid": false,
          "bookingdates": {
              "checkin": "2024-01-05",
              "checkout": "2024-01-15"
          },
          "additionalneeds": "Dinner"
      };
      const username = 'admin';
      const password = 'password123';
      const auth = btoa(`${username}:${password}`); 
      cy.request({
          method: 'PUT',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          body: updatedBookingData,
          headers: {
              'Authorization': `Basic ${auth}`
          }
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('firstname', 'Jane');
          expect(response.body).to.have.property('lastname', 'Smith');
      });
  });
    it('Should parcially Update the Created Booking', () => {
      const parcialUpdate = {
          "firstname": "Adam",
          "lastname": "John"
      };
      const username = 'admin';
      const password = 'password123';
      const auth = btoa(`${username}:${password}`); 
      cy.request({
          method: 'PATCH',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          body: parcialUpdate,
          headers: {
              'Authorization': `Basic ${auth}`
          }
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('firstname', 'Adam');
          expect(response.body).to.have.property('lastname', 'John');
        });
    });
    it('Should Delete the Created Booking', () => {  
      const username = 'admin';
      const password = 'password123';
      const auth = btoa(`${username}:${password}`);

      cy.request({
          method: 'DELETE',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          headers: {
              'Authorization': `Basic ${auth}`
          }
      }).then((response) => {
        expect(response.status).to.eq(201); 
      });
    });
    it('Should perform ping-Healthcheck', () => {  
      cy.request({
          method: 'GET',
          url: 'https://restful-booker.herokuapp.com/ping'
          }).then((response) => {
              expect(response.status).to.eq(201); 
        });
    });
});