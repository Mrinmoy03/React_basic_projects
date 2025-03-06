const trends = [
    { title: "Be the person you are on vacation", author: "Maren Torff" },
    { title: "Success is not final, failure is not fatal", author: "Winston Churchill" },
    { title: "Dream big and dare to fail", author: "Norman Vaughan" },
    { title: "Act as if what you do makes a difference", author: "William James" },
    { title: "The only limit to our realization of tomorrow is our doubts of today", author: "Franklin D. Roosevelt" },
    { title: "Happiness depends upon ourselves", author: "Aristotle" },
    { title: "It always seems impossible until it’s done", author: "Nelson Mandela" },
    { title: "Be yourself; everyone else is already taken", author: "Oscar Wilde" },

];


const TrendsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
       <h3 className="font-semibold text-lg mb-4"> Todays' Top Trends</h3>
      <ul className="space-y-4">
        {trends.map((trend, index)=>(
            <li key={index} className="flex flex-col">
                <span className="font-medium">{trend.title}</span>
                <span className="font-small text-gray-500">By {trend.author}</span>
            </li>
        ))}
        </ul> 
    </div>
  )
}

export default TrendsList