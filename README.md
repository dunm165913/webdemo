# be

## Migrate Database

```bash
$ npm i
$ npx sequelize db:migrate
```
Note: Change variable enviroment (plugin.js, config.json, config.default.js)


## QuickStart

```bash
$ npm install
$ npm test
```

publish your framework to npm, then change app's dependencies:

```js
// {app_root}/index.js
require('be').startCluster({
  baseDir: __dirname,
  // port: 7001, // default to 7001
});

```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

