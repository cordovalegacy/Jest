import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/password_checker";
const baseTestDir = "<rootDir>/src/test/password_checker";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  // watch: true,
  //collect coverage gives us percentage of app tested (also creates a coverage report)
  // /* istanbul ignore next */ <- this comment is how we can ignore files or code blocks
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`]
};

export default config;
