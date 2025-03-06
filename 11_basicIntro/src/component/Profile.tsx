import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

export const Profile: React.FC = () => {
  const [bannerUrl, setBannerUrl] = useState<string>("https://placehold.co/1500x400");
  const [profileUrl, setProfileUrl] = useState<string>("https://placehold.co/100");
 const handleBannerImage = (e:any) => {
    if (e.target.files && e.target.files[0]) {
      setBannerUrl(URL.createObjectURL(e.target.files[0]));
    }
  }
 const handleProfileImage = (e:any) => {
    if (e.target.files && e.target.files[0]) {
        setProfileUrl(URL.createObjectURL(e.target.files[0]));
    }
  }
  return (
    <div className="relative  ml-[5rem]">
     {/* banner */}
      <div className="relative">
        <img src={bannerUrl} alt="banner-image" className="w-full h-60 object-cover" />
        
      
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input 
          type="file"
           id="banner-upload" 
            accept="image/*" 
            className="hidden"
             onChange={handleBannerImage}/>
        </button>

      
      </div>
         {/* logo */}
         <div className="flex items-center ml-4 mt-[2rem]">
            <img src={profileUrl} alt="Profile image"  className="w-40 h-40 object-cover rounded-full border-white relative"/>
            <button className="absolute  ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
            </label>
            <input 
          type="file"
           id="profile-upload" 
            accept="image/*" 
            className="hidden"
             onChange={handleProfileImage}/>
            </button>

            <div className="ml-4 mt-4">
                <h1 className="text-2xl font-bold">Mrinmoy</h1>
                <p>1M views</p>
                <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consequuntur quam quisquam quis ad atque provident velit consectetur fugiat aperiam
                </p>
                <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">Subscribe</button>
            </div>
         </div>
         <Tabs/>
    </div>
  );
};
