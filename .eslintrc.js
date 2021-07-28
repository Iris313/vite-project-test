/*
 * @Descripttion:
 * @Author: wmq
 * @Date: 2021-07-27 13:37:48
 * @LastEditTime: 2021-07-28 16:41:32
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    //   "@vue/typescript/recommended",
    "@vue/prettier",
    //   "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    //   ecmaVersion: 2020
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    //   '@typescript-eslint/no-var-requires': 0,
    //   '@typescript-eslint/explicit-module-boundary-types': 0,
    //   '@typescript-eslint/no-unused-vars': 0
  },
};
