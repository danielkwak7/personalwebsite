define(function (require) {
  var React = require('react');

  var Toucan = React.createClass({
    getInitialState: function () {
      return({
        toucan: [],
        on: false
      });
    },

    render: function () {
      // TODO: render using state variables
      return (<div className="portfolio-component">
                {this.state.toucan}
              </div>);
    },

    runToucan: function () {
        if (this.state.on === false) {
          this.state.toucan.push(
            <img id="tailors" className="image container1" src={"./portfolio/toucan.png"} 
            width={300} height={225}/>,  
            <p className="About container1"> <br/>
            Toucan was an Apple Watch business tool used to record and summarize meetings. <br/>
            Started during the Spring semester of my Sophomore year with a close friend,<br/>
            Toucan received funding from The Wharton Innovation Fund to come to life.<br/>
            Using the voice recording capabilities of the Apple Watch and open source voice<br/> 
            recognition software, each meeting would be stored, summarized using word <br/>
            frequency algorithms, and analyzed for important content such as the key <br/>
            contributors in a meeting and timestamps at important conversation points. Based <br/>
            on the preference of the user, the transcript or summarization could be sent to all <br/>
            attendees or those who missed the meeting.  Toucan would reduce inefficiencies <br/>
            within the workplace by providing an unique tool to organize meetings succinctly<br/> 
            and effectively. Ultimately, the team pivoted to pursue Inertia later that year.<br/>
            <br/><br/></p>
          );
      } else { 
          $('p').fadeOut();
      }
      //this.setState({omnipen: []});
      console.log(this.state.on);
    }
  });
  return Toucan;
});
