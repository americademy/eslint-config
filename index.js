module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  plugins: ["prettier"],

  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    strict: 0,
    "no-undef": 2,

    "prettier/prettier": "warn",
  },

  env: {
    es6: true,
  },
};
