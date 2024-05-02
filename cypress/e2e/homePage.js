import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Home page', () => {
    cy.visit ('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
});

When('I see Contacts block', () => {
    cy.get('div.contacts_socials').should('be.visible');
});

Then('I see Facebook icon', () => {
    cy.get('span.icon-facebook').should('be.visible');
});

Then('I see Telegram icon', () => {
    cy.get('span.icon-telegram').should('be.visible');
});

Then('I see Youtube icon', () => {
    cy.get('span.icon-youtube').should('be.visible');
});

Then('I see Instagram icon', () => {
    cy.get('span.icon-instagram').should('be.visible');
});

Then('I see LinkedIn icon', () => {
    cy.get('span.icon-linkedin').should('be.visible');
});

When('I click on Sign Up button', () => {
    cy.get('button.btn-primary').click();
});

Then('I see registration form opens', () => {
    cy.get('h4.modal-title').should('have.text', 'Registration');
});

When('I click on Sign In button', () => {
    cy.get('button.header_signin').click();
});

Then('I see login form opens', () => {
    cy.get('h4.modal-title').should('have.text', 'Log in');
});