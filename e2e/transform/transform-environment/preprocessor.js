module.exports = {
  process(src, path) {
    const code = `${src}
    module.exports = CustomEnvironment;`;
    return code;
  },
};
