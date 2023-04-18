const htmlRoot = document.getElementById("root");
const root = ReactDOM.createRoot(htmlRoot);

const heading = React.createElement("h1", {id:'heading'}, 'Hello React..!');

root.render(React.createElement('div', {className: "container"}, heading));

// This is how we can add attributes to html tags from the props parameter of createElement