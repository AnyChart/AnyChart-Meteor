[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://www.anychart.com)

AnyChart Meteor Package
=========

The package provides a simple way to pull in AnyChart component in Meteor.

## Table of Contents
* [Quick start](#quick-start)
* [Demo overview](#demo-overview)
* [Contacts](#contacts)
* [Links](#links)
* [License](#license)


## Quick start
Following console commands allow to create a Meteor Application 
with the AnyChart component pulled in.
```sh
$ meteor create sample-app
$ cd sample-app
$ meteor npm install
$ meteor add anychart:anychart
$ meteor
```

After `meteor add anychart:anychart` command is executed,
`anychart` object becomes available in your project.

## Demo overview
Here is a [Simple Integration Demo](https://github.com/anychart-integrations/meteor-simple-demo)
with the step-by-step guide of how to work with AnyChart component in Meteor.
 
#### /data/DataSource.js
Provides an imitation of real data to be used as data source for demo.
Since the DataSource is declared and exported, it can be used on the client.
```javascript
export const DataSource = new Meteor.Collection('dataSource');

if(Meteor.isClient) {
  Meteor.startup(function() {
    if (!DataSource.find({}).fetch().length) {
      DataSource.insert({x: 'Department Stores', value: 6371664});
      DataSource.insert({x: 'Discount Stores', value: 7216301});
      DataSource.insert({x: 'Men\'s/Women\'s Stores', value: 1486621});
      DataSource.insert({x: 'Juvenile Specialty Stores', value: 786622});
      DataSource.insert({x: 'All other outlets', value: 900000});
    }
  });
}
```


#### /client/main.js
Gets data from DataSource and creates an AnyChart Pie chart using
a global `anychart` object added to application with 
`meteor add anychart:anychart` command.
```javascript
import { DataSource } from '../data/DataSource';
import { Template } from 'meteor/templating';
import './container.html';

var chart;

Template.acTemplate.rendered = function() {
  /*
    Get container for chart.
    It is not actually necessary here, `chart.container('container').draw();` can be used
    for current scope, but container is found in template to avoid container ID duplication.
   */
  var container = this.find("#container");

  // Turn Meteor Collection to simple array of objects.
  var data = DataSource.find({}).fetch();

  //  ----- Standard Anychart API in use -----
  chart = anychart.pie(data);
  chart.title('ACME Corp. apparel sales through different retail channels');

  chart.legend()
      .position('bottom')
      .itemsLayout('horizontal')
      .align('center')
      .title('Retail channels');

  chart.animation(true);
  chart.container(container).draw();
};
```


#### /client/main.html
Contains a document structure to work with. Contains an 
anychart container template. 
```html
<head>
  <title>Anychart Meteor Demo</title>
</head>

<body>
  {{> acTemplate}}
</body>
```


#### /client/container.html
Contains Meteor Template named `acTemplate` with container. After the 
template is rendered, it can be used as container for AnyChart chart.
```html
<template name="acTemplate">
    <div id="container"></div>
</template>
```


#### /client/main.css
Default style for current demo
```css
html, body, #container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
```
 


## Contacts

* Web: [www.anychart.com](https://www.anychart.com)
* Email: [contact@anychart.com](mailto:contact@anychart.com)
* Twitter: [anychart](https://twitter.com/anychart)
* Facebook: [AnyCharts](https://www.facebook.com/AnyCharts)
* LinkedIn: [anychart](https://www.linkedin.com/company/anychart)

## Links

* [AnyChart Website](https://www.anychart.com)
* [Download AnyChart](https://www.anychart.com/download/)
* [AnyChart Licensing](https://www.anychart.com/buy/)
* [AnyChart Support](https://www.anychart.com/support/)
* [Report Issues](https://github.com/AnyChart/AnyChart-Meteor/issues)
* [AnyChart Playground](https://playground.anychart.com)
* [AnyChart Documentation](https://docs.anychart.com)
* [AnyChart API Reference](https://api.anychart.com)
* [AnyChart Sample Solutions](https://www.anychart.com/solutions/)
* [AnyChart Integrations](https://www.anychart.com/integrations/)

## License

[© AnyChart.com - JavaScript charts](http://www.anychart.com). All rights reserved.
[![Analytics](https://ga-beacon.appspot.com/UA-228820-4/Meteor?pixel&useReferer)](https://github.com/igrigorik/ga-beacon)
