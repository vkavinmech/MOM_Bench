describe("Swagger api",()=>{

it("Access to  order",()=>{
    cy.request("GET","https://petstore.swagger.io/#/store/getInventory").then((res)=>{
        expect(res.status).to.equal(200)
    })
})
it("Place an order",()=>{
    let value={
         "id":10,
        "petId": 10,
        "quantity": 2,
        "shipDate": "2023-01-01T00:00:00Z",
        "status": "placed",
        "complete": true
      }
      
    cy.request({
        method:"POST",
        url:"https://petstore.swagger.io/v2/store/order",
        body:value
    }).then((res)=>{
        console.log(res.body)
        expect(res.status).to.equal(200)
        expect(res.body.quantity).to.equal(value.quantity)
       expect(res.body.id).to.equal(value.id)
    })
})
it("Get the order by order id",()=>{
    cy.request("GET", "https://petstore.swagger.io/v2/store/order/10").then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.id).to.eq(10);
      });
      
})
it("Delete the existing order",()=>{
    cy.request("DELETE","https://petstore.swagger.io/v2/store/order/10").then((res)=>{
        expect(res.status).to.eq(200)
    })
   
    })
    it('Create new users ', () => {
              
        const users = [
          {
            "id": 1,
            "username": "skmohan",
            "firstName": "mohan",
            "lastName": "raj",
            "email": "mohan@gmail.com",
            "password": "mohan7471",
            "phone": "12234567",
            "userStatus": 1
          },
      
        ];
    
      
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/user/createWithList',  
          body: users
          
        }).then((response) => {
            cy.log(response.body)
      
          expect(response.status).to.equal(200);
          expect(response.body.username).to.equal(users.username) 
        });
      });
      it("Get by username",()=>{
        cy.request("GET", "https://petstore.swagger.io/#/user/getUser/skmohan").then((res) => {
          expect(res.status).to.equal(200); 
        
          
        });

        
      })
      it("Update user",()=>{
      
      
        cy.request({
          method: "PUT",
          url: "https://petstore.swagger.io/v2/user/skmohan",
          body: {
            id: 1,
            username: "skmohan",
            firstName: "mohanraj",
            lastName: "rajkumar",
            email: "mohan@gmail.com",
            password: "mohan747178888",
            phone: "12234567",
            userStatus: 1
          }
        })
          cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/user/skmohan"
          }).then((Res) => {
            expect(Res.status).to.equal(200);  
            expect(Res.body.firstName).to.equal('mohanraj'); 
            expect(Res.body.id).to.equal(1) 
          });
        });
        it.skip("Delete the user",()=>{
          cy.request("DELETE","https://petstore.swagger.io/v2/user/skmohan").then((res)=>{
            expect(res.status).to.equal(200)
          })
        })
        it('Login the user',()=>{
          cy.request({
            method:"GET",
            url:"https://petstore.swagger.io/v2/user/login?username=mohan&password=mohan"
          }).then((res)=>{
            expect(res.status).to.equal(200)
          })
        })
        it("Logout the user",()=>{
          cy.request({
            method:"GET",
            url:"https://petstore.swagger.io/v2/user/logout?username=mohan&password=mohan"
          }).then((res)=>{
            expect(res.status).to.equal(200)
          })
        })

        
        it("Add a pet", () => {
          const values={
            id: 1,
            name: "mohan",
            status: "available"

          }
          cy.request({
            
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet",
            body:values
          }).then((response) => {
            expect(response.status).to.eq(200); 
          });
        });
        it("Update the pet",()=>{
          const upd={
            "id":1,
            "name":"raj",
            "status":"unavailable"
          }
          cy.request({
            method:"PUT",
            url:"https://petstore.swagger.io/v2/pet",
            body:upd

          }).then((res)=>{
            expect(res.status).to.equal(200)
            expect(res.body.name).to.equal("raj")
          })
        })
        it("Find a pet by id",()=>{
          cy.request("GET","https://petstore.swagger.io/v2/pet/1").then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal("raj")
          })
        })
        it("Delete the pet",()=>{
          cy.request("DELETE","https://petstore.swagger.io/v2/pet/1").then((res)=>{
            expect(res.status).to.equal(200)
          })
        })
      })