@run
Feature: register to app
  Scenario:user register to app
    Given user navigated to the application
    When  entered email id
    Then click next
    And  entered username
    And entered password
