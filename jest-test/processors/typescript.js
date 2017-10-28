const tsc = require('typescript');
const tsConfiguration = tsc.readJsonConfigFile(
  './tsconfig.json',
  tsc.sys.readFile,
);

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(src, tsConfiguration.compilerOptions, path, []);
    }
    return src;
  },
};
