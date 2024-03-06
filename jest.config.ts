import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  // watch: true,
  //collect coverage gives us percentage of app tested (also creates a coverage report)
  // /* istanbul ignore next */ <- this comment is how we can ignore files or code blocks
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/app/**/*.ts"],
};

export default config;
