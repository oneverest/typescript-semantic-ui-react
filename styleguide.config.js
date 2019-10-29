const path = require('path');

module.exports = {
  require: [
    path.join(__dirname, '/build/static/css/2.22b9feb7.chunk.css'),
    path.join(__dirname, '/build/static/css/main.fc59b05f.chunk.css'),
  ],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'UI Components',
      components: 'src/shared/**/*.tsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
    }
  ]
};
