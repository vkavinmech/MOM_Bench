describe("API automation", () => {
  let bookingIds = [];
  let authToken;

  it("creating an auth token", () => {
    const data = {
      username: "admin",
      password: "password123",
    };

    cy.request({
      method: "POST",
      url: "https://restful-booker.herokuapp.com/auth",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("token");
      
     //expect(response.body.username).equal("admin")
     // expect(response.body.password).equal(data.password)
      authToken = response.body.token;
      console.log("Fetched Token: ", authToken);
    });
  });

  it("Creating multiple bookings", function () {
    const bookings = [
      {
        firstname: "Zade",
        lastname: "Madeows",
        totalprice: 444,
        depositpaid: true,
        bookingdates: { checkin: "2018-02-03", checkout: "2019-02-04" },
        additionalneeds: "Breakfast",
      },
      {
        firstname: "anna",
        lastname: "huang",
        totalprice: 222,
        depositpaid: false,
        bookingdates: { checkin: "2020-05-01", checkout: "2020-05-05" },
        additionalneeds: "Lunch",
      },
      {
        firstname: "Alex",
        lastname: "volkav",
        totalprice: 333,
        depositpaid: true,
        bookingdates: { checkin: "2021-09-01", checkout: "2021-09-10" },
        additionalneeds: "Dinner",
      },
      {
        firstname: "little",
        lastname: "mouse",
        totalprice: 199,
        depositpaid: true,
        bookingdates: { checkin: "2022-06-01", checkout: "2022-06-05" },
        additionalneeds: "Lunch",
      },
      {
        firstname: "thomas",
        lastname: "erikson",
        totalprice: 150,
        depositpaid: false,
        bookingdates: { checkin: "2023-01-10", checkout: "2023-01-15" },
        additionalneeds: "Breakfast",
      },
      {
        firstname: "Robin",
        lastname: "Sharma",
        totalprice: 350,
        depositpaid: true,
        bookingdates: { checkin: "2024-03-12", checkout: "2024-03-20" },
        additionalneeds: "Dinner",
      },
      {
        firstname: "verity",
        lastname: "Author",
        totalprice: 500,
        depositpaid: true,
        bookingdates: { checkin: "2025-02-15", checkout: "2025-02-20" },
        additionalneeds: "Dinner",
      },
      {
        firstname: "My",
        lastname: "Sunshine",
        totalprice: 300,
        depositpaid: false,
        bookingdates: { checkin: "2026-05-10", checkout: "2026-05-14" },
        additionalneeds: "Lunch",
      },
      {
        firstname: "mark",
        lastname: "manson",
        totalprice: 250,
        depositpaid: true,
        bookingdates: { checkin: "2027-08-01", checkout: "2027-08-05" },
        additionalneeds: "Breakfast",
      },
      {
        firstname: "james",
        lastname: "clear",
        totalprice: 420,
        depositpaid: false,
        bookingdates: { checkin: "2028-09-01", checkout: "2028-09-07" },
        additionalneeds: "Lunch",
      },
    ];

    bookings.forEach((bookingData) => {
      cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/booking",
        body: bookingData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("bookingid");
        bookingIds.push(response.body.bookingid);
        console.log(`Created booking with ID: ${response.body.bookingid}`);
      });
    });
  });

  it("Get booking details based on multiple IDs", function () {
    if (bookingIds.length > 0) {
      bookingIds.forEach((bookingId) => {
        cy.request(
          `GET`,
          `https://restful-booker.herokuapp.com/booking/${bookingId}`
        ).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property("firstname");
          expect(response.body).to.have.property("lastname");
          expect(response.body).to.have.property("totalprice");
          expect(response.body).to.have.property("depositpaid");
          expect(response.body).to.have.property("bookingdates");
          expect(response.body.bookingdates).to.have.property("checkin");
          expect(response.body.bookingdates).to.have.property("checkout");
          expect(response.body).to.have.property("additionalneeds");
          console.log(`Details for booking ID ${bookingId}:`, response.body);
        });
      });
    } else {
      throw new Error("No booking IDs available to fetch details.");
    }
  });

  it("Update the first booking based on booking ID using PUT", function () {
    const updatedData = {
      firstname: "James",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "Breakfast",
    };

    if (bookingIds.length > 0) {
      const bookingIdToUpdate = bookingIds[0];

      cy.request({
        method: "PUT",
        url: `https://restful-booker.herokuapp.com/booking/${bookingIdToUpdate}`,
        body: updatedData,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie: `token=${authToken}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.firstname).to.equal(updatedData.firstname);
        expect(response.body.lastname).to.equal(updatedData.lastname);
        expect(response.body.totalprice).to.equal(updatedData.totalprice);
        expect(response.body.depositpaid).to.equal(updatedData.depositpaid);
        expect(response.body.bookingdates.checkin).to.equal(
          updatedData.bookingdates.checkin
        );
        expect(response.body.bookingdates.checkout).to.equal(
          updatedData.bookingdates.checkout
        );
        expect(response.body.additionalneeds).to.equal(
          updatedData.additionalneeds
        );
        console.log(`Updated booking with ID: ${bookingIdToUpdate}`);
      });
    } else {
      throw new Error("No booking IDs available to update.");
    }
  });
});
