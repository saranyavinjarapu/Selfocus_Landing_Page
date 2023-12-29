import "./App.css";
import { Navbar } from "./components";
import { Header, WhatSelfocus, Features, Library } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatSelfocus />
      <Features />
      <Library />
    </div>
  );
}

export default App;
