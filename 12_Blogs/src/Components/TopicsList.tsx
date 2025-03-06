const topics =[
    "Technology",
    "Design thinking",
    "Crypto",
    "NFT",
    "Personal Growth",
    "Reading",
]

export const TopicsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
     <h3 className="font-semibold text-lg mb-4">Topics For You</h3>
    <div className="flex flex-wrap grap-2">
        {topics.map((topic, index)=>(
            <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm m-2 rounded-full cursor-pointer hover:bg-gray-300">
                {topic}
            </span>
        ))}
    </div>
    </div>
  )
}
