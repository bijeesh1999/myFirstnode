import React from "react";

function Body(props) {
  return (
    <div className="body">
      <div className="img">
        <img className="cardimg" src={props.image}></img>
      </div>
      <h3 style={{width:"800px"}}>{props.title}</h3>
      <h3 style={{width:"800px"}}>{props.date}</h3>
      <h5 style={{width:"800px"}}>{props.para}</h5>
      <div className="button">
        <button>READ MORE</button>
      </div>
    </div>
  );
}
export default Body;
