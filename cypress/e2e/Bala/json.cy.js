describe("api request",()=>
{
    let postId;
    it("GET request",()=>
    {

        cy.request('GET',"https://jsonplaceholder.typicode.com/posts/1").then((response)=>
         {
            expect(response.status).to.equal(200)
            const data = response.body;
            console.log(data)
            expect(data).to.have.property("title")
            expect(data).to.have.property("id")
            expect(data).to.have.property("body")
            expect(data.id).to.equal(1)
            
        })
        
    })
    it("fetching all the resources",()=>
    {
        cy.request("GET","https://jsonplaceholder.typicode.com/posts").then((response)=>
        {
            expect(response.status).to.equal(200)
            console.log(response.body)
            expect(response.body).to.have.length(100);
        })
    })
    it("fetching the user id 1 details ",()=>
    {
        cy.request("GET","https://jsonplaceholder.typicode.com/posts?userId=1").then((response)=>
         {
            expect(response.status).to.equal(200)
            console.log(response.body)
            expect(response.body).to.have.length(10)
            expect(response.body[0]).to.have.property('title');
            expect(response.body[0].id).to.equal(1);
        })

    })
    it("listing nested elements",()=>
    {
        cy.request("GET","https://jsonplaceholder.typicode.com/posts/1/comments").then((response)=>
         {
            expect(response.status).to.equal(200)
            console.log(response.body)
            expect(response.body).to.have.length(5)
            expect(response.body[0]).to.have.property("body")
            expect(response.body[0]).to.have.property("email")
            expect(response.body[0]).to.have.property("id")
            expect(response.body[0]).to.have.property("name")
            expect(response.body[0].name).to.equal("id labore ex et quam laborum")
            expect(response.body[1].name).to.equal("quo vero reiciendis velit similique earum")


        })
    })
    it("creating a resource",()=>
    {
        const data ={
            title: 'james',
             body: 'cameroon',
             userId: 2,
        }
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.typicode.com/posts",
            body: data,
            headers:
            {
                'Content-type': 'application/json; charset=UTF-8',
            }

        }).then((response)=>
        {
            expect(response.status).to.equal(201)
            console.log(response.body)
            expect(response.body.title).to.equal(data.title)
            expect(response.body.body).to.equal(data.body)
            postId=response.body.userId
            console.log(postId)
            
        })
    })
    it("get that created resources",()=>
    {
        cy.request(`GET`,`https://jsonplaceholder.typicode.com/posts/${postId}`).then((response)=>
         {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property("title")
            expect(response.body).to.have.property("body")
        })
    })
    it("updating the resource",()=>
    {
        const updateddata = {
            title: 'Alex',
             body: 'Volkav',
             userId: 3,

        }
        cy.request({
            method:"PUT",
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            body: updateddata,
            headers:
             {
                'Content-type': 'application/json; charset=UTF-8',

            }
        }).then((response)=>
        {
            expect(response.status).to.equal(200)
            console.log(response.body)
        })
    })
    it("patching the resources",()=>
    {
        const patcheddata = {
            title:"mysunshine",
        }
        cy.request({
            method:"PATCH",
            url : `https://jsonplaceholder.typicode.com/posts/${postId}`,
            body: patcheddata,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                }
        }).then((response)=>
        {
            expect(response.status).to.equal(200)
            console.log(response.body)
        })
    })
    it("delete the created resource",()=>
    {
        cy.request('DELETE',`https://jsonplaceholder.typicode.com/posts`).then((response)=>
         {
            expect(response.status).to.equal(200)
        })
    })
    it("try to get the deleted record",()=>
    {
        cy.request("GET",`https://jsonplaceholder.typicode.com/posts`).then((response)=>
         {
            expect(response.status).to.equal(404)
        })
    })
})