"use client";

import { useState } from "react";

const HomePage = () => {
  const input = useState<string>(" ")[0];
  const [] = useState<{
    result: string[];
    duration: number;
  }>();

  return (
    <div>
      <input
        value={input}
        type="text"
        onChange={() => console.log("Hello World from Console...")}
      />
    </div>
  );
};

export default HomePage;
