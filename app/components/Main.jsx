var React = require('react');
var Navigation = require('Navigation');
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
    <div>
      <div>
        <Navigation/>
        {props.children}
      </div>
    </div>
  </div>
)
}
module.exports = Main;
