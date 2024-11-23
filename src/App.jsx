import Terminal from "./components/Terminal";


function App() {

  return (
    <div className="flex flex-col gap-24 my-20 mx-10">
      <h1 className="font-titles font-bold text-3xl text-brand-400 text-center">
        <span className="text-6xl">Codo</span>: A Todo List for Developers
      </h1>
      <Terminal />
    </div>
  )
}

export default App;

