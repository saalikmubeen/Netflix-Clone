import React from "react";
import "./App.css";
import Row from "./components/Row";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App(){
  return (
    <>
      <Nav/>
      <Header/>
      <Row type="fetchTrending" genre="Trending" isLarge/>
      <Row type="fetchNetflixOriginals" genre="Netflix Originals"/>
      <Row type="fetchTopRated" genre="Top Rated"/>
      <Row type="fetchActionMovies" genre="Action Movies"/>
      <Row type="fetchComedyMovies" genre="ComedyMovies"/>
      <Row type="fetchHorrorMovies" genre="Horror Movies"/>
      <Row type="fetchRomanceMovies" genre="Romance Movies"/>
      <Row type="fetchDocumentaries" genre="Documentaries"/>
    </>
  )
}


export default App;
