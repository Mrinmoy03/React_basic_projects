import React from 'react'
import { useBlogs } from '../Shared/BloogContext'
import { Blog } from '../types'
import { ArticleCard } from './ArticleCard'
interface AriticleListProps{
    onEdit: (blog:Blog) => void
}
export const ArticleList: React.FC<AriticleListProps> = ({onEdit}) => {
  const {blogs, deleteBlog} =  useBlogs()
  return (
    <div className='ml-[5rem]'>
        {blogs.map(blog =>(
            <ArticleCard 
            key= {blog.id}
             article ={blog}
              onDelete ={()=>deleteBlog(blog.id)}
             onEdit={() =>onEdit(blog)} />
        ))}
    </div>
  )
}
