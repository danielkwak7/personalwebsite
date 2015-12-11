define(function (require) {
  var React = require('react');

  var Omnipen = React.createClass({
    getInitialState: function () {
      return({
        omnipen: [],
        on: false
      });
    },

    render: function () {
      // TODO: render using state variables
      return (<div className="portfolio-component">
                {this.state.omnipen}
              </div>);
    },

    runOmnipen: function () {
        if (this.state.on === false) {
          this.state.omnipen.push(
            <img id="tailors" className="image container1" src={"./portfolio/omnipen.png"} 
            width={300} height={225}/>,  
            <p className="About container1"> <br/>
            The Omnipen was my very first invention in Elementary School that sparked my<br/>
            love for creating and delivering product. With my friend Dai, I began creating<br/>
            omnipens in the 5th grade. Omnipens were a combination of pens, pencils, and erasers. <br/>
            We made these inventions with our school supplies and sold them each for a quarter. <br/>
            Omnipens were such a hit that they sold out on the first day, and had preorders that
            filled out operating quotas for a few weeks. Within our first week our sales reached a 
            staggering $5, and were projected to grow to nearly $10 a week. My friend and I brought on
            our first two sales team members during our second week of business, and paid them on commision. <br/>
            However, the school put a stop to our production as it supposedly “hindered our learning.” <br/>
            <br/><br/></p>
          );
      } else { 
          $('p').fadeOut();
      }
      //this.setState({omnipen: []});
      console.log(this.state.on);
    }
  });
  return Omnipen;
});
