import React from "react";
import Button from "./smallComps";

function Modal(){
  // document.getElementById('').style
  alert('im modal')
}

function Footer(){
    return(
        <div className="footer">
            <div>
            <button className="button">prev</button>
            <button className="button">next</button>
            </div>
            <label>powerdby stackup</label>   
        </div>
    )
}

export default Footer