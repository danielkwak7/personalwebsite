/*
  Daniel Kwak Website react component
*/
define(function (require) {
  var React = require('react');
  var Portfolio = require('jsx!app/components/Portfolio');
  var About = require('jsx!app/components/About');
  var Tailors = require('jsx!app/components/Tailors');
  var Ideas = require('jsx!app/components/Ideas');

  var Kwak = React.createClass({
    render: function () {

      return (
        <div className="game-component">
        <div className="container"> 
          <h1>Daniel Kwak</h1>
        </div>
          
        <div className="container1">
          <h3>Junior at University of Pennsylvania</h3>
          <h4>Marketing and Operations Management | Computer Science Minor</h4>
          <h3>Bridging design, engineering, and business to</h3>
          <h3>push out beautiful and effective products</h3>
          <button onClick={this.getPortfolio}>Portfolio</button>
          <button onClick={this.getExperience}>Experience</button>
          <button onClick={this.getIdeas}>Ideas</button>
          <button onClick={this.getAbout}>About me</button>
        </div>
        <div className="portfolio">
          <Portfolio className="portfolio-component" ref="portfolio" x={75} y={50}/>
          <About className="portfolio-component" ref="about" x={75} y={50}/>
          <Ideas className="portfolio-component" ref="ideas" x={75} y={50}/>

        </div>
        </div> 
        );
    },

    getPortfolio: function () {
      if (this.refs.about.state.on === true) {
        this.refs.about.setState({on: false, portfolio: []});
        $('.About').fadeOut();
      } else if (this.refs.ideas.state.on === true) {
        this.refs.ideas.setState({on: false, portfolio: []});
        //$('.portfolio').fadeOut();
      }
      $('p').fadeOut();
      $('img').fadeOut();
      this.refs.portfolio.runPortfolio();
    },

    getExperience: function () {
      window.open('https://www.linkedin.com/in/daniel-kwak-89837289','_blank');
    },

    getIdeas: function () {
      if (this.refs.about.state.on === true) {
        this.refs.about.setState({on: false, portfolio: []});
        $('.About').fadeOut();
      } else if (this.refs.portfolio.state.on === true) {
        this.refs.portfolio.setState({on: false, portfolio: []});
        //$('.portfolio').fadeOut();
      }
      $('p').fadeOut();
      $('img').fadeOut();
      this.refs.ideas.getIdeas();
    },

    getAbout: function() {
      if (this.refs.portfolio.state.on === true) {
        this.refs.portfolio.setState({on: false, portfolio: []});
        $('img').fadeOut();
        $('p').fadeOut();
      } else if (this.refs.ideas.state.on === true) {
        this.refs.portfolio.setState({on: false, portfolio: []});
        //$('.portfolio').fadeOut();
      }
      $('img').fadeOut(); 
      $('p').fadeOut();
      this.refs.about.getAbout();
    }
  });

  return Kwak;
});
