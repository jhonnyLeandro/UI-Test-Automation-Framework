Feature: check web doc functionality

   Scenario: Validate that page titles are visible 
    Given I am in webdriverio home page
    When I go to getting started page
    Then I validate that getting started page is visible
    When I go to API doc Page
    Then I validate that api page is visible
    When I go to Help Page
    Then I validate that help page is visible