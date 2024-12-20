describe("Access Token Flow", () => {
    let authtoken;

    
    before("Creating an access token", () => {
        cy.request({
            method: 'POST',
            url: "https://simple-books-api.glitch.me/api-clients/",
            headers: {
                'content-type': "application/json"
            },
            body: {
                clientName: "jguytuygkjbhm",
                clientEmail: Math.random().toString(5).substring(2) + "@gmail.com"
            }
        }).then((response) => {
            
            authtoken = response.body.accessToken;
            cy.log("Access Token:", authtoken);
        });
    });

    
    before("Submitting an order", () => {
        cy.request({
            method: 'POST',
            url: "https://simple-books-api.glitch.me/orders/",
            headers: {
                'content-type': "application/json",
                'Authorization': `Bearer ${authtoken}` 
            },
            body: {
                bookId: 1,
                customerName: "nothing"
            }
        }).then((response) => {
            
            expect(response.status).to.equal(201); 
            expect(response.body.created).to.be.true; 
        });
    });
    it("fetching the order",()=>
    {
        cy.request({
            method: 'GET',
            url: "https://simple-books-api.glitch.me/orders/",
            headers: {
                'content-type': "application/json",
                'Authorization': `Bearer ${authtoken}`
            }


    }).then((response)=>
    {
        expect(response.status).equal(200)
        expect(response.body).has.length(1)
    })
})
})
