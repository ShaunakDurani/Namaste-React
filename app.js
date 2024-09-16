//const heading=React.createElement("h1",{id:"heading"},"Hello from React");
// the empty object is the palce where we can give attributes to our tag

const heading = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"Hello from inside"),React.createElement("h2",{id:"heading"},"Hello from inside once again")]));

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);