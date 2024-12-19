describe("Api testing",()=>{
    it("Api for get method",()=>{
        cy.request("Get","https://reqres.in/api/users?page=2/id=12").then((code)=>{
            expect(code.status).to.equal(200);
            expect(code.body.data[1].id).to.equal(8);
            expect(code.body.data[1].first_name).to.equal("Lindsay");
            })
    })
    it("Api for creating resource",()=>{
        let value={
            "name": "morpheus",
            "job": "leader"
          }
        cy.request("Post","https://reqres.in/api/users",value).then((code1)=>{
            expect(code1.status).to.equal(201);
            expect(value.name).to.equal("morpheus");
            expect(value.job).to.equal("leader"); })
    })
    it("Api for updating resources",()=>{
        const value1={
             "name": "Mohan",
             "job": "QA"
  }
   cy.request("Put","https://reqres.in/api/users/2?id=764",value1).then((code2)=>{
            expect(code2.status).to.equal(200);
            expect(value1.name).to.equal("Mohan");
            expect(value1.job).eq("QA");
        })
})
it("Api for partial updating resources",()=>{
    const value2={
         "name": "RajMohan",
         
}
cy.request("Put","https://reqres.in/api/users/2?id=764",value2).then((code2)=>{
        expect(code2.status).to.equal(200);
        expect(value2.name).to.equal("RajMohan");
        
    })
})
it.skip("Delete the resources in api",()=>{
    cy.request("Put","https://reqres.in/api/users/2?id=764").then((del)=>{
        expect(del.status).to.equal(204);
    })
})
it("Get the data in server",()=>{
    cy.request("Get","https://dummyapi.online/api/movies").then((response)=>{
        expect(response.status).to.equal(200);
        })
})
it("Get the data",()=>{
cy.request("Get","https://api.restful-api.dev/objects").then((value)=>{
    expect(value.status).to.equal(200);
})

})
})