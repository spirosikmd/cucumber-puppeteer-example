Feature: Manage todo list

  Scenario: add todo
    Given I have the todo list
      | Label             |
      | Clean the kitchen |
    When I add the todo item "Prepare dinner" to the list
    Then I expect the todo list to have 2 items
    And I expect to see the todo item "Prepare dinner" in the todo list
