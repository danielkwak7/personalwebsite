
define(function (require) {
  var React = require('react');
  var Kwak = require('jsx!app/components/kwak');

  var container = document.getElementById('container');
  // TODO: render the GameOfLife component using React.renderComponent
  React.renderComponent(
    <Kwak/>,
    document.getElementById('container')
  );
});