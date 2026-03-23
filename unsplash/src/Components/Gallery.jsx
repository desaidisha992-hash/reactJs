import { Plus, Bookmark, ArrowDown } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
    const[img, setImg] = useState([]);
     const[page, setPage] = useState(1);
     const [loading, SetLoading] = useState(false)
 useEffect(()=>{
   
     const FetchImages = async()=>{
      if(loading) return;
      SetLoading(true);
    try {
       let response =  await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=30`);    
     setImg((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.log(error)
    } finally{
      SetLoading(false);
    }
  }
    FetchImages();
     
       
    
 },[page,loading])
    
   // scroll effect
    useEffect(()=>{
        const handleScroll =() =>{
            if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300)
            {
                setPage((prev) => {
                    return prev + 1;
                })
            }
        }
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll)
    }, [])
    

  return (
    <>
      <section>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">

            {img.map((data)=>{
           return(
            
          <div className="relative mb-4 break-inside-avoid shadow group" key={data.id}>
            {/* Image */}
            <img src={data.download_url} alt="image" className="w-full object-cover"/>

            {/* Overlay div */}
            <div className="absolute top-0 bg-black/20 inset-0 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {/* top icon */}
              <div className="flex justify-end gap-2">
                {/* Bookmark icon */}
                <div className="bg-white p-2 rounded-md"><Bookmark /></div>
                {/* Plus Icon */}
                <div className="bg-white p-2 rounded-md"><Plus /></div>
              </div>
              {/* bottom icon */}
              <div className="flex items-center justify-between">
                <h1 className="text-white font-bold">{data.author}</h1>
                <div className="bg-white p-2 rounded-md"><ArrowDown /></div>
              </div>
            </div>
          </div>
           )
            })}

          
          

        </div>
      </section>
    </>
  );
};

export default Gallery;