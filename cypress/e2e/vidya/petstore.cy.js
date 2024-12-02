context("Petstore :Access to orders", () =>{

    const baseUrl = "https://petstore.swagger.io/#/"

    it("order placed for purchasing the pet using POST method", () =>{

        const orderData = {
            id: 147,                
            petId: 258,             
            quantity: 1,             
            shipDate: "2024-11-07T04:38:40.278Z",  
            status: 'placed',        
            complete: true           
          }
          cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/store/order', 
            body: {
              id: 147,
              petId: 258,
              quantity: 1,
              shipDate: "2024-11-07T04:38:40.278Z",
              status: "placed",
              complete: true
            },
            headers: {
              "Content-Type": "application/json"
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', orderData.id)
            expect(response.body).to.have.property('petId', orderData.petId)
            expect(response.body).to.have.property('quantity', orderData.quantity)
            expect(response.body.shipDate).to.include(orderData.shipDate.slice(0, -1))
            expect(response.body).to.have.property('status', orderData.status)
            expect(response.body).to.have.property('complete', orderData.complete)
        })
      
       
    })
    it("Order placed for purchasing the pet using 'GET' method", () =>{

        const orderId = 1

        cy.request({
            method: 'GET', 
            url: "https://petstore.swagger.io/#/store/getOrderById/${orderId}", 
           
            headers: {
                "Content-Type": "application/json"
              }

                
          }).then((response) => {
            expect(response.status).to.eq(200);
            
        })

    })

    it("Fails to retrieve order details with an invalid orderId", () => {
        const invalidorderId = -1;
      
        cy.request({
          method: 'GET',
          url: `https://petstore.swagger.io/v2/store/order/${invalidorderId}`, 
          failOnStatusCode: false,  
            "Content-Type": "application/json"
          
        }).then((response) => {
          expect(response.status).to.eq(404);  
        })
    })

    it("Delete the order using 'DELETE' method", () => {
        const deleteorderId = 1;
      
        cy.request({
          method: 'DELETE',
          url: `https://petstore.swagger.io/v2/store/order/${deleteorderId}`,  
          failOnStatusCode: false,   
          headers: {
            "Content-Type": "application/json"
          }
        }).then((response) => {
          expect(response.status).to.eq(404)
        })

    })
})