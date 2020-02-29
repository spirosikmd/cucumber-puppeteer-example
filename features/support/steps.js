import { After, Before, Given, Then, When } from "cucumber";

Before(async function(testCase) {
  return await this.openTodoPage();
});

After(async function() {
  return await this.closeTodoPage();
});

Given("I have the todo list", async function(dataTable) {
  return await Promise.all(
    dataTable.rows().map(async ([todo]) => {
      await this.writeTodo(todo);
    })
  );
});

When(/^I add the todo item "(.*)" to the list$/, async function(todo) {
  return await this.writeTodo(todo);
});

Then(/^I expect the todo list to have (\d+) items?$/, async function(number) {
  return await this.checkNumberOfTodos(number);
});

Then(/^I expect to see the todo item "(.*)" in the todo list$/, async function(
  todo
) {
  return await this.checkTodoIsInList(todo);
});
