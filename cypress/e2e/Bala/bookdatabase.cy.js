describe("Database Testing", () => {

    it("Create a Book table", () => {
      const createBookTableQuery = `
        CREATE TABLE IF NOT EXISTS BOOK (
          TITLE VARCHAR(30) NOT NULL,
          AUTHOR VARCHAR(30),
          GENRE VARCHAR(30)
        );
      `;
      cy.task('queryDb', createBookTableQuery).then((result) => {
        console.log(result);
        expect(result).to.not.be.null;
        expect(result.affectedRows).to.equal(0); 
      });
    });
  
    it("Insert values into the Book table", () => {
      const insertBookQuery = `
        INSERT INTO BOOK (TITLE, AUTHOR, GENRE) 
        VALUES 
          ('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction'),
          ('1984', 'George Orwell', 'Dystopian'),
          ('To Kill a Mockingbird', 'Harper Lee', 'Classic'),
          ('Atomic Habits' , 'James Clear' , 'Self Help Book'),
          ('Cant Hurt Me', 'David Goggins','Self Help Book'),
          ('Twisted Love','Ana Huang' , 'Novel'),
          ('Verity' , 'Collen Hoover' , 'Thriller'),
          ('Haunting Adeline' , 'HD Carlton' , 'Fiction'),
          ('Surrounded by Physchopaths', 'Thomas Erikson','Physchology');
      `;
      cy.task('queryDb', insertBookQuery).then((result) => {
        console.log(result);
        expect(result).to.not.be.null;
       // expect(result.affectedRows).to.equal(9); 
      });
    });
  
    it("Verify data in the Book table", () => {
      const selectBookQuery = "SELECT * FROM BOOK";
      cy.task('queryDb', selectBookQuery).then((result) => {
        console.log(result);
       // expect(result).to.have.lengthOf(9); 
        expect(result[0].TITLE).to.equal('The Great Gatsby'); 
        expect(result[1].TITLE).to.equal('1984')
        expect(result[2].TITLE).to.equal('To Kill a Mockingbird')
      });
    });

    it("Create a Movie table", () => {
      const createMovieTableQuery = `
        CREATE TABLE IF NOT EXISTS MOVIE (
          TITLE VARCHAR(100) NOT NULL,
          DIRECTOR VARCHAR(50),
          GENRE VARCHAR(50),
          COUNTRY VARCHAR(50)
        );
      `;
      cy.task('queryDb', createMovieTableQuery).then((result) => {
        console.log(result);
        expect(result).to.not.be.null;
        expect(result.affectedRows).to.equal(0); 
      });
    });
  
    it("Insert values into the Movie table", () => {
      const insertMovieQuery = `
        INSERT INTO MOVIE (TITLE, DIRECTOR, GENRE, COUNTRY) 
        VALUES 
          ('The Shawshank Redemption', 'Frank Darabont', 'Drama', 'USA'),
          ('The Godfather', 'Francis Ford Coppola', 'Crime', 'USA'),
          ('The Dark Knight', 'Christopher Nolan', 'Action', 'USA'),
          ('Forrest Gump', 'Robert Zemeckis', 'Drama', 'USA'),
          ('Inception', 'Christopher Nolan', 'Sci-Fi', 'USA'),
          ('Parasite', 'Bong Joon-ho', 'Thriller', 'South Korea'),
          ('Amélie', 'Jean-Pierre Jeunet', 'Romance', 'France'),
          ('The Lion King', 'Roger Allers', 'Animation', 'USA'),
          ('Spirited Away', 'Hayao Miyazaki', 'Animation', 'Japan'),
          ('City of God', 'Fernando Meirelles', 'Crime', 'Brazil');
      `;
      cy.task('queryDb', insertMovieQuery).then((result) => {
        console.log(result);
        expect(result).to.not.be.null;
        //expect(result.affectedRows).to.equal(30); 
      });
    });
  

    it("Verify data in the Movie table", () => {
      const selectMovieQuery = "SELECT * FROM MOVIE";
      cy.task('queryDb', selectMovieQuery).then((result) => {
        console.log(result);
       // expect(result).to.have.lengthOf(30); 
        expect(result[0].TITLE).to.equal('The Shawshank Redemption'); 
        expect(result[1].TITLE).to.equal("The Godfather");
        expect(result[2].TITLE).to.equal("The Dark Knight")
        expect(result[0].DIRECTOR).to.equal("Frank Darabont")
        expect(result[1].DIRECTOR).to.equal("Francis Ford Coppola")
        expect(result[5].COUNTRY).to.equal('France'); 
      });
    });
  
    it("Update the COUNTRY in the Movie table", () => {
      const updateCountryQuery = `
        UPDATE MOVIE
        SET COUNTRY = 'United Kingdom'
        WHERE TITLE = 'The Dark Knight';
      `;
      cy.task('queryDb', updateCountryQuery).then((result) => {
        console.log(result);
        expect(result).to.not.be.null;
        //expect(result.affectedRows).to.equal(3); 
      });
    });
  
    
    it("Verify updated data in the Movie table", () => {
      const selectUpdatedMovieQuery = "SELECT * FROM MOVIE WHERE TITLE = 'The Dark Knight'";
      cy.task('queryDb', selectUpdatedMovieQuery).then((result) => {
        console.log(result);
        //expect(result).to.have.lengthOf(1); 
        expect(result[0].COUNTRY).to.equal('United Kingdom'); 
      });
    });
    it("Delete a record from the Movie table", () => {
        const deleteMovieQuery = `
            DELETE FROM MOVIE
            WHERE TITLE = 'Parasite';
        `;
        cy.task('queryDb', deleteMovieQuery).then((result) => {
            console.log(result);
            expect(result).to.not.be.null;
        });
    });

    it("Verify the deleted record is no longer in the Movie table", () => {
        const selectDeletedMovieQuery = "SELECT * FROM MOVIE WHERE TITLE = 'Parasite'";
        cy.task('queryDb', selectDeletedMovieQuery).then((result) => {
            console.log(result);
            expect(result).to.have.lengthOf(0); 
        });
    });
});
  
  
  