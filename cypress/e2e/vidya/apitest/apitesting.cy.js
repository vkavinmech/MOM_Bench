context("API Automation", () =>{

    it("Get-list user", ()=>{
        cy.request("GET", "users?page=2").then( (response) =>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal("Michael")
        })
    })

    it("Post- create user", ()=>{

        var user= { 

             "name": 'morpheus',
                "job": 'leader'

        }
                
        cy.request("POST", "users", user).then( (response) =>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })    

    it("Update user", ()=>{

        var user1 = 

            {
                "name": "morpheus",
                "job": "zion resident"
            }
                
            cy.request("PUT", "users/2", user1).then( (response) =>{
            expect(response.status).equal(200)
            expect(response.body.name).equal(user1.name)
            expect(response.body.job).equal(user1.job)
        })
    })  
    
    it("Delete-list user", ()=>{
        cy.request("DELETE", "users/2").then( (response) =>{
            expect(response.status).equal(204)
            
        })
    })



})