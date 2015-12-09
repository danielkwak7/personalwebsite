
define(function (require) {
  var React = require('react');

  var Tailors = React.createClass({
    getInitialState: function () {
      return({
        tailors: [],
        on: false
      });
    },

    render: function () {
      // TODO: render using state variables
      return (<div className="portfolio-component">
                {this.state.tailors}
              </div>);
    },

    runTailors: function () {
        if (this.state.on === false) {
          this.state.tailors.push(
            <img id="tailors" className="image container1" src={"./portfolio/PortfolioPic-01.png"} 
              width={300} height={225}/>,
            <p className="About container1"> <br/> <br/> 
            Tailors+Madmen is a customizable watch company that I co-founded the spring <br/>
            of my Sophomore year. It has since grown from a seed fund of $2550 to an <br/>
            estimated $25,000 in presales. Through the whole process I learned not only <br/>
            how to juggle the design, engineering, and business of a product, but also <br/>
            how to efficiently use analytics and metrics to reduce costs significantly. <br/>
            Most of our funds were dedicated to sampling, so all of the marketing and user <br/>
            acquisition was carefully measured based on key indicators of conversion and margins.<br/>
            Check out more here: <br/><br/></p>,
            <img id="tailors" className="image container1" onClick={this.site}
              src={"./portfolio/tmlogo.png"}/>
          );
      } else {
          $('p').fadeOut();
      }
      //this.setState({portfolio: []});
      console.log(this.state.on);
    },

    site: function() {
      window.open('http://tailorsandmadmen.com/','_blank');
    }
  });
  return Tailors;
});
