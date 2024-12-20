describe("http request",()=>
{
    it("get request",()=>
    {
        cy.request('GET',"https://jsonplaceholder.typicode.com/posts/7")
        .its("status")
        .should('equal',200)
    })
    it(" post request",()=>
    {
       var postdata = {
             "title":"the test data",
             "body":"the json formatted data ",
             "userId ":1
 }
 cy.request('POST',"https://jsonplaceholder.typicode.com/posts/",postdata).then((responsecode)=>
  {
    expect(responsecode.status).equal(201)
    expect(responsecode.body.title).equal(postdata.title)
 })

 })
 it("updating the data",()=>
{
    var updatedata={
        body:"this is the updated data od id 101",
        id:"101",
        title:"updated data",
        userId :"1"
    }
    cy.request('PUT',"https://jsonplaceholder.typicode.com/posts/7",updatedata).then((responsecode)=>
     {
        expect(responsecode.status).equal(200)
        expect(responsecode.body.title).equal(updatedata.title)
    })
})
})