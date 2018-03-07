# eslint-config-codeverse

#### :white_check_mark: An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [Americademy](https://www.americademy.com)

## Install

Install this npm package into your project.

```bash
npm install eslint-config-standard --save-dev
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.


Add this to your .eslintrc file:

```
{
  "extends": "codeverse"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## Learn more

For the full listing of rules visit [ESLint.org](https://eslint.org/docs/rules/).

## License

MIT. Copyright (c) [Americademy, Inc](https://www.americademy.com).