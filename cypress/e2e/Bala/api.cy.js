describe("api resquest",()=>
{
    it("GET request the api",()=>
    {
        cy.request('GET',"https://reqres.in/api/users?page=2").then((response)=>
        {
            expect(response.status).equal(200)
            expect(response.body.data[1].first_name).equal("Lindsay")
        })
    })

    it("POST  request the api",()=>
        {
            var data={
                "name": "bala",
                "job": "QA"
            }
            cy.request('POST',"https://reqres.in/api/users",data).then((response)=>
            {
                expect(response.status).equal(201)
                expect(response.body.name).equal(data.name)
                expect(response.body.job).equal(data.job)
            })
        })
        it("update the user data",()=>
            {
                var data1={
                    "name": "bala",
                    "job": "software tester"
                }
                cy.request('PUT',"https://reqres.in/api/users/2",data1).then((response)=>
                {
                    expect(response.status).equal(200)
                    expect(response.body.name).equal(data1.name)
                    expect(response.body.job).equal(data1.job)
                })
            })
            it("delete user",()=>
            {
                cy.request('DELETE',"https://reqres.in/api/users/2").then((response)=>
                 {
                    expect(response.status).equal(204)
                })
            })
})