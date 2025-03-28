import { IoMdAddCircle } from "react-icons/io"
import { Navigation } from "./Components/Navigation"
import { PeopletoFollow } from "./Components/PeopletoFollow"
import { TopicsList } from "./Components/TopicsList"
import TrendsList from "./Components/TrendsList"
import { BlogProvider } from "./Shared/BloogContext"
import { useState } from "react"
import { Blog } from "./types"
import { Modal } from "./Components/Modal"
import { BlogForm } from "./Components/BlogForm"
import { ArticleList } from "./Components/ArticleList"

function App() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog |null> (null)
  const openModalForNewBlog =()=>{
    setEditingBlog(null)
    setModalOpen(true)
  }
  const openModalForEdit = (blog:Blog)=>{
    setEditingBlog(blog)
    setModalOpen(true)
  }

  return (
    <> 
    <BlogProvider>
    <Navigation/>
    <div className="flex justify-center">
     <section className="mx-auto p-6">
      <div>
        <button onClick={openModalForNewBlog} className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4">Add New Blog <IoMdAddCircle className="ml-[.5rem]"/></button>
           <ArticleList onEdit={openModalForEdit}/>
        {isModalOpen && <Modal onClose={()=> setModalOpen(false)}>
            <BlogForm existingBlog={editingBlog} onClose={()=>setModalOpen(false)}/>
        </Modal> }   
        
      </div>
     </section>
         
     <div className="w-[30%]">
      <PeopletoFollow/>
      <TrendsList/>
      <TopicsList/>
     </div>
    </div>
    
    </BlogProvider>
    </>
  )
}

export default App
