describe('Database Test in Cypress', () => {
  it('should retrieve the data from the database', () => {
    cy.task('READFROMDB',{
      dbConfig: Cypress.config('DB'),
      sql: 'select * from "users"'
    }).then((result)=>{
      cy.log(result.rows);
      cy.log(result.rows[0].email);
      cy.log(result.rows[0].name);
    })
  })
  it('should insert a new record into the database', () => {
        const insertSql = `INSERT INTO "users" (id,name, email) VALUES (5,'Maha', 'maha@gmail.com')`;
        cy.task('INSERTINTODB', {
          dbConfig: Cypress.config('DB'),
          sql: insertSql
        }).then((result) => {
          console.log(result);
          expect(result.rowCount).to.equal(1); 
        });
      });
    it.only('should update a record in the database', () => {
        const updateSql = `UPDATE "users" SET name = 'Maga' WHERE id = 5`;
        cy.task('UPDATEINDB', {
          dbConfig: Cypress.config('DB'),
          sql: updateSql
        }).then((result) => {
          console.log(result.rows);
          expect(result.rowCount).to.equal(1);
        });
      });
     it.only('should delete a record from the database', () => {
        const deleteSql = `DELETE FROM "users" WHERE id = 5`;
        cy.task('DELETEFROMDB', {
          dbConfig: Cypress.config('DB'),
          sql: deleteSql
        }).then((result) => { 
          console.log(result);
          expect(result.rowCount).to.equal(1); 
        });
      });
});