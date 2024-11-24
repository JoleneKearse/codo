import React, { useState, useEffect } from "react";
import Prompt from "./Prompt";
import InputBlock from "./InputBlock";

const Terminal = () => {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowMenu(true);
    }, 500);
  }, []);

  const menu = `1. View todos
2. Add todo
3. Update todo
4. Delete todo`;

  return (
    <main className="bg-neutral-800 min-h-96 p-2 rounded-md text-brand-500 font-terminal">
      <Prompt text={loading ? "Initializing..." : "Choose an option:"} />
      {showMenu && <pre>{menu}</pre>}
      {!loading && <InputBlock />}
    </main>
  )
}

export default Terminal;