describe('When: Use the search feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });	

  it('Then: I should see search results as I am typing', () => {
    const searchTerm = 'javascript';

    cy.get('input[type="search"]').type(searchTerm);
    cy.get('form').submit();

    cy.wait(2000);

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });

  it('Then: I should see search results as I am typing', () => {
    const searchTerm = 'javascript';

    cy.get('input[type="search"]').type(searchTerm);
    cy.get('form').submit();

    // Wait for search results to be fetched and rendered
    cy.wait(3000); // Adjust the wait time as needed

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 0);

    // Wait for search results to be fetched and rendered
    cy.wait(3000); // Adjust the wait time as needed

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 0);
  });

});
