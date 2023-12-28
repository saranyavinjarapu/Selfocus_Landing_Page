import "./App.css";
import { Navbar } from "./components";
import { Header, WhatSelfocus, Features } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatSelfocus />
      <Features />
    </div>
  );
}

export default App;
