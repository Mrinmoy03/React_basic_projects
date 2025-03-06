import { FaEdit, FaTrash } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

export const ArticleCard: React.FC<ArticileCardProps> = ({ article, onDelete, onEdit }) => {
    return (
      <div className="flex items-center p-4 bg-white w-[40rem] mb-6 ml-[2rem] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* Image */}
        <img 
          src={article.image} 
          alt={article.title}   
          className="w-36 h-24 object-cover rounded-lg shadow-md" 
        />
  
       
        <div className="ml-6 flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
          <p className="text-sm text-gray-700 flex-1">{article.description}</p>
          <div className="flex items-center justify-between mt-4 text-gray-600">
            <span className="text-sm">{article.time}</span>
            <div className="flex space-x-3">
                <FaBookBookmark className="text-gray-500 hover:text-gray-700 transition-colors duration-200 cursor-pointer"/>
                <FaEdit onClick={onEdit} className="text-blue-500 hover:text-blue-700 transition-colors duration-200 cursor-pointer"/> 
                <FaTrash  onClick={onDelete} className="text-red-500 hover:text-red-700 transition-colors duration-200 cursor-pointer"/> 
            </div>

          </div>
          {/* <div className="flex space-x-4">
            <button onClick={onEdit} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Edit</button>
            <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg">Delete</button>
          </div> */}
        </div>
      </div>
    );
  };
  