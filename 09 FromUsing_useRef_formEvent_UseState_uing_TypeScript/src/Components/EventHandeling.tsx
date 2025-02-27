

export const EventHandeling = () => {
 const handleClick =(e:React.MouseEvent<HTMLButtonElement>) =>{
    console.log ("button Clicked", e.currentTarget)
 }


 const handleMouseEvent =(e: React.MouseEvent<HTMLDivElement>)=>{
    console.log ("Mouse Entered", e.currentTarget)
 }


  return (
  <div onMouseEnter={handleMouseEvent}>
  <h2>Event Handling (open console to see result) </h2>
  <button onClick={handleClick}>Click me</button>
  </div>
  )
}
