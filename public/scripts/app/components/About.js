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
          <p className='About container1'> <br/>
          Raised in Colleyville, TX, a suburb of Dallas, I was greatly influenced <br/>
          by BBQ, tacos and technology. The child of an engineer and teacher, I grew <br/>
          up in a highly scientific environment. Through years of loving the great sciences, <br/>
          I came into Penn with my eyes set on Medical School, and in another life <br/>
          I would have been a pediatrician. However, my love for entrepreneurship lead <br/>
          me to enrolling in The Wharton School, where I now study a combination of <br/>
          Marketing and Operations Management and Computer Science. <br/>
          - essential components to launching great products.<br/><br/> <br/>
          This personal site showcases some projects that I have worked on over the years. <br/>
          Feel free to browse through companies I've started and ideas I've almost pursued. <br/> <br/> </p>
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
