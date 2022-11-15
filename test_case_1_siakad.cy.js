

const credentials = {
  user_1: {
    username: '2041720054',
    password: 'YudasM13',
  },
  user_2: {
    username : '2041720053',
    password: '123456'
  }
};

const loginUsingForm = (credentials) => {
    // Enter username and password in form inputs
    cy.get("input[name=username]").type(credentials.username);
    cy.get("input[name=password]").type(credentials.password).type("{enter}"); // '{enter}' submits the form

}

describe('Checks User Login', () => {
  beforeEach('Log in the user', () => {
     cy.visit("http://siakad.polinema.ac.id");
  });

  it('correct username and password', () => {
    loginUsingForm(credentials.user_1);
    cy.location("pathname").should("include", "/beranda");
  });

  it('wrong username and password', () => {
    loginUsingForm(credentials.user_2);
    cy.location("pathname").should("not.include", "/beranda");
  });
})