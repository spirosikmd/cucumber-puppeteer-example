const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

const PAGE = "http://todomvc.com/examples/react/#/";

class TodoWorld {
  constructor() {
    this.todo = "";
  }

  async openTodoPage() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
    await this.page.goto(PAGE);
  }

  setTodo(todo) {
    this.todo = todo;
  }

  async writeTodo() {
    const inputSelector = "section input";
    await this.page.waitForSelector(inputSelector);
    this.inputElement = await this.page.$(inputSelector);
    await this.inputElement.type(this.todo);
  }

  async submit() {
    await this.inputElement.press("Enter");
  }

  async checkTodoIsInList() {
    const todoSelector = "ul.todo-list li label";
    await this.page.waitForSelector(todoSelector);
    const todo = await this.page.evaluate(
      todoSelector => document.querySelector(todoSelector).innerText,
      todoSelector
    );
    expect(this.todo).to.eql(todo);
  }

  async closeTodoPage() {
    await this.browser.close();
  }
}

setWorldConstructor(TodoWorld);
