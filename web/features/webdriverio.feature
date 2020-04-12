Feature: Go to getting started page

   Scenario: Validate that getting started title is visible 
    Given I am in webdriverio home page
    When I go to getting started page
    Then I validate that getting stated page is visible