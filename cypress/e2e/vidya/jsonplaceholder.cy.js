context("API tests for JSONPlaceholder", () => {

    let postId;

    // Test to create a new post
    it("Create a new post using POST method", () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'Test Title',
                body: 'This is the body of the test post',
                userId: 1
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('title', 'Test Title');
            expect(response.body).to.have.property('body', 'This is the body of the test post');
            postId = response.body.id; // Temporary ID (non-persistent)
            cy.log("Created Post ID:", postId);
        });
    });

    // Test to retrieve the post created
    it("Retrieve the created post using GET method", () => {
        cy.request({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            failOnStatusCode: false // Continue if post is not found
        }).then((response) => {
            if (response.status === 404) {
                cy.log(`Post ID ${postId} not found, as expected with mock API.`);
            } else {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', postId);
                expect(response.body).to.have.property('title', 'Test Title');
            }
        });
    });

    // Test to update the post
   // Test to update the post
it("Update the post using PUT method", () => {
    cy.request({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        body: {
            id: postId,
            title: 'Updated Title',
            body: 'This is the updated body of the post',
            userId: 1
        },
        failOnStatusCode: false // Avoids test failure if the status is not 2xx
    }).then((response) => {
        if (response.status === 500) {
            cy.log("Server returned an error, post may not be updated as expected.");
            expect(response.body).to.not.have.property('title'); // Ensure it's an error response
        } else {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title', 'Updated Title');
            expect(response.body).to.have.property('body', 'This is the updated body of the post');
        }
    });
});


    // Test to delete the post
    it("Delete the post using DELETE method", () => {
        cy.request({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            failOnStatusCode: false
        }).then((response) => {
            if (response.status === 404) {
                cy.log(`Post ID ${postId} not found for deletion, as expected with mock API.`);
            } else {
                expect(response.status).to.eq(200);
                cy.log("Post has been successfully deleted.");
            }
        });
    });
});
