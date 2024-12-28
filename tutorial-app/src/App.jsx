import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Post from "./components/Post";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <div className="container-sidebar-postlist">
        <div className="post-container">
          <Post /> 
          <Post />
          <Post />
          <Post />
        </div>
        <div className="sidebar-container">
          <SideBar />
        </div>
      </div>

    </>
  );
}

export default App;
