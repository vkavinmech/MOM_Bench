


describe("handling the tables",()=>
{
    it("handling static html table",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("table[name='BookTable']").should('be.visible').and('exist')
        cy.get("table[name='BookTable']>tbody>tr").should('have.length','7')
        cy.get("table[name='BookTable']>tbody>tr>th").should('have.length','4')
        cy.get("table[name='BookTable']>tbody>tr:nth-child(5)>td:nth-child(2)")
        .contains("Mukesh")
        cy.get("table[name='BookTable']>tbody>tr>td:nth-child(2)").each(($e, index, $list)=>
        {
            const author =$e.text()
            if(author.includes("Animesh")){
                cy.get("table[name='BookTable']>tbody>tr>td:nth-child(1)").eq(index)
                .then(function(name)
            {
                const bookname=name.text()
                expect(bookname).to.eq("Learn JS")
                cy.log(bookname)
                
            })
            }
        })
        cy.get("table[name='BookTable']>tbody>tr>td:nth-child(4)").each(($p, index, $list)=>
        {
            const price =$p.text()
            if(price.includes("2000"))
            {
                cy.get("table[name='BookTable']>tbody>tr>td:nth-child(3)").eq(index)
                .then(function(subject)
            {
                const subjectname=subject.text()
                expect(subjectname).to.eq("JAVA")
                cy.log(subjectname)
                
            })
            cy.get("table[name='BookTable']>tbody>tr>td:nth-child(2)").eq(index)
            .then(function(Author)
            {
                const authorname=Author.text()
                expect(authorname).to.eq("Amod")
                cy.log(authorname)
            })
            
            

            }
        })
        
    })
})