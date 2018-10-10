module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  plugins: ["prettier", "flowtype", "flowtype-errors"],

  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:flowtype/recommended",
  ],
  rules: {
    strict: 0,
    "no-undef": 2,

    "prettier/prettier": "warn",

    "flowtype-errors/show-errors": "error",
    "flowtype-errors/show-warnings": "warn",
  },

  env: {
    es6: true,
  },
};
