Feature: Manage todo list

  Scenario: add todo
    Given I have the todo list
      | Label             |
      | Clean the kitchen |
    When I add the todo item "Prepare dinner" to the list
    Then I expect the todo list to have 2 items
    And I expect the todo item 2 to be "Prepare dinner"

  Scenario: delete todo
    Given I have the todo list
      | Label             |
      | Clean the kitchen |
      | Prepare dinner    |
    When I press the delete button of the todo item 1
    Then I expect the todo list to have 1 item
    And I expect the todo item 1 to be "Prepare dinner"