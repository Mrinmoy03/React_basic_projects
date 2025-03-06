import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Links=[
  {
    href: "https://github.com/Mrinmoy03",
    label:"Github",
    icon:<FaGithub className="h-6 w-6 text-black-500" />
  },
  {
    href: "https://www.linkedin.com/in/mrinmoy-bhattacharjee-9231ba238/",
    label:"LinkedIn",
    icon:<FaLinkedinIn  className="h-6 w-6 text-blue-500"/>
  },
]

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Me</h2>
      <div className="flex items-center">
        {
          Links.map((link)=>(
            <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]">{link.icon}
             <span className="text-lg">{link.label}</span></a>
           
          ))
        }
      </div>
    </section>
  )
}

export default Contact