
define(function (require) {
  var React = require('react');

  var Phable = React.createClass({
    getInitialState: function () {
      return({
        phable: [],
        on: false
      });
    },

    render: function () {
      // TODO: render using state variables
      return (<div className="portfolio-component">
                {this.state.phable}
              </div>);
    },

    runPhable: function () {
        if (this.state.on === false) {
          this.state.phable.push(
            <img id="tailors" className="image container1" src={"./portfolio/phable.png"} 
            width={300} height={225}/>,  
            <p className="About container1"> <br/> <br/> 
            Phable was a social network story-writing app that connected strangers and   <br/>
            friends to create stories of any length that I thought of Freshman year.  <br/>
            Stories are a fundamental part of human interaction, and the glue that bonds  <br/>
            many friends. With Phable, friends would create stories to share with the public <br/>
            or just friends. The only catch was that these stories were made sentence by sentence. <br/>
            For each writing group or duo, one would begin the story and then someone else <br/>
            would follow up and so forth. With two different modes: challenger or story mode,<br/>
            Phable gave freedom of length. For Challenger mode, a duo of writers were to be <br/>
            pitted against another duo in a showdown. This duo could either be randomly <br/>
            assigned or with a friend. With 60 seconds, the duos write as fast as they can,<br/>
            then peers would judge the stories and a random group judged the winner. <br/>
            The winner would receive points and rise the ranks. For story-mode, writers could <br/>
            choose either to enter as a duo or group, again either randomly assigned or with <br/>
            friends. However, unlike Challenger mode, the story can continue forever and <br/>
            has the option to be published to a leadership board where peers can read the stories and rate them. <br/>
            <br/><br/></p>
          );
      } else { 
          $('p').fadeOut();
      }
      //this.setState({phable: []});
      console.log(this.state.on);
    }
  });
  return Phable;
});
