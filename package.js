Package.describe({
  name: 'anychart:anychart',
  summary: 'The package provides a simple way to pull in AnyChart component in Meteor',
  version: '1.4.3',
  git: 'https://github.com/AnyChart/AnyChart-Meteor',
  documentation: 'README.md'
});

Npm.depends({
  'anychart': '8.2.0'
});

Package.onUse(function(api) {
  api.use('modules@0.7.7');
  api.mainModule('anychart-meteor.js', 'client');
  api.export('anychart', 'client');
});

