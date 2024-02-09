import React, { useEffect } from 'react'
import ProCard from '../components/ProCard';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../assets/api';

const Allproducts = () => {

    const { isLoading, isError, data } = useQuery({
        queryKey: ["product"],
        queryFn: fetchProducts,
    })
    console.log(data)
    if (isLoading) return <h1>loading..</h1>

    if (isError) return <h1>error</h1>

    return (
        <div className=' bg-slate-500'>
            <div className='flex justify-center p-3 text-3xl font-semibold'>All Products</div>
            <div className='grid grid-rows-3 p-5'>
                <div className="grid grid-cols-4 gap-5">
                    {data.map((pro) => (

                        <ProCard key={pro._id} pro={pro} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Allproducts