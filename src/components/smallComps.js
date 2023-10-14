import React from "react";

function Localhead(props) {
  return (
    <div style={{backgroundColor:"#f1f1f1"}}>
      <h3 style={{ margin: "10px 0",fontWeight:"100" }}>{props.title}</h3>
    </div>
  );
}


// function Button(){
//   return(
//     <div>
//     <button>hello</button>
//     </div>
//   );
// }

export {Localhead};
