import React from "react";

function FunctionProps(props){
    return (
        <div>
            <h4>This is a Functional Component</h4>,
            <h4>Hello {props.name}! from {props.place} Welcome to the world</h4>
        </div>
    );
}

export default FunctionProps;