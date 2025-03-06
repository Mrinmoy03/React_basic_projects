import { FaUserCircle } from "react-icons/fa";

interface UsercardProps{
    index:number;
    person: { name: string; following: boolean };
}

export const UserCard = ({index, person}:UsercardProps) => {
  return (
    <div className="flex items-center justify-between" >
         <section className="flex items-center">
            <FaUserCircle className="text-3xl mr-3 text-gray-500"/>
            <span>{person.name}</span>
         </section>
         <button
        className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
          person.following
            ? "bg-green-500 text-white hover:bg-gray-800"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  )
}
