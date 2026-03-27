import React, { useEffect, useState } from 'react'
import DealCard from '../../ui/DealCard '
import axios from 'axios'
import { Link } from 'react-router-dom'

const DealBar = () => {
    const [deal, setDeal] = useState([])
    useEffect(()=>{
        const fetchDeal = async()=>{
            try {
               let response= await axios.get("https://dummyjson.com/products?limit=10&skip=10") 
               console.log(response.data.products);
               setDeal(response.data.products);
            } catch (error) {
                console.log(error)
            }
        }
        fetchDeal();
    },[])

  return (
    <> 
    <section className='px-10 overflow-hidden'>
        <div className='flex items-center justify-center gap-6 w-full pl-10 overflow-x-auto mt-10'>
            {deal.map((data)=>{
                return(
                    <Link to={`/product/${data.id}`} key={data.id}>
                    <DealCard/>
                    </Link>
                );
            })}
    <DealCard/>
    
    </div>

    </section>
    </>
  )
}

export default DealBar