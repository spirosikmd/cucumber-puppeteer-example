# cucumber-puppeteer-example

Write UI tests using Gherkin, Cucumber, and Puppeteer. This project is an example project on how to use [cucumber](https://github.com/cucumber/cucumber-js) with [puppeteer](https://github.com/GoogleChrome/puppeteer). It uses the [React TodoMVC](http://todomvc.com/examples/react/#/) project as a test UI.

Run `yarn`/`npm install` to get the dependencies and then run `yarn test`/`npm test` to execute the UI tests.

The test command will generate a JSON report file. You can use the `yarn test:report`/`npm run test:report` command to check the HTML report.

## Headless

The tests run by default in headless mode. To launch a full version of Chromium:

```
$ HEADLESS=false yarn test
```

## Timeouts

The `http://todomvc.com/examples/react/#/` might be slow. To avoid any kind of timeout erros, in [world.js](./features/support/world.js) there is an example of how to [change the default timeout](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/timeouts.md#timeouts).
