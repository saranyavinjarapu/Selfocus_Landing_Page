import "./App.css";
import { Navbar } from "./components";
import { Header, WhatSelfocus } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatSelfocus />
    </div>
  );
}

export default App;
