import "./App.css";
import { Navbar } from "./components";
import { Header, WhatSelfocus, Features, Possibility } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatSelfocus />
      <Features />
      <Possibility />
    </div>
  );
}

export default App;
