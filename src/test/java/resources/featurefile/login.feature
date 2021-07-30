Feature: Login Functionality



  As a user I want to login into virgingames website

@Smoke
  Scenario Outline: User should see error message displayed with invalid credentials.
    Given I am on Home page
    When I click on login link
    And I enter "<userName>" in username field
    And I enter "<password>" in password field
    And I click on login button
    Then I should see error message "<errorMessage>"
    Examples:
      | userName     | password   | errorMessage                                                              |
      | primetime    | password04 | Please try again, your username/email or password has not been recognised |
#      | abc          | abc123     | Please try again, your username/email or password has not been recognised |
#      | xyzabcd123   | westend    | Please try again, your username/email or password has not been recognised |
#      | primestudent | timeline   | Please try again, your username/email or password has not been recognised |
#      |              |            | Please try again, your username/email or password has not been recognised |