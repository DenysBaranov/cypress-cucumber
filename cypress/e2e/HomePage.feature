Feature: Home page test

    Scenario: Display 5 icons
    Given I am on the Home page
    When I see Contacts block
    Then I see Facebook icon
    Then I see Telegram icon
    Then I see Youtube icon
    Then I see Instagram icon
    Then I see LinkedIn icon

    Scenario: After clicking Sign Up, the registration form opens
    Given I am on the Home page
    When I click on Sign Up button
    Then I see registration form opens

    Scenario: After clicking Sign In, the login form opens
    Given I am on the Home page
    When I click on Sign In button
    Then I see login form opens
