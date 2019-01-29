function Welcome(props) {
return <h5>Hello, {props.name}</h5>;
}

function Nam(){
return(
<div><Welcome name="sara" /></div>
)
}

class Clock extends React.Component {
constructor(props) {
super(props);
this.state = {date: new Date()};
}

render() {
return (
<div>
<h1>Hello, world!</h1>
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
</div>
);
}
}

function tick() {
ReactDOM.render(
<Clock />,
document.getElementById('root')
);
}

setInterval(tick, 1000);

const doc=document.getElementById('hell')
ReactDOM.render(<Nam />,doc);

