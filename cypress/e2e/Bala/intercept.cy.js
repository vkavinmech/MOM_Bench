describe("api intercept",()=>
{
    it("intercepting the api calls",()=>
    {
        cy.visit("https://dummyapi.io/explorer")

        cy.intercept({
           path: "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"
       
       }).as('comments')

       cy.get('.flex > :nth-child(5)').click()

       cy.wait('@comments').then(intercept=>
       {
        expect(intercept.response.body.limit).equal(10)
        expect(intercept.response.statusCode).equal(200)

       })
       
        
    })
    
        it("Intercepting the API calls by getting the data", () => {
        
            cy.visit("https://dummyapi.io/explorer");
    
            
            cy.intercept({
                method: "GET",  
                path: "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"
            }).as('comments');  
                cy.get('.flex > :nth-child(5)').click();  
                cy.wait('@comments').then((intercept) => {

                const responseBody = intercept.response.body;
                expect(responseBody.limit).to.equal(10)
                expect(intercept.response.statusCode).to.equal(200);
                cy.log(JSON.stringify(responseBody));
                const comments = responseBody.data;
                expect(comments).to.be.an('array'); 
                cy.log("First Comment: ", comments[0]);
                
                expect(comments[0].message).to.contain("This is a comment");
            });
        });
        it("Intercepting the API calls with mock response", () => {
    
            cy.visit("https://dummyapi.io/explorer");
        
        
            cy.intercept({
                method: "GET",  
                path: "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"
            }, {
                statusCode: 200,
                body: {
                    limit: 10,
                    data: [
                        {
                            message: "This is a comment",
                            id: "1",
                            post: "60d21af267d0d8992e610b8d",
                            owner: {
                                id: "60d0fe4f5311236168a109ca",
                                firstName: "John",
                                lastName: "Doe",
                                picture: "https://randomuser.me/api/portraits/men/1.jpg"
                            }
                        },
                        {
                            message: "updated comment ",
                            id: "2",
                            post: "60d21af267d0d8992e610b8d",
                            owner: {
                                id: "60d0fe4f5311236168a109cb",
                                firstName: "Jane",
                                lastName: "Doe",
                                picture: "https://randomuser.me/api/portraits/women/1.jpg"
                            }
                        }
                    ]
                }
            }).as('comments200');
        
            cy.get('.flex > :nth-child(5)').click();  

            cy.wait('@comments200').then((intercept) => {
                const responseBody = intercept.response.body;
                expect(responseBody.limit).to.equal(10);
                expect(intercept.response.statusCode).to.equal(200);
                cy.log("200 Response Body:", JSON.stringify(responseBody));
        
                const comments = responseBody.data;
                expect(comments).to.be.an('array'); 
                cy.log("First Comment: ", comments[0]);
        
                expect(comments[0].message).to.contain("This is a comment");
            });
            cy.intercept({
                method: "GET",
                path: "/data/v1/user/60d0fe4f5311236168a109ca/post?limit=10"
            }, {
                statusCode: 404,
                body: {
                    error: "RESOURCE_NOT_FOUND",
                   
                }
            }).as('comments404')
            
            cy.get('.flex > :nth-child(4)').click(); 
            cy.wait('@comments404').then((intercept) => {
                expect(intercept.response.statusCode).to.equal(404);
                cy.log("404 Response Body:", JSON.stringify(intercept.response.body));
            });
            it("POST api for 201",()=>{
                cy.visit("https://reqres.in")
               
                cy.intercept('POST',
                        '/api/users',{
                        statusCode:201,
                    
                    body: {
                       
                        data: [
                        {
                          "id": 1,
                          email:'bala02aadhikesavan@gmail.com',
                          name:"bala"
                        },
                    ]
                }
                
            }).as("201")
                   
            cy.get('[data-id="post"]').click()
                    cy.wait("@201").then((datas)=>{
                        expect(datas.response.statusCode).to.eq(201)
                    })
        
        })
        
            it("Intercepting multiple API calls triggered by different actions", () => {
            
              cy.visit("https://dummyapi.io/explorer");
          
              
              cy.intercept({
                method: "GET", 
                path: "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"
              }).as('commentsPath1');
          
              
              cy.intercept({
                method: "GET", 
                path: "/data/v1/user/60d0fe4f5311236168a109ca"
              }).as('commentsPath2');
          
              
              cy.intercept({
                method: "GET", 
                path: "/data/v1/user/60d0fe4f5311236168a109ca/post?limit=10"
              }).as('commentsPath3');
          
              
          
              cy.get('.flex > :nth-child(5)').click(); 
          
              cy.get('.py-12 > :nth-child(3) > .flex > :nth-child(2)').click(); 
        
              cy.get('.flex > :nth-child(4)').click(); 
          
              cy.wait(['@commentsPath1', '@commentsPath2', '@commentsPath3']).then((intercepts) => {
                intercepts.forEach((intercept) => {
                  const statusCode = intercept.response.statusCode;
                  const responseBody = intercept.response.body;
          
                  cy.log(`Status Code: ${statusCode}`);
                  cy.log('Response Body:', JSON.stringify(responseBody));
          
                  switch (statusCode) {
                    case 200:
        
                      cy.log("Success! Status Code 200");
                      expect(statusCode).to.equal(200);
          
                    
                      if (intercept.request.url.includes('comment?limit=10')) {
                    
                        expect(responseBody.limit).to.equal(10);
                      } else if (intercept.request.url.includes('user/60d0fe4f5311236168a109ca')) {
                        
                        expect(responseBody).to.have.property('id'); 
                      } else if (intercept.request.url.includes('user/60d0fe4f5311236168a109ca/post?limit=10')) {
                
                        expect(responseBody.limit).to.equal(10);
                      }
                      break;
                    
                    case 400:
        
                      cy.log("Bad Request - Status Code 400");
                      expect(statusCode).to.equal(400);
                      break;
          
                    case 404:
                      cy.log("Not Found - Status Code 404");
                      expect(statusCode).to.equal(404);
                      break;
          
                    case 500:
                      cy.log("Internal Server Error - Status Code 500");
                      expect(statusCode).to.equal(500);
                      break;
          
                    default:
                      cy.log(`Unexpected Status Code: ${statusCode}`);
                      break;
                  }
                });
              });
            });
           
            })
            it.only("DELETE api for 204 (delete user with ID 1)", () => {
                cy.visit("https://reqres.in");
            
            
                cy.intercept('DELETE', '/api/users/2', {
                    statusCode: 204,   
                    body: {}           
                }).as("deleteRequest");
        
                cy.get('[data-id="delete"]').click();  
        
                cy.wait("@deleteRequest").then((datas1) => {
                    expect(datas1.response.statusCode).to.eq(204);
                    cy.log("Delete Response Body:", JSON.stringify(datas1.response.body));  
                });
            });
            
        })
          
    
        
      
    