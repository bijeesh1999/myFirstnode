import React, { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import { Aboutcard, Postcard, Tagscard } from "./components/rightCard";
import { Localhead } from "./components/smallComps";
import axios from "axios";


function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/blogdata",
      responseType: "json",
    })
      .then(({data}) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  }
  
  const Aboutarray = [
    {
      image: "https://www.w3schools.com/w3images/avatar_g.jpg",
      heading: "My Name",
      paragraph:
        "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
    },
    {
      image: "https://www.w3schools.com/w3images/man_bench.jpg",
      heading: "My Name",
      paragraph:
        "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
    },
  ];
  const PostArray = [
    {
      img: "https://www.w3schools.com/w3images/workshop.jpg",
      head: "Lorem",
      parag: "Sed mattis nunc",
    },
    {
      img: "https://www.w3schools.com/w3images/gondol.jpg",
      head: "Ipsum",
      parag: "Praes tinci sed",
    },
    {
      img: "	https://www.w3schools.com/w3images/skies.jpg",
      head: "Dorum",
      parag: "Ultricies congue",
    },
    {
      img: "https://www.w3schools.com/w3images/rock.jpg",
      head: "Mingsum",
      parag: "Lorem ipsum dipsum",
    },
  ];
  
  const TagsArray = [
    {
      tag: "New York",
    },
    {
      tag: "London",
    },
    {
      tag: "IKEA",
    },
    {
      tag: "NORWAY",
    },
  ];
  return (
    <>
      <Heading />
      <div id="wrapper">
        <div id="container">
          <div id="leftbody">
            {post.map((obj) => {
              return <Body {...obj} />;
            })}
          </div>
          <div id="rightbody">
            <div>
              {Aboutarray.map((obj) => {
                return <Aboutcard {...obj} />;
              })}
            </div>

            <div className="card ">
              <Localhead title="Popular Posts" />
              {PostArray.map((obj, index) => {
                return <Postcard key={index} {...obj} />;
              })}
            </div>
            <div className="card ">
              <Localhead title="Tags" />
              <div
                style={{
                  display: "flex",
                  padding: "0 10px",
                  margin: "20px 0",
                  gap: "10px",
                }}
              >
                {TagsArray.map((obj) => {
                  return <Tagscard {...obj} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
