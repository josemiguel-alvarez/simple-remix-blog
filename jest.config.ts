export default {
  testRegex: "((\\.|/*.)(spec))\\.tsx?$",
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/app/$1",
  },
  testEnvironment: "jsdom",
};
