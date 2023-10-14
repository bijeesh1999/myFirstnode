import React from "react";
import "./admin.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Editor } from 'primereact/editor';


function Admin() {
  const [post, setPost] = useState({
    image: "",
    title: "",
    para: "",
    date: date(),
  }); 
  const formData = (e) => {
    setPost({ ...post, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };

  function postForm(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/blogdata", post)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // const data = date();
    // console.log(data);
  }
  function date() {
    const date = new Date(Date.now());
    // console.log(date)
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const actualDate = `${month}-${day}-${year}`;
    return actualDate;
  }

  return (
    <div id="wraper">
      <div className="header">
        <h1 style={{ margin: "1rem" }}>ADMIN PANEL</h1>
      </div>
      <div id="container">
        <form id="Form" onSubmit={postForm}>
          <input onChange={formData} type="text" name="image" id="image" placeholder="image url"/>
          <input onChange={formData}type="text" name="title" id="title" placeholder="blog title"/>
          {/* <Editor onChange={formData} value={post} id="para" name="para" /> */}
          <textarea onChange={formData} type="text" name="para" id="para"/>
          <button type="submit">create</button>
        </form>
        <div id="blogentry">
          <div>
            <img id="img" src={post.image} />
          </div>
          <h3 id="description">{post.title}</h3>
          <h3>{post.date}</h3>
          <h5 id="lorem">{post.para}</h5>
          <div className="button">
            <button>readmore</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>powerded by stackup</p>
        <button ><Link to="/">blog</Link></button>
      </div>
    </div>
  );
}

export default Admin;
