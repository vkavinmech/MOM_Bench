describe('Intercept Network Requests Example', () => {
    it('Intercept and assert the network request', () => {
        cy.visit("https://dummyapi.io/explorer");
    cy.intercept({
        path:"/data/v1/user/60d0fe4f5311236168a109ca/post?limit=10"
    })
    .as('user')
    cy.get('.flex > :nth-child(4)').click();
    cy.wait('@user').then(inter=>{
        
        expect(inter.response.statusCode).to.equals(404);
    }
    )
  })
  it("Intercept and assert the network request 2",()=>{
    cy.visit("https://dummyapi.io/explorer");
    cy.intercept({
        path:"/data/v1/user/60d0fe4f5311236168a109ca"
    }).as('details')
    cy.get(':nth-child(3) > .flex > :nth-child(2)').click();
    cy.wait('@details').then((res)=>{
        expect(res.response.statusCode).to.equal(404)
    })
  })
  it("Intercept and assert the network request 3",()=>{
    cy.visit("https://dummyapi.io/explorer");
    cy.intercept({
        path:"/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"
    }).as('comm')
    cy.get('.flex > :nth-child(5)').click();
    cy.wait('@comm').then((res1)=>{
        expect(res1.response.statusCode).to.equal(200)
        expect(res1.response.body.limit).to.eq(10)
    })
  })
  it("Intercept and assert the network request 4",()=>{
    cy.visit("https://dummyapi.io/explorer");
    cy.intercept({
        path:"/data/v1/tag?limit=10"
    }).as('cont')
    cy.get('.flex > :nth-child(6)').click();
    cy.wait('@cont').then((res2)=>{
        expect(res2.response.statusCode).to.equal(200)
       // expect(res2.response.body.limit).to.eq(10)
    })
  })
  it("Intercept and assert the network request 5",()=>{
    cy.visit("https://dummyapi.io/explorer");
    cy.intercept({
        path:"/data/v1/tag/water/post?limit=10"
  }).as("tag")
  cy.get('.flex > :nth-child(7)').click();
  cy.wait("@tag").then((tag1)=>{
    if(tag1.response){
        expect(tag1.response.statusCode).to.equal(200)
    }
    else{
        console.error(' response is undefined:', tag1);
    }
  })

  
})
    
    it.skip(' mocks user data from JSONPlaceholder', () => {
      cy.visit("https://jsonplaceholder.typicode.com")
      cy.intercept({
        method:"Get",
        path:'/users'
      },
        {
            statusCode: 200,

      
        body: {
           
            "id": 1,
            "title": "Automation",
        }
    }
).as("user")
    cy.xpath('(//a)[23]').click()
    cy.wait("@user").then((fun)=>{
        expect(fun.response.statusCode).to.equal(200)
    })
   
    })


    it("Mock response for 200", () => {
    
        cy.visit("https://dummyapi.io/explorer");
    
    
        cy.intercept({
            method: "Get",  
            path: "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"
        }, {
            statusCode: 200,
            body: {
                limit: 100,
                data: [
                    {
                       
                        id: "1",
                        post: "60d21af267d0d8992e610b8d",
                        owner: {
                            id: "60d0fe4f5311236168a109ca",
                            firstName: "Mohan",
                            lastName: "raj",
                           
                        }
                    },
                ]
            }
        }).as('user1');
    
        cy.get('.flex > :nth-child(5)').click();  

        cy.wait('@user1').then((intercept) => {
            
            expect(intercept.response.statusCode).to.equal(200)
           
        });
    })
        it.skip("Mocking POST 201", () => {
    
            cy.visit("https://dummyapi.io/explorer");
            cy.intercept({
                method: "POST",  
                path: "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10" 
            }, {
                statusCode: 201,
               
            body: {
                limit: 1,
                data: [
                    {
                       
                        id: "1",
                        post: "60d21af267d0d8992e610b8d",
                        owner: {
                            id: "60d0fe4f5311236168a109ca",
                            firstName: "Mohan",
                            lastName: "raj",
                           
                        }
                    },
                ]
                }
            }).as('comment201');
            cy.get(':nth-child(3) > .flex > .text-white').click().then(()=>{
                cy.log("clicked successfully")
            })
            cy.wait(3000)
            cy.wait('@comment201').then((intercept) => {
                
                expect(intercept.response.statusCode).to.equal(201);
                expect(responseBody.data.admin.firstName).to.equal("Mohan");
                expect(responseBody.data.admin.lastName).to.equal("raj");
            });
            })
            it("mock for 404",()=>{
                cy.visit("https://dummyapi.io/explorer");
                cy.intercept({
                    method: "GET",
                    path: "/data/v1/user/60d0fe4f5311236168a109ca/post?limit=10"
                }, {
                    statusCode: 404,
                    body: {
                        Error: "(empty) There is No RESOURCE FOUND in this page",
                       
                    }
                }).as('404')
                
                cy.get('.flex > :nth-child(4)').click(); 
                cy.wait('@404').then((intercept) => {
                    expect(intercept.response.statusCode).to.equal(404);
                   
                });
            
            })
        
        
        
        it("Post api for 201",()=>{
            cy.visit("https://reqres.in")
           
            cy.intercept('POST',
                    '/api/users',{
                    statusCode:201,
                
                body: {
                   
                    data: [
                    {
                      "id": 1,
                      email:'mohan@gmail.com',
                      firstname:"mohan",
                      lastname:"raj"
                    },
                ]
            }
            
        }).as("200")
               
        cy.get('[data-id="post"]').click()
                cy.wait("@200").then((datas)=>{
                    expect(datas.response.statusCode).to.eq(201)
                })
        })
        it("Delete api for 204",()=>{
            cy.visit("https://reqres.in")
           
            cy.intercept('DELETE',
                    '/api/users/2',{
                    statusCode:204,
                
                body: {
                   
                    data: [
                    {
                      "id": 1,
                      email:'mohan@gmail.com',
                      name:"mohan"
                    },
                ]
            }
            
        }).as("204")
               
        cy.get('[data-id="delete"]').click()
                cy.wait("@204").then((datas1)=>{
                    expect(datas1.response.statusCode).to.eq(204)
                })
            })
                it("Delayed response",()=>{
                    cy.visit("https://reqres.in")
                   
                    cy.intercept('GET',
                            '/api/users?delay=3',{
                            statusCode:200,
                        
                        body: {
                           
                           
                            
                              "id": 1,
                              
                            },
                        
                    
                    
                }).as("200")
                       
                cy.get('[data-id="delay"]').click()
                cy.wait(10000)
                        cy.wait("@200").then((datas)=>{
                            expect(datas.response.statusCode).to.eq(200)
                        })
    
    })
})
