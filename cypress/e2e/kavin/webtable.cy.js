describe('should handle webtable', () => {
    beforeEach('Login',()=>{
        cy.visit("http://makeseleniumeasy.com/2020/05/09/storing-web-table-with-pagination-data-into-list-of-map-java/");
    })
    it('check number of row & coloumn', () => {
        cy.get("#dtBasicExample>tbody>tr").should('have.length','10');
        cy.get("#dtBasicExample>thead>tr>th").should('have.length','6');   
    })
    it('Get cell data from specific row & coloumn', () => {
        cy.get("body > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > main:nth-child(1) > article:nth-child(1) > div:nth-child(3) > pre:nth-child(17) > div:nth-child(6) > div:nth-child(1) > table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3)")
        .should('have.text','New York')
    })
    it('Read all the data in particular page', () => {
        cy.get("#dtBasicExample > tbody > tr").each( ($row, index, $rows)=>{
        cy.wrap($row).within( ()=>{
        cy.get("td").each( ($col, index, $cols)=>{
           cy.log($col.text());
            })
        })
      })
    })
    it('pagination', () => {
     let totalPages=5;
      for(let p=1;p<=totalPages;p++){
       if(totalPages>1){
         cy.log("Active page is===>"+p);
         cy.get("div[class='entry-content'] span a:nth-child("+p+")").click();
        }
      }   
    })
  })