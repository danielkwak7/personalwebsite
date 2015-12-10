
define(function (require) {
  var React = require('react');

  var Inertia = React.createClass({
    getInitialState: function () {
      return({
        inertia: [],
        on: false
      });
    },

    render: function () {
      // TODO: render using state variables
      return (<div className="portfolio-component">
                {this.state.inertia}
              </div>);
    },

    runInertia: function () {
        if (this.state.on === false) {
          this.state.inertia.push(
            <img id="tailors" className="image container1" src={"./portfolio/PortfolioPic-02.png"} 
              width={300} height={225}/>,
            <p className="About container1"> <br/> 
            Inertia is the continuation and development of my PennApps XII hack. The main<br/>
            premises of the hackathon's project was to create a wifi-enabled motion detecting <br/>
            device that had multiple API endpoints for software engineers to easily hack on. <br/>
            After the hackathon, we were accepted as one of 6 teams out of over 50 applicants<br/>
            for the PennApps Accelerator. Through this organization we were given $1000 to <br/>
            continue developing our product. The 8-week program culminated with 2 demo days:<br/>
            one in Philadelphia that investors from Robinhood Ventures, Comcast, and First Round<br/>
            Capital attended, and the other in NYC at the Intercollegiate Pitch Off with other <br/>
            Ivy League incubators attended by dozens of VCs including YC and Andreessen Horowitz. <br/>
            Through Inertia I have learned a tremendous amount about the hardware market, how <br/>
            to approach software engineers as a market, and the logistics of hardware.<br/><br/></p>
          );
      } else {
          $('p').fadeOut();
      }
      //this.setState({inertia: []});
      console.log(this.state.on);
    },

    site: function() {
      window.open('http://tailorsandmadmen.com/','_blank');
    }
  });
  return Inertia;
});
