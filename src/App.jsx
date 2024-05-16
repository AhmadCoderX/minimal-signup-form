import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideImage from "./components/SideImage";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#e8f8e4] w-full h-screen flex items-center justify-between font-[Poppins]">
        <SideImage />
        <Form />
      </div>
    </>
  );
}

export default App;
