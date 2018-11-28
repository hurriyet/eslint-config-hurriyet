# eslint-config-hurriyet

> Hürriyet's ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) 

## Installation
This package needs [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) and [babel-eslint](https://www.npmjs.com/package/babel-eslint) packages as peer dependencies.
```
$ npm install --save-dev eslint @hurriyet/eslint-config-hurriyet eslint-plugin-import babel-eslint
```
or you can use Yarn
```
$ yarn add eslint @hurriyet/eslint-config-hurriyet eslint-plugin-import babel-eslint --dev
```

## Usage

Once the `@hurriyet/eslint-config-hurriyet` package is installed, you can use it by specifying `@hurriyet/eslint-config-hurriyet` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@hurriyet/eslint-config-hurriyet",
  "rules": {
    // Additional, per-project rules...
  }
}
```