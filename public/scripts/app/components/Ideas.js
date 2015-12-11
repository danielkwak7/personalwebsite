define(function (require) {
  var React = require('react');
  var Phable = require('jsx!app/components/Phable');
  var Omnipen = require('jsx!app/components/Omnipen');
  var Toucan = require('jsx!app/components/Toucan');
  var Tenen = require('jsx!app/components/Tenen');

  var Ideas = React.createClass({
    getInitialState: function () {
      return({
        ideas: [],
        on: false
      });
    },

    render: function () {
      // TODO: render using state variables
      return (
        <div className="portfolio-component">
                {this.state.ideas}
                <Phable className="portfolio-component" ref='phable' x={75} y={50}/>
                <Omnipen className="portfolio-component" ref='omnipen' x={75} y={50}/>
                <Toucan className="portfolio-component" ref='toucan' x={75} y={50}/>
                <Tenen className="portfolio-component" ref='tenen' x={75} y={50}/>
        </div>);
    },

    getIdeas: function () {
      if (this.state.on === false) {
        this.state.ideas.push( 
          <img onClick={this.phable} className="image container1" src={"./portfolio/phable.png"} 
            width={300} height={225}/>,
          <img onClick={this.omnipen} className="image container1" src={"./portfolio/omnipen.png"} 
            width={300} height={225}/>, <br/>, 
          <img onClick={this.toucan} className="image container1" src={"./portfolio/toucan.png"} 
            width={300} height={225}/>,
          <img onClick={this.tenen} className="image container1" src={"./portfolio/tenenment.png"} 
            width={300} height={225}/>
        );
      } else {
        $('img').fadeOut();
        $('p').fadeOut();
      }
      this.setState({on: !this.state.on});
    },

    phable: function () {
      $('img').fadeOut();
      $('p').fadeOut();
      this.getIdeas();
      this.setState({on: !this.state.on, portfolio: []});
      this.refs.phable.runPhable();
    },

    omnipen: function () {
      $('img').fadeOut();
      $('p').fadeOut();
      this.getIdeas();
      this.setState({on: !this.state.on, portfolio: []});
      this.refs.omnipen.runOmnipen();
    },

    toucan: function () {
      $('img').fadeOut();
      $('p').fadeOut();
      this.getIdeas();
      this.setState({on: !this.state.on, portfolio: []});
      this.refs.toucan.runToucan();
    },

    tenen: function () {
      $('img').fadeOut();
      $('p').fadeOut();
      this.getIdeas();
      this.setState({on: !this.state.on, portfolio: []});
      this.refs.tenen.runTenen();
}


  }); 

  return Ideas;
});
