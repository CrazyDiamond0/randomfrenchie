import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/brands.js";
import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/fontawesome.js";

export default function App() {
  const [doggopic, setDoggopic] = useState("");
  const api = () => {
    axios
      .get("https://dog.ceo/api/breed/bulldog/french/images/random")
      .then((res) => {
        setDoggopic(res.data.message);
      });
  };
  useEffect(() => {
    return api();
  }, []);

  const font = {
    fontFamily: "Roboto, sans-serif",
    marginTop: "1rem",
  };

  return (
    <div className="container">
      <h1 style={font}>Random frenchie</h1>
      <p style={font}>
        Press the bellow button to get a random frenchie image or to download
        the current one.
      </p>
      <img src={doggopic} className="animalimage" alt="img"></img>
      <div className="buttonarea">
        <button
          className="primary-button primary-button-random  btn btn-outline-primary btn-lg"
          onClick={api}
        >
          <i className="fas fa-bone"></i>
        </button>
        <a href={doggopic} download>
          <button className="primary-button btn btn-outline-primary btn-lg">
            <i class="fas fa-download"></i>
          </button>
        </a>
      </div>

      <p style={font}>
        If you want to contribute with frenchie pictures please check the bellow
        link
      </p>
      <a href="https://github.com/jigsawpieces/dog-api-images#dog-api-images">
        <button className="primary-button btn btn-outline-primary btn-lg">
          <i className="fab fa-github"></i>
        </button>
      </a>
    </div>
  );

  //   function getDoggo() {
  //     return fetch("https://dog.ceo/api/breeds/image/random")
  //       .then((response) => response.json())
  //       .then((responseJson) => setDoggopic(responseJson.message))
  //       .catch((error) => console.error(error));
  //   }
}
