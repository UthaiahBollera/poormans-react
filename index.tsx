import React from "./poormans-react";
import ReactDOM from "./poormans-reactdom";

const Hello = (props) => {
    return <h1>Hello {props.name}!!</h1>
};

const App = () => (<div className="hello">
    <Hello name="world!" />
    <input type="text" onclick={()=>{ console.log('Hello')}} placeholder="Enter your name" />
    <p className="para">
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sed numquam asperiores
        voluptate quos corporis reprehenderit
        excepturi corrupti vero saepe repellendus.
        Itaque et cumque eaque quo suscipit iste
        veniam quasi pariatur?
         </p>
</div>);

ReactDOM.render(<App />, document.getElementById('app'));   