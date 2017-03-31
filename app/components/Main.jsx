var React = require('react');
var Navigation = require('Navigation');
var Timer = require('Timer');
// var Main = React.createClass(
//   {
//     render: function(){
//       return (
//         <div>
//           <Navs/>
//           <h2>Fuck Main</h2>
//           {this.props.children}
//         </div>
//       );
//     }
//   }
// )

var Main = (props) => {
return(

  <div>
    <Navigation/>
    <div className="row">
      <div className="column small-centered medium-6 large-4">
        {props.children}
        </div>
      </div>
    </div>
)
}
module.exports = Main;
