describe('Testing Wikipedia', () => {
  it('A user can switch languages', () => {
    cy.visit('https://wikipedia.org');
    cy.contains('Read Wikipedia in your language');
    cy.get('#js-lang-list-button').click();
    cy.contains('Jawa').click();
    cy.url().should(
      'equal',
      'https://jv.wikipedia.org/wiki/Wikip%C3%A9dia:Pendhapa',
    );
    cy.contains('Sugeng rawuh');
  });
});