Simple authentication lib for [Koa](https://github.com/koajs/koa) based on
[JSON Web Token](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html).

## Installation

```
$ npm install koa-accounts
```

## Example

```js
var koa = require('koa');
var Backend = require('koa-accounts').backendStub;
var acc = require('koa-accounts');
var app = koa();

app.accountOptions = { backend: new Backend(store), secretKey: 'shhh' };
acc(app);

app.use(function *() {
    var token = yield this.acc.create('admin', 'aWeSoMePaSsWord', {});
    this.body = token;
});

```

## Running tests

```
$ make test
```

## Authors

  - [Pavel Silin](https://github.com/fi11)

# License

  MIT
