import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the login modal window', () => {
    cy.visit ('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });

        cy.get('button.header_signin').click();
});

When('I enter {string} username', (username) => {
    cy.get('#signinEmail').type(username);
})

When('I enter {string} password', (password) => {
    cy.get('#signinPassword').type(password);
})

When('I click Login button', () => {
    cy.get('.modal-footer>button.btn-primary').click();
})

Then('I expect to be on Garage tab', () => {
    cy.get('div>h1').contains('Garage');
})

When('I click on the Email field', () => {
    cy.get('#signinEmail').click();
})

Then('I see the Login button not active', () => {
    cy.get('.modal-footer>button.btn-primary').should('be.disabled');
})

Then('I see error message with text "Wrong email or password"', () => {
    cy.get('.alert-danger').should('have.text', 'Wrong email or password');
})