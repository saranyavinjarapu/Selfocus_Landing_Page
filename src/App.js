import "./App.css";
import { Navbar, Cta } from "./components";
import { Header, WhatSelfocus, Features, Library, Footer } from "./containers";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
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
    </SnackbarProvider>
  );
}

export default App;
