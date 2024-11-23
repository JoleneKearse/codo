import React, { useState, useEffect } from "react";
import Prompt from "./Prompt";

const Terminal = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const menu = `
1. View todos
2. Add todo
3. Update todo
4. Delete todo
  `;

  return (
    <main className="bg-neutral-800 min-h-96 p-2 rounded-md text-brand-500 font-terminal">
      <Prompt text={loading ? "Initializing..." : menu} />
    </main>
  )
}

export default Terminal;