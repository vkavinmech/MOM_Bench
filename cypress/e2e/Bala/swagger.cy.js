describe("swagger api ", () => {
  it("get api request", () => {
    cy.request("GET", "https://petstore.swagger.io/#/store/getInventory").then(
      (response) => {
        expect(response.status).equal(200);
      }
    );
  });

  it("should place an order successfully", () => {
    const data = {
      id: 1,
      petId: 10,
      quantity: 1,
      shipDate: "2025-01-08T06:22:22.219Z",
      status: "placed",
      complete: true,
    };

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/store/order",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.body.id).to.equal(data.id);
    });
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/store/order/1",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.equal(1);
    });
  });
  it("get the order by id", () => {
    cy.request("GET", "https://petstore.swagger.io/#/store/getOrderById").then(
      (response) => {
        expect(response.status).equal(200);
      }
    );
  });

  it("should create users successfully", () => {
    const users = [
      {
        id: 1,
        username: "bala",
        firstName: "aadhi",
        lastName: "kesavan",
        email: "bala02aadhi@gmail.com",
        password: "bala789",
        phone: "7896543987",
        userStatus: 0,
      },
    ];
  
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithList",
      body: users,
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response.body);  
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.body).to.have.property("message", "ok");
      //expect(response.body.username).to.equal(users[0].username);  
    });
    it("Update user",()=>{
      
      
      cy.request({
        method: "PUT",
        url: "https://petstore.swagger.io/v2/user/bala",
        body: {
          id: 1,
          username: "bala",
          firstName: "taehung",
          lastName: "kesavan",
          email: "bala02aadhi@gmail.com",
          password: "bala789",
          phone: "7896543987",
          userStatus: 1
        }
      })
        cy.request({
          method: "GET",
          url: "https://petstore.swagger.io/v2/user/bala"
        }).then((Res) => {
          expect(Res.status).to.equal(200);  
          expect(Res.body.firstName).to.equal('taehung'); 
          expect(Res.body.id).to.equal(1) 
        });
      });
  });
  it('Login the user',()=>{
    cy.request({
      method:"GET",
      url:"https://petstore.swagger.io/v2/user/login?username=mohan&password=bala"
    }).then((res)=>{
      expect(res.status).to.equal(200)
    })
  })
  it("Logout the user",()=>{
    cy.request({
      method:"GET",
      url:"https://petstore.swagger.io/v2/user/logout?username=mohan&password=bala"
    }).then((res)=>{
      expect(res.status).to.equal(200)
    })
  })
  
  });
  
  
  
  
  
  



