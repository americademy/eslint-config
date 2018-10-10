Codeverse Linter Configuration
==============================

#### :white_check_mark: An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [Americademy](https://www.americademy.com)

Don't be afraid to open an Issue about anything that annoys you; this is here to *support* us, not
get in our way.

## Install

This package is a transitive dependency of our usual `@codeverse/gulp-registry` package; so if
you've a Gulpfile, you probably *don't need to install this manually*. Otherwise,

```sh
npm install --save-dev @codeverse/eslint-config
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.


Add this to your `.eslintrc.json` (or equivalent) file:

```json5
{
  "extends": "@codeverse"
}
```

*Note: We omitted the `eslint-config` suffix here since it is automatically assumed by ESLint.* You
can override settings from this shareable config by adding them directly into your
`.eslintrc` file.

Next, add a `.prettierc.js`:

```js
module.exports = require('@codeverse/eslint-config/prettierrc')
```

Finally, if you're planning on using `// @flow` to type a file, download the appropriate version of
the `.flowconfig`. (Unfortunately, this file must be versioned manually — it should be updated when
this `eslint-config` package is updated in a given project.)

```sh
cec_ver="$(npm view "@codeverse/eslint-config@$(\
   npx npe devDependencies.@codeverse/eslint-config)" version)" && \
curl -JO -fsSL --proto-redir -all,https \
   "https://raw.githubusercontent.com/americademy/eslint-config/$cec_ver/.flowconfig"
```


## Learn more

For the full listing of rules visit [ESLint.org](https://eslint.org/docs/rules/). Avoid stylistic
rules that may conflict with Prettier; we only use ESLint for its semantic rules.

## License

MIT. Copyright (c) [Americademy, Inc](https://www.americademy.com).
