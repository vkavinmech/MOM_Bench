describe("Update and Delete Bookings",()=>{
    let bookingid;
    it("Create bookings",()=>{
        cy.request({
            method:"POST",
            url:"https://restful-booker.herokuapp.com/booking",
            body:{
                "firstname" : "mohan",
                "lastname" : "raj",
                "totalprice" : 1112,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2025-01-01",
                    "checkout" : "2025-02-01"
                },
                "additionalneeds" : "Breakfast"
            }
            
        }).then((res)=>{
            expect(res.status).to.equal(200)
            bookingid=res.body.bookingid;
            cy.log(bookingid)
        })
    })
        it("Get the data after creating",()=>{
            cy.request({
                method:"GET",
                url:"https://restful-booker.herokuapp.com/booking/"+bookingid
            }).then((res)=>{
                expect(res.status).to.equal(200);
                expect(res.body.firstname).to.equal("mohan");
                expect(res.body.lastname).to.equal("raj");
                expect(res.body.totalprice).to.equal(1112);
                expect(res.body.additionalneeds).to.equal("Breakfast")
            })
        })

    it("Update booking using token",()=>{
        cy.request({
            method:"PUT",
            url:"https://restful-booker.herokuapp.com/booking/"+bookingid,
            headers:{
                 "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            body:{
                "firstname" : "mohan",
                "lastname" : "raj",
                "totalprice" : 1112,
                "depositpaid" : false,
                "bookingdates" : {
                    "checkin" : "2025-01-01",
                    "checkout" : "2025-02-01"
                },
                "additionalneeds" : "Lunch"
            }
}).then((res)=>{
            expect(res.status).to.equal(200);
           
})


    })
    it("Get data after updaing values",()=>{
        cy.request({
            method:"GET",
            url:"https://restful-booker.herokuapp.com/booking/"+bookingid
        }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body.depositpaid).to.equal(false);
            expect(res.body.additionalneeds).to.equal("Lunch")
        })

    })
    it("Partial update the bookings",()=>{
        cy.request({
            method:"PATCH",
            url:`https://restful-booker.herokuapp.com/booking/${bookingid}`,
            headers:{
                 "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            body:{
                "firstname" : "prem",
                "lastname" : "kumar",
            }
               
        }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body.firstname).to.equal("prem");
            expect(res.body.lastname).to.equal("kumar")
        })
    })
    it("Get the data after partial updating",()=>{
        cy.request({
            method:"GET",
            url:`https://restful-booker.herokuapp.com/booking/${bookingid}`

        }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body.firstname).to.equal("prem");
            expect(res.body.lastname).to.equal("kumar")
        })
    })
    it("Delete the bookings",()=>{
        cy.request({
            method:"DELETE",
            url:"https://restful-booker.herokuapp.com/booking/"+bookingid,
            headers:{
                "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="

            }
            }).
        then((res)=>{
            expect(res.status).to.equal(201)
        })
    })
    it("Health checkup for api is just running",()=>{
        cy.request({
            method:"GET",
            url:"https://restful-booker.herokuapp.com/ping"
        }).then((res)=>{
            expect(res.status).to.equal(201)
        })
    })
    let id;
    let token;
    it("Post the data in fake api",()=>{
        cy.request({
            method:"POST",
            url:"https://api.escuelajs.co/api/v1/users/",
            body:
{
  "name": "mohan",
  "email": "mohan@gmail.com",
  "password": "1234",
  "avatar": "https://picsum.photos/800"
}
        }).then((res)=>{
            expect(res.status).to.equal(201)
            id=res.body.id;
            cy.log(id)
        })
    })
    it("Get data after creating",()=>{
        cy.request({
            method:"GET",
            url:`https://api.escuelajs.co/api/v1/users/${id}`
        }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body.name).to.eq("mohan");
            expect(res.body.email).to.equal("mohan@gmail.com");
            expect(res.body.password).to.equal('1234')
        })
    })
    it("Delete the id",()=>{
        cy.request({
            method:"DELETE",
            url:`https://api.escuelajs.co/api/v1/users/${id}`
        }).then((res)=>{
            expect(res.status).to.equal(200);
            let body=res.body;
            cy.log(body)
            expect(res.body).to.equal('true')

        })
    })
    it("Generate token in fake api",()=>{
        cy.request({
            method:"POST",
            url:"https://api.escuelajs.co/api/v1/auth/login",
            body:{
                "email": "john@mail.com",
                 "password": "changeme"
            }
        }).then((res)=>{
            expect(res.status).to.equal(201)
            token=res.body.access_token
            let token1=res.body.refresh_token
            cy.log(token)
            cy.log(token1)


        })
    })
    it("Using token to get the profile", () => {
        cy.request({
            method: "GET",
            url: "https://api.escuelajs.co/api/v1/auth/profile",  
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTczNjQ5MTUyOSwiZXhwIjoxNzM4MjE5NTI5fQ.I1YhCDGruXoNA09YhvoEtw-fmqkTjKUngJWnxZa1MRk"
            }
        }).then((res) => {
            expect(res.status).to.equal(200); 
            expect(res.body.email).to.eq("john@mail.com");
            expect(res.body.password).to.equal("changeme")

    })
            
        });
        let token1;
        it.only("Auth in dummyjson website",()=>{
            cy.request({
                method:"POST",
                url:'https://dummyjson.com/auth/login',
                body:{
                    "username":"emilys",
                    "password":"emilyspass"
                },
                failOnStatusCode: false
            }).then((res)=>{
                expect(res.status).to.equal(200)
                 token1=res.body.accessToken;
                cy.log(token1)
            })
        })
        it.skip("Get the data using auth token",()=>{
            cy.request({
                method:"GET",
                url:'https://dummyjson.com/auth/me',
                headers:{
                    'Authorization':`Bearer ${token1}`
                }
            }).then((res)=>{
                expect(res.status).to.equal(200);
                expect(res.body.email).to.equal("emily.johnson@x.dummyjson.com");
                expect(res.body.gender).to.equal("female");
                expect(res.body.username).to.equal("emilys")
        })
        })
        



        
    })