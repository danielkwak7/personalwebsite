define(function (require) {
  var React = require('react');

  var Tenen = React.createClass({
    getInitialState: function () {
      return({
        tenen: [],
        on: false
      });
    },

    render: function () {
      // TODO: render using state variables
      return (<div className="portfolio-component">
                {this.state.tenen}
              </div>);
    },

    runTenen: function () {
        if (this.state.on === false) {
          this.state.tenen.push(
            <img id="tailors" className="image container1" src={"./portfolio/tenenment.png"} 
            width={300} height={225}/>,  
            <p className="About container1"> <br/>
            Tenenment was a recruitment platform that connected providers (doctors and<br/>
            allied health workers) seeking locum tenen positions at hospitals. It was a proposal <br/>
            that two friends and I submitted to the YC Fellowship class of 2015. We tried to <br/>
            remove inefficiencies that existed in recruiting companies that connected providers<br/>
            and hospitals. By removing the big player-middle men and unnecessary burdens<br/>
            such as stay, travel, and contracting fees, we directly connected providers with <br/>
            hospitals. By decoupling the direct connection between providers and hospitals, the <br/>
            platform acted an exchange-based system. Therefore, hospitals and providers could <br/>
            negotiate a pay package creating a level of transparency that is not available with <br/>
            middlemen.  Ultimately, Tenenment was discontinued for the foreseeable future.<br/>
            <br/><br/></p>
          );
      } else { 
          $('p').fadeOut();
      }
      //this.setState({omnipen: []});
      console.log(this.state.on);
    }
  });
  return Tenen;
});
