"use client";

import { useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch";

const HomePage = () => {
  const input = useState<string>(" ")[0];
  const [] = useState<{
    result: string[];
    duration: number;
  }>();

  return (
    <div>
      <ThemeSwitch />
      <input
        value={input}
        type="text"
        onChange={() => console.log("Hello World from Console...")}
      />
    </div>
  );
};

export default HomePage;
