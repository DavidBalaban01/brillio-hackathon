import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center bg-blue-500">
      <h1 className="text-4xl font-bold text-white">
        Tailwind CSS is Working!
      </h1>
    </div>
  );
}

export default App;
