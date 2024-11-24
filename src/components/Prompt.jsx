const Prompt = ({ action="~", text }) => {
  return (
    <div className="flex items-center gap-2 text-blue">
      {action}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
      {text} 
    </div>
  )
}

export default Prompt;