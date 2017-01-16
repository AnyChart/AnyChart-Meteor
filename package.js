Package.describe({
  name: 'anychart:anychart-meteor',
  version: '0.0.1',
  summary: 'The package provides a simple way to pull in AnyChart component in Meteor.',
  git: 'https://github.com/AnyChart/AnyChart-Meteor',
  documentation: 'README.md',

  //TODO: Remove this on publish.
  testOnly: true,
  debugOnly:true
});

Package.onUse(function(api) {
  // api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('anychart-meteor.js');
});

Npm.depends({
  'anychart': '7.12.0'
});