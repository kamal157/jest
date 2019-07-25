const NodeEnvironment = require('jest-environment-node');

// eslint-disable-next-line no-unused-vars
class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }
}
