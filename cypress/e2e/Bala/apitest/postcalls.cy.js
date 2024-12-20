describe("postcalls",()=>
{
    it("hard coded json object",()=>
    {
        const requestbody = {
           "name": "robbin sharma",
            "job": "writter"
        }
        cy.request('POST',"https://reqres.in/api/users",requestbody).then((response)=>
         {
            expect(response.status).equal(201)
            expect(response.body.name).equal(requestbody.name)
            expect(response.body.job).equal(requestbody.job)
           
        })
    })
    it("dynamically generating the json object",()=>
    
    {
        const job = ["writter","author","speaker","novelist"];
         const randomjob = job[Math.floor(Math.random() * job.length)];
        const requestbody = {
            name: Math.random().toString(5).substring(2),
            job:randomjob
            
        }
        cy.request('POST',"https://reqres.in/api/users",requestbody).then((response)=>
         {
            expect(response.status).equal(201)
            expect(response.body. name).equal(requestbody.name)
            expect(response.body.job).equal(requestbody.job)
           
        })
    })
    it("using fixture json object ",()=>
    {
        cy.fixture("jsondata").then((data)=>
        {
            const requestbody=data;
            cy.request('POST',"https://reqres.in/api/users",requestbody).then((response)=>
                {
                   expect(response.status).equal(201)
                   expect(response.body. name).equal(requestbody.name)
                   expect(response.body.job).equal(requestbody.job)

                   expect(response.body).has.property("name",requestbody.name)
                   expect(response.body).has.property("job",requestbody.job)
                  
               })

        })
    })
})