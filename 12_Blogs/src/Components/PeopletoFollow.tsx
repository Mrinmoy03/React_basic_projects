import { UserCard } from "./UserCard"

const PeopleToFollow =[
    {name: "Alena Gouse", following:false},
    {name: "Ruben Bator", following:true},
    {name: "Aspen stanon", following:false},
    {name: "Kishor Das", following:true},
    {name: "Jaman Ali", following:false},

]

export const PeopletoFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">
        People to Follow
      </h3>
        <div className="space-y-4">
            {PeopleToFollow.map((person, index)=>(
                <UserCard key={index} person={person}/>
            ))}
        </div>

        </div>
  )
}
