import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Tasks from "./components/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import List from "./components/List";
import Progress from "./components/Progress";

function App() {
  return (
    <>
      <Tasks></Tasks>
      <Progress></Progress>
    </>
  );
}

export default App;
