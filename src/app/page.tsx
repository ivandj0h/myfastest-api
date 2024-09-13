"use client";

import { useEffect, useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch";

const HomePage = () => {
  const [input, setInput] = useState<string>(" ");
  const [searchResults, setSearchResults] = useState<{
    result: string[];
    duration: number;
  }>();

  useEffect(() => {
    const fetchResults = async () => {
      if (!input) return setSearchResults(undefined);
      const response = await fetch(`/api/search?q=${input}`);
      const data = await response.json();
      console.log(data);
    };
    fetchResults();
  }, [input]);

  return (
    <div>
      <ThemeSwitch />
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default HomePage;
