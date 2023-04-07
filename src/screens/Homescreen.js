import React from "react";
import "./homescreen.css";
import Nav from "../Nav.js";
import Banner from "../Banner";
import requests from "../requests";
import Row from "../Row.js";
function Homescreen() {
  return (
    <div className="homescreen">
      {/* // Navbar */}

      <Nav />

      {/* // Banner   */}
      <Banner />
      {/* // Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Homescreen;
