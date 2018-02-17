const { Given, When, Then, After, Before } = require("cucumber");

Before(async function(testCase) {
  return await this.openTodoPage();
});

After(async function() {
  return await this.closeTodoPage();
});

Given("I have a todo {string}", function(todo) {
  this.setTodo(todo);
});

When("I write the todo in the input field", async function() {
  return await this.writeTodo();
});

When("I click enter", async function() {
  return await this.submit();
});

Then("I expect to see the todo in the list", async function() {
  return await this.checkTodoIsInList();
});
