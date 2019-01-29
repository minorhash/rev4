// var React = require('react');
// var ReactDOM = require('react-dom');

// class Wel extends React.Component {
//   render() {
//     return <div>Hello World</div>;
//   }
// }

function Wel(props) {
return <h5>Hello, {props.name}</h5>;
}

function Nam(){
return(
<div>
<Wel name="sara" />
<Wel name="dave" />
</div>
)
}

const doc=document.getElementById('hell')
ReactDOM.render(<Nam />,doc);

