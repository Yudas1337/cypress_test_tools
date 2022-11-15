describe('Testing Ruang Kelas', () => {
  it('I can search for content', () => {
    cy.visit('http://jti.polinema.ac.id/ruangkelas/');
    cy.get("input[type='search']").type('RT 10');
    cy.get("button[class='detail-ruang']").click();
  });
});