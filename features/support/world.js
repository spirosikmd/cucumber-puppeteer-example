import { expect } from "chai";
import { setWorldConstructor, setDefaultTimeout } from "cucumber";
import puppeteer from "puppeteer";

const PAGE = "http://todomvc.com/examples/react/#/";
const ENTER_EVENT = "Enter";
const INPUT_SELECTOR = "section input";
const TODO_ITEMS_SELECTOR = "ul.todo-list li";
const todoItemSelector = index => `ul.todo-list li:nth-child(${index})`;
const todoItemLabelSelector = index => `${todoItemSelector(index)} label`;
const deleteButtonSelector = index => `${todoItemSelector(index)} button`;

const HEADLESS = process.env.HEADLESS !== "false";

setDefaultTimeout(30 * 1000);

class TodoWorld {
  async openTodoPage() {
    this.browser = await puppeteer.launch({ headless: HEADLESS });
    this.page = await this.browser.newPage();
    await this.page.goto(PAGE);
  }

  async writeTodo(todo) {
    await this.page.waitForSelector(INPUT_SELECTOR);
    this.inputElement = await this.page.$(INPUT_SELECTOR);
    await this.inputElement.type(todo);
    await this.inputElement.press(ENTER_EVENT);
  }

  async checkNumberOfTodos(number) {
    const todoItemCount = await this.page.$$eval(
      TODO_ITEMS_SELECTOR,
      items => items.length
    );
    expect(todoItemCount).to.eql(parseInt(number));
  }

  async checkTodoIsInList(todoIndex, todo) {
    const foundTodo = await this.page.$eval(
      todoItemLabelSelector(todoIndex),
      el => el.textContent.trim()
    );
    expect(foundTodo).to.eql(todo);
  }

  async deleteTodo(todoIndex) {
    await this.page.hover(todoItemSelector(todoIndex));
    await this.page.click(deleteButtonSelector(todoIndex));
  }

  async closeTodoPage() {
    await this.browser.close();
  }
}

setWorldConstructor(TodoWorld);
