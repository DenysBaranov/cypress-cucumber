Feature: Different logins

    Scenario: Login with the correct email and password
    Given I am on the login modal window
    When I enter "mail123@gmail.com" username
    When I enter "Test1234" password
    When I click Login button
    Then I expect to be on Garage tab

    Scenario: Login with empty fields
    Given I am on the login modal window
    Then I see the Login button not active

    Scenario: Login with incorrect username and password
    Given I am on the login modal window
    When I enter "incorrect@mail.com" username
    When I enter "12345" password
    When I click Login button
    Then I see error message with text "Wrong email or password"

