import "./App.css";
import { Navbar, Cta } from "./components";
import { Header, WhatSelfocus, Features, Library, Footer } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatSelfocus />
      <Library />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
