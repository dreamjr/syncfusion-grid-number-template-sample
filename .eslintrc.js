// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ["plugin:vue/essential"],
  plugins: ["vue"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  rules: {
    "curly": "error",
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": ["error"]
  },
  root: true
}
