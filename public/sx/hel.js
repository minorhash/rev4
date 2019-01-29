// var React = require('react');
// var ReactDOM = require('react-dom');

// class Wel extends React.Component {
//   render() {
//     return <div>Hello World</div>;
//   }
// }

function Wel(props) {
  return React.createElement(
    "h5",
    null,
    "Hello, ",
    props.name
  );
}

function Nam() {
  return React.createElement(
    "div",
    null,
    React.createElement(Wel, { name: "sara" }),
    React.createElement(Wel, { name: "dave" })
  );
}

var doc = document.getElementById('hell');
ReactDOM.render(React.createElement(Nam, null), doc);