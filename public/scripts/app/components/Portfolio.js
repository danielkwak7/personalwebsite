define(function (require) {
  var React = require('react');
  var Tailors = require('jsx!app/components/Tailors');
  var Inertia = require('jsx!app/components/Inertia');

  var Portfolio = React.createClass({
    getInitialState: function () {
      return({
        portfolio: [],
        on: false
      });
    },

    render: function () {
      // TODO: render using state variables
      return (
        <div className="portfolio-component">
                {this.state.portfolio}
                <Tailors className="portfolio-component" ref='tailors' x={75} y={50}/>
                <Inertia className="portfolio-component" ref='inertia' x={75} y={50}/>
        </div>);
    },

    runPortfolio: function () {
      if (this.state.on === false) {
        this.state.portfolio.push( 
          <img onClick={this.tailors} className="image container1" src={"./portfolio/PortfolioPic-01.png"} 
            width={300} height={225}/>,
          <img onClick={this.inertia} className="image container1"  src={"./portfolio/PortfolioPic-02.png"} 
            width={300} height={225}/>
        );
      } else {
        $('img').fadeOut();
        $('p').fadeOut();
      }
      this.setState({on: !this.state.on});
    },

    tailors: function () {
      $('img').fadeOut();
      $('p').fadeOut();
      this.runPortfolio();
      this.setState({on: !this.state.on, portfolio: []});
      console.log('wefhiwef');
      this.refs.tailors.runTailors();
    },

    inertia: function () {
      $('img').fadeOut();
      $('p').fadeOut();

      this.setState({on: !this.state.on, portfolio: []});

      console.log(this.state.portfolio);
      this.refs.inertia.runInertia();
    }


  }); 

  return Portfolio;
});
