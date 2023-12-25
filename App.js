/** How do you create this type of structure inside react. 
*   <div id ="parent">
*       <div id ="child">
*          <h1>I'm h1 tag</h1>
*          <h2>I'm h1 tag</h2>
*       </div>
*   <div id ="child2">
*          <h1>I'm h1 tag</h1>
*          <h2>I'm h1 tag</h2>
*       </div>
*    </div>
* ReactElement(Object) => HTML(Browser Understands)
*/

// Neasted HTML 
const parent = React.createElement("div",{id: "parent"},  // Nested Structure in React
    React.createElement("div",{id:"child"},[
         React.createElement("h1", {}, "I'm an h1 tag"),
         React.createElement("h2", {}, "I'm an h2 tag"),
        ]),
    React.createElement("div",{id:"child2"},[
         React.createElement("h1", {}, "I'm an h1 tag"),
         React.createElement("h2", {}, "I'm an h2 tag"),
        ])
);

// JSX

console.log(parent);  // return object to you
const root = ReactDOM.createRoot(document.getElementById("root"));  // we have created a root for a react libarary

root.render(parent);