define(function (require) {
  var React = require('react');

  var About = React.createClass({
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
        </div>);
    },

    getAbout: function () {
      if (this.state.on === false) {
        this.state.portfolio.push( 
          <h3 className='About container1'>Dallas | San Diego | Philadelphia<br/><br/></h3>,
          <img className="Image" src="./portfolio/taco-01.png" width={1000} height={26}/>,
          <p className='About container1'>
          <br/>
          Raised in Colleyville, TX, a suburb of Dallas, I was greatly influenced <br/>
          by both BBQ, Tacos and Southern hospitality. Moreover, as a child to an <br/>
          engineer and teacher, I grew up in a highly scientific environment. <br/>
          Through years of loving the great sciences, I came into college with my <br/>
          eyes set on Medical School, and in another life I would have been a pediatrician. <br/>
          However, my love for entrepreneurship lead me to enrolling in The Wharton School, <br/>
          where I now study a combination of Marketing, Operations, and Computer Science <br/>
          - essential components to launching great products.</p>
          );
      } else {
        $('.About').fadeOut();
      }
      //this.setState({portfolio: newPort});
      this.setState({on: !this.state.on});
      console.log(this.state.on);
    },
/*
    tailors: function () {
      $('img').fadeOut();
      this.setState({on: false});
      console.log('wefhiwef');
      this.refs.tailors.runTailors();
    }
*/
  }); 

  return About;
});
