import React from "react";

function Events(props) {
  return (
     
    <div className="events">
        <h1>Events lists</h1> 
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <p>{props.description}</p>
           
        </div>
    </div>
  );
}

export default Events;