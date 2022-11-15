describe('Testing Wikipedia', () => {
    it('I can search for content', () => {
      cy.visit('https://malangsnack.000webhostapp.com/index.php?page=login');
      cy.get("input[name='email']").type('welson@gmail.com');
      cy.get("input[name='password']").type('123456').type('{enter}');
      cy.get("button[class='swal-button swal-button--confirm']").type('{enter}');
    });
  });
