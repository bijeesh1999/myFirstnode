import React from "react";

function Aboutcard(props) {
  return (
    <div className="card">
      <div className="img">
        <img className="cardimg" src={props.image}></img>
      </div>
      <h3>{props.heading}</h3>
      <h5>{props.paragraph}</h5>
    </div>
  );
}

function Postcard(props) {
  return (
    <div className="lorem">
      <div className="smallimg">
        <img src={props.img}></img>
      </div>
      <div className="contents">
        <h2 style={{ fontSize: "18px", fontWeight: "100" }}>{props.head}</h2>
        <h4 style={{ fontSize: "15px", fontWeight: "100" }}>{props.parag}</h4>
      </div>
    </div>
  );
}

function Tagscard(props) {
  return <div className="tags">{props.tag}</div>;
}
export { Aboutcard, Postcard, Tagscard };
