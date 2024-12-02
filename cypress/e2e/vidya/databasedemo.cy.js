describe('Database Tests', () => {
    it('should retrieve users from the database', () => {
        cy.task('queryDb', 'SELECT * FROM users').then((users) => {
            expect(users).to.have.length(2);
            expect(users[0]).to.have.property('username');
            expect(users[0]).to.have.property('email');
        });
    });

    it('should insert a new user and then delete it', () => {
        const username = 'testuser_' + Date.now();
        cy.task('queryDb', `INSERT INTO users (username, email) VALUES ('${username}', '${username}@example.com')`)
            .then(() => {
                return cy.task('queryDb', `SELECT * FROM users WHERE username = '${username}'`);
            })
            .then((users) => {
                expect(users).to.have.length(1);
                expect(users[0].username).to.equal(username);

                // Delete the user
                return cy.task('queryDb', `DELETE FROM users WHERE username = '${username}'`);
            })
            .then(() => {
                return cy.task('queryDb', `SELECT * FROM users WHERE username = '${username}'`);
            })
            .then((users) => {
                expect(users).to.have.length(0);
            });
    });

    it('should update a user', () => {
        const username = 'updateuser_' + Date.now();
        cy.task('queryDb', `INSERT INTO users (username, email) VALUES ('${username}', '${username}@example.com')`)
            .then(() => {
                const newEmail = 'newemail_' + Date.now() + '@example.com';
                return cy.task('queryDb', `UPDATE users SET email = '${newEmail}' WHERE username = '${username}'`);
            })
            .then(() => {
                return cy.task('queryDb', `SELECT * FROM users WHERE username = '${username}'`);
            })
            .then((users) => {
                expect(users).to.have.length(1);
                expect(users[0].email).to.include('newemail_');

                // Clean up
                return cy.task('queryDb', `DELETE FROM users WHERE username = '${username}'`);
            });
    });
});
