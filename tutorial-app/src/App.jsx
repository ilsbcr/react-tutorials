import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Post from "./components/Post";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div class="header-layout"></div> */}
        <Header />
        <SideBar />
        <Post />
        
      {/* <h1>Branch - Challenge 1</h1> */}
    </>
  );
}

export default App;
