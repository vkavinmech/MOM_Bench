describe('JSONPlaceholder API Tests', () => {
    let postId;

    it('Create a new post', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'Automate JsonHolder',
                body: 'This is the body of the post',
                userId: 1
              }
        })
        .then((response) => {
            expect(response.status).to.eq(201); 
            postId = response.body.userId; 
            expect(response.body).to.have.property('title', 'Automate JsonHolder');
            cy.log(`Created post ID: ${postId}`); 
      });
    });
    it('Get the created post', () => {
      cy.request({
         method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      })
      .then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.have.property('id', postId);
      });
    });
    it('Update the created post', () => {
        cy.request({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            body: {
                title: 'Automate jsonholder',
                body: 'This is the updated body of the post',
                userId: 1
              }
        })
        .then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.have.property('id', postId);
      });
    });
    it('Get the updated post', () => {
        cy.request({
            method: 'GET',
               url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
         })
         .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', postId);
      });
    });
    it('Delete the created post', () => {
      cy.request({
        method: 'DELETE',
           url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        })
        .then((response) => {
            expect(response.status).to.eq(200);
      });
    });
  });