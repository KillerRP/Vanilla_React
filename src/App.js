const Pet = (props) => {
    return React.createElement("div",{}, [
        React.createElement("h1",{},props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h3",{},props.breed),
    ])
}

const App = () => {
    return React.createElement("div", {id: "brand"}, [
        React.createElement("h1", {}, "Hello World."),
        React.createElement(Pet,{name: "Lucas", animal: "Dog", breed: "Bulldog"}),
        React.createElement(Pet,{name: "Leo", animal: "Lion", breed: "Lion"}),
        React.createElement(Pet,{name: "Jacob", animal: "Wolf", breed: "Warewolf"}),
    ]);
  };
ReactDOM.render(React.createElement(App), document.getElementById('root'));
