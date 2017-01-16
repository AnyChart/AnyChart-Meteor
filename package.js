Package.describe({
  name: 'anychart:anychart-meteor',
  summary: 'The package provides a simple way to pull in AnyChart component in Meteor',
  version: '0.0.1',
  git: 'https://github.com/AnyChart/AnyChart-Meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // api.versionsFrom('1.4.2.3');
  api.mainModule('anychart-meteor.js', 'client');
  api.export('anychart', 'client');
});

Npm.depends({
  'anychart': '7.12.0'
});