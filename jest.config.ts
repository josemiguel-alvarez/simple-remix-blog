export default {
  testRegex: "app/tests/(.*)((\\.|/*.)(spec))\\.tsx?$",
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/app/$1",
    "\\.(webp)$": "<rootDir>/app/tests/mocks/image.js",
  },
  testEnvironment: "jsdom",
};
