/*
  Daniel Kwak Website react component
*/
define(function (require) {
  var React = require('react');
  var Portfolio = require('jsx!app/components/Portfolio');
  var About = require('jsx!app/components/About');
  var Tailors = require('jsx!app/components/Tailors');

  var Kwak = React.createClass({
    render: function () {

      return (
        <div className="game-component">
        <div className="container"> 
          <h1>Daniel Kwak</h1>
        </div>
          
        <div className="container1">
          <h3>Junior at University of Pennsylvania</h3>
          <h4>Marketing and Operations Management | Computer Science</h4>
          <h3>Bridging design, engineering, and business to</h3>
          <h3>push out beautiful and effective products</h3>
          <button onClick={this.getPortfolio}>Portfolio</button>
          <button onClick={this.getExperience}>
                  Experience</button>
          <button onClick={this.getAbout}>About me</button>
        </div>
        <div className="portfolio">
          <Portfolio className="portfolio-component" ref="portfolio" x={75} y={50}/>
          <About className="portfolio-component" ref="about" x={75} y={50}/>

        </div>
        </div> 
        );
    },

    getPortfolio: function () {
      if (this.refs.about.state.on === true) {
        this.refs.about.setState({on: false, portfolio: []});
        $('.About').fadeOut();
      }
      $('p').fadeOut();
      $('img').fadeOut();
      this.refs.portfolio.runPortfolio();
    },

    getExperience: function () {
      window.open('https://www.linkedin.com/in/daniel-kwak-89837289','_blank');
    },

    getAbout: function() {
      if (this.refs.portfolio.state.on === true) {
        this.refs.portfolio.setState({on: false, portfolio: []});
        console.log('woeifjweoifj');
        $('img').fadeOut();
        $('p').fadeOut();
      }
      $('img').fadeOut(); 
      $('p').fadeOut();
      this.refs.about.getAbout();
    }
  });

  return Kwak;
});
