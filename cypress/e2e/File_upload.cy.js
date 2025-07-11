import 'cypress-file-upload';

describe('File Upload on the-internet.herokuapp.com', () => {
  it('should upload a file and confirm success', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');

    // Attach file from fixtures
    const fileName = 'example.json';
    cy.get('#file-upload').attachFile(fileName);

    // Click the upload button
    cy.get('#file-submit').click();

    // Assert success
    cy.contains('File Uploaded!').should('be.visible');
    cy.get('#uploaded-files').should('contain.text', 'example.json');
  });
});

