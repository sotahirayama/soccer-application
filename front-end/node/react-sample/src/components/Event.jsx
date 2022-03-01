import React from "react";

function Event(props) {
  return (
     
    <div className="event">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <p>{props.place}</p>
           
        </div>
    </div>
  );
}

export default Event;